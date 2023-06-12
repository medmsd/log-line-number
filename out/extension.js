"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    let disposable = vscode.commands.registerTextEditorCommand("extension.logLineNumber", (textEditor, edit) => {
        const lineNumber = textEditor.selection.active.line + 1;
        const logStatement = `console.log(${lineNumber});`;
        const position = new vscode.Position(lineNumber, 0);
        edit.insert(position, `\n${logStatement}`);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map