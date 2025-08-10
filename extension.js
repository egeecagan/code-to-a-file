const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.codeToAFile', async () => {
        const selection = await vscode.window.showOpenDialog({
            canSelectMany: false,
            openLabel: 'Code to a File',
            filters: { 'All files': ['*'] }
        });

        if (!selection || !selection[0]) {
            return;
        }

        const fileUri = selection[0];

        const doc = await vscode.workspace.openTextDocument(fileUri);

        await vscode.window.showTextDocument(doc, { preview: false });
    });

    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
