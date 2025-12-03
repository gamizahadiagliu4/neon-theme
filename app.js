/**
 * Neon Cyberpunk Theme - VS Code Extension Entry Point
 * Greets users when activating the theme extension
 */

const vscode = require('vscode');

/**
 * Called when the extension is activated
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
    console.log('🌟 Neon Cyberpunk Theme extension is now active!');
    
    // Show welcome message when extension activates
    showWelcomeMessage();
    
    // Register command to show welcome message manually
    const welcomeCommand = vscode.commands.registerCommand('neon-cyberpunk.showWelcome', () => {
        showWelcomeMessage();
    });
    
    context.subscriptions.push(welcomeCommand);
    
    // Check if this is the first time the extension is activated
    const hasShownWelcome = context.globalState.get('hasShownWelcome', false);
    
    if (!hasShownWelcome) {
        // Mark that we've shown the welcome message
        await context.globalState.update('hasShownWelcome', true);
        
        // Show welcome notification
        const action = await vscode.window.showInformationMessage(
            '🌟 Welcome to the Neon Cyberpunk Theme! Ready to enter the digital future?',
            'Activate Theme',
            'Show Welcome',
            'Later'
        );
        
        if (action === 'Activate Theme') {
            vscode.commands.executeCommand('workbench.action.selectTheme');
        } else if (action === 'Show Welcome') {
            showWelcomeMessage();
        }
    }
}

/**
 * Shows the welcome message in a webview panel
 */
function showWelcomeMessage() {
    const panel = vscode.window.createWebviewPanel(
        'neonCyberpunkWelcome',
        '🌟 Neon Cyberpunk Theme',
        vscode.ViewColumn.One,
        {
            enableScripts: true,
            retainContextWhenHidden: true
        }
    );
    
    panel.webview.html = getWelcomeHtml();
    
    // Handle messages from the webview
    panel.webview.onDidReceiveMessage(
        message => {
            switch (message.command) {
                case 'activateTheme':
                    vscode.commands.executeCommand('workbench.action.selectTheme');
                    break;
                case 'openSettings':
                    vscode.commands.executeCommand('workbench.action.openSettings', 'workbench.colorTheme');
                    break;
            }
        }
    );
}

/**
 * Generates the HTML content for the welcome webview
 */
function getWelcomeHtml() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Neon Cyberpunk Theme</title>
        <style>
            body {
                background: linear-gradient(135deg, #0a0a0f 0%, #1a0a1f 50%, #0f0a1a 100%);
                color: #00ffff;
                font-family: 'Courier New', monospace;
                margin: 0;
                padding: 20px;
                min-height: 100vh;
                overflow-x: hidden;
            }
            
            .container {
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
            }
            
            .neon-title {
                font-size: 3em;
                font-weight: bold;
                text-shadow: 
                    0 0 5px #00ffff,
                    0 0 10px #00ffff,
                    0 0 15px #00ffff,
                    0 0 20px #00ffff;
                margin-bottom: 20px;
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.8; }
            }
            
            .welcome-box {
                background: rgba(0, 255, 255, 0.1);
                border: 2px solid #00ffff;
                border-radius: 10px;
                padding: 30px;
                margin: 20px 0;
                box-shadow: 
                    0 0 20px rgba(0, 255, 255, 0.3),
                    inset 0 0 20px rgba(0, 255, 255, 0.1);
            }
            
            .feature-list {
                text-align: left;
                margin: 20px 0;
            }
            
            .feature-item {
                margin: 10px 0;
                padding: 10px;
                background: rgba(255, 0, 255, 0.1);
                border-left: 3px solid #ff00ff;
                border-radius: 5px;
            }
            
            .button {
                background: linear-gradient(45deg, #ff00ff, #00ffff);
                border: none;
                color: #000;
                padding: 15px 30px;
                margin: 10px;
                border-radius: 25px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .button:hover {
                transform: scale(1.05);
                box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
            }
            
            .theme-preview {
                display: flex;
                justify-content: space-around;
                margin: 30px 0;
                flex-wrap: wrap;
            }
            
            .theme-card {
                background: rgba(0, 0, 0, 0.5);
                border: 1px solid #00ffff;
                border-radius: 10px;
                padding: 20px;
                margin: 10px;
                flex: 1;
                min-width: 250px;
                max-width: 350px;
            }
            
            .theme-name {
                color: #ffff00;
                font-size: 1.2em;
                font-weight: bold;
                margin-bottom: 10px;
            }
            
            .ascii-art {
                font-family: monospace;
                font-size: 0.6em;
                color: #00ffff;
                white-space: pre;
                margin: 20px 0;
                text-shadow: 0 0 5px #00ffff;
            }
            
            .instructions {
                background: rgba(255, 255, 0, 0.1);
                border: 1px solid #ffff00;
                border-radius: 5px;
                padding: 20px;
                margin: 20px 0;
                text-align: left;
            }
            
            .step {
                margin: 10px 0;
                padding: 5px 0;
            }
            
            .step-number {
                color: #ff00ff;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="neon-title">NEON CYBERPUNK</div>
            
            <div class="ascii-art">
    ███▄    █ ▓█████  ▒█████   ███▄    █ 
    ██ ▀█   █ ▓█   ▀ ▒██▒  ██▒ ██ ▀█   █ 
   ▓██  ▀█ ██▒▒███   ▒██░  ██▒▓██  ▀█ ██▒
   ▓██▒  ▐▌██▒▒▓█  ▄ ▒██   ██░▓██▒  ▐▌██▒
   ▒██░   ▓██░░▒████▒░ ████▓▒░▒██░   ▓██░
   ░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒ 
   ░ ░░   ░ ▒░ ░ ░  ░  ░ ▒ ▒░ ░ ░░   ░ ▒░
      ░   ░ ░    ░   ░ ░ ░ ▒     ░   ░ ░ 
            ░    ░  ░    ░ ░           ░ 
            </div>
            
            <div class="welcome-box">
                <h2>🌟 WELCOME TO THE FUTURE 🌟</h2>
                <p>Thank you for installing the <strong>Neon Cyberpunk Theme</strong>!</p>
                <p>🚀 You've just entered the digital realm where code meets neon aesthetics.</p>
            </div>
            
            <div class="theme-preview">
                <div class="theme-card">
                    <div class="theme-name">🔥 Neon Cyberpunk</div>
                    <p>Full intensity cyberpunk experience with electric colors and high contrast.</p>
                </div>
                <div class="theme-card">
                    <div class="theme-name">✨ Neon Cyberpunk Soft</div>
                    <p>Softer variant perfect for extended coding sessions with reduced eye strain.</p>
                </div>
            </div>
            
            <div class="feature-list">
                <div class="feature-item">⚡ Electric cyan, magenta, and yellow highlights</div>
                <div class="feature-item">👁️ High contrast for better readability</div>
                <div class="feature-item">🌙 Perfect for night coding sessions</div>
                <div class="feature-item">🤖 Futuristic cyberpunk aesthetics</div>
                <div class="feature-item">🎨 Two theme variants to choose from</div>
            </div>
            
            <div class="instructions">
                <h3>🎯 How to activate your theme:</h3>
                <div class="step"><span class="step-number">1.</span> Open VS Code Command Palette (Ctrl+Shift+P / Cmd+Shift+P)</div>
                <div class="step"><span class="step-number">2.</span> Type "Preferences: Color Theme"</div>
                <div class="step"><span class="step-number">3.</span> Select "Neon Cyberpunk" or "Neon Cyberpunk Soft"</div>
            </div>
            
            <div style="margin: 30px 0;">
                <button class="button" onclick="activateTheme()">🎨 Choose Theme</button>
                <button class="button" onclick="openSettings()">⚙️ Open Settings</button>
            </div>
            
            <p style="margin-top: 40px; color: #ff00ff;">
                💫 Happy coding in the neon-lit digital future! 💫
            </p>
        </div>
        
        <script>
            const vscode = acquireVsCodeApi();
            
            function activateTheme() {
                vscode.postMessage({
                    command: 'activateTheme'
                });
            }
            
            function openSettings() {
                vscode.postMessage({
                    command: 'openSettings'
                });
            }
        </script>
    </body>
    </html>
    `;
}

/**
 * Called when the extension is deactivated
 */
function deactivate() {
    console.log('🌟 Neon Cyberpunk Theme extension deactivated');
}

module.exports = {
    activate,
    deactivate
};
