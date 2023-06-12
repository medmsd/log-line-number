// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.logLineNumber",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const lineNumber = editor.selection.active.line + 1;
        const logStatement = `console.log('${lineNumber}');\n`;
        const newPosition = new vscode.Position(lineNumber - 1, 0);
        editor.edit((editBuilder) => {
          editBuilder.insert(newPosition, logStatement);
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
