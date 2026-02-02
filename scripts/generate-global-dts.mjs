import ts from 'typescript'

if (!ts.sys.fileExists('./index.d.ts')) {
  throw new Error('index.d.ts not found')
}

const content = ts.sys.readFile('./index.d.ts')
const sourceFile = ts.createSourceFile(
  'index.d.ts',
  content,
  ts.ScriptTarget.Latest,
  true,
)

const exportDeclarations = []
const innerDeclaretions = []

const isExportDeclaration = (node) => {
  const modifiers = node.modifiers
  if (modifiers) {
    return modifiers.some(
      (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
    )
  }
  return false
}

const removeExportModifier = (node) => {
  const modifiers = node.modifiers
  if (modifiers) {
    const newModifiers = modifiers.filter(
      (modifier) => modifier.kind !== ts.SyntaxKind.ExportKeyword,
    )
    return ts.factory.updateTypeAliasDeclaration(
      node,
      newModifiers,
      node.name,
      node.typeParameters,
      node.type,
    )
  }
  return node
}

for (const statement of sourceFile.statements) {
  if (isExportDeclaration(statement)) {
    exportDeclarations.push(removeExportModifier(statement))
  } else {
    innerDeclaretions.push(statement)
  }
}

const newStatements = [...innerDeclaretions]

const globalStatement = ts.factory.createModuleDeclaration(
  [ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword)],
  ts.factory.createIdentifier('global'),
  ts.factory.createModuleBlock(exportDeclarations),
  ts.NodeFlags.GlobalAugmentation,
)
newStatements.push(globalStatement)
const result = ts.factory.updateSourceFile(sourceFile, newStatements)

const printer = ts.createPrinter()
ts.sys.writeFile('./global.d.ts', printer.printFile(result))
