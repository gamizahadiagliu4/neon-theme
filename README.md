# Neon Cyberpunk Theme for Visual Studio Code

> A futuristic cyberpunk theme with neon accents and high contrast colors for VS Code. Perfect for night coding sessions with electric cyan, magenta, and yellow highlights.

![Neon Cyberpunk Theme Preview](https://github.com/gamizahadiagliu4/neon-theme/raw/main/neon.png)

## ✨ Features

- **🌃 Cyberpunk Aesthetic**: Inspired by futuristic neon-lit cityscapes
- **⚡ High Contrast**: Optimized for long coding sessions with excellent readability
- **🎨 Neon Color Palette**: Electric cyan, magenta, yellow, and violet accents
- **🔧 Two Variants**: Regular and Soft versions for different preferences
- **🌈 Semantic Highlighting**: Full support for modern VS Code features
- **🎯 Language Support**: Optimized for JavaScript, Python, HTML, CSS, JSON, Markdown, and more
- **👁️ Eye-Friendly**: Designed to reduce eye strain during night coding

## 🎨 Color Palette

### Main Colors
- **Background Primary**: `#0a0a0f` - Deep dark blue
- **Background Secondary**: `#0d0d14` - Slightly lighter for layering
- **Background Tertiary**: `#06060a` - Almost black for depth
- **Text Primary**: `#e0e0ff` - Light blue with purple tint
- **Text Secondary**: `#a0a0d0` - Muted blue-gray

### Neon Accents
- **Cyan**: `#00ffff` - Electric cyan (primary accent)
- **Magenta**: `#ff00ff` - Neon purple (highlighting)
- **Yellow**: `#ffff00` - Neon yellow (warnings/functions)
- **Violet**: `#8a2be2` - Electric purple (secondary accent)
- **Green**: `#00ffaa` - Neon turquoise (strings/success)

## 📦 Installation

### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Neon Cyberpunk Theme"
4. Click Install
5. Go to File > Preferences > Color Theme
6. Select "Neon Cyberpunk" or "Neon Cyberpunk Soft"

### Manual Installation
1. Download the theme files
2. Copy to your VS Code extensions folder:
   - **Windows**: `%USERPROFILE%\.vscode\extensions`
   - **macOS**: `~/.vscode/extensions`
   - **Linux**: `~/.vscode/extensions`
3. Restart VS Code
4. Select the theme from Color Theme menu

## 🎯 Theme Variants

### Neon Cyberpunk (Regular)
- Full intensity neon colors
- Maximum contrast for bright environments
- Perfect for focused coding sessions

### Neon Cyberpunk Soft
- Slightly muted neon colors
- Reduced intensity for comfortable viewing
- Ideal for extended coding sessions

## 🛠️ Recommended Settings

For the best experience with this theme, consider these VS Code settings:

```json
{
    "editor.semanticHighlighting.enabled": true,
    "editor.bracketPairColorization.enabled": true,
    "editor.fontFamily": "'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace",
    "editor.fontLigatures": true,
    "editor.cursorBlinking": "smooth",
    "editor.cursorSmoothCaretAnimation": "on",
    "workbench.iconTheme": "material-icon-theme"
}
```

## 🎮 Perfect For

- **Night Coding**: Optimized for low-light environments
- **Cyberpunk Enthusiasts**: Authentic neon aesthetic
- **JavaScript/TypeScript**: Excellent syntax highlighting
- **Web Development**: Great for HTML, CSS, and frameworks
- **Python Development**: Clear distinction between elements
- **Terminal Work**: Vibrant ANSI colors

## 📸 Code Examples

![JavaScript/TypeScript](https://github.com/gamizahadiagliu4/neon-theme/raw/main/screenshot.png)

### JavaScript/TypeScript
```javascript
// Neon Cyberpunk Theme - JavaScript Example
import React, { useState, useEffect } from 'react';
import { cyberpunkAPI } from './api/neon-interface';

const NEON_COLORS = {
    cyan: '#00ffff',
    magenta: '#ff00ff',
    yellow: '#ffff00',
    violet: '#8a2be2',
    green: '#00ffaa'
};

class CyberpunkInterface {
    constructor(name, type = 'neural') {
        this.name = name;
        this.type = type;
        this.isActive = false;
        this.connections = [];
    }

    async connect(target) {
        try {
            console.log(`Establishing connection to ${target}...`);
            const response = await cyberpunkAPI.connect(target);
            
            if (response.success) {
                this.connections.push(target);
                this.isActive = true;
                return { status: 'connected', data: response.data };
            } else {
                throw new Error(`Connection failed: ${response.error}`);
            }
        } catch (error) {
            console.error('Connection error:', error.message);
            return { status: 'error', message: error.message };
        }
    }
}

const NeonButton = ({ children, onClick, variant = 'primary' }) => {
    const [isGlowing, setIsGlowing] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlowing(prev => !prev);
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <button 
            style={{
                backgroundColor: NEON_COLORS[variant] || NEON_COLORS.cyan,
                boxShadow: isGlowing ? `0 0 20px ${NEON_COLORS[variant]}` : 'none'
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
```

![Python](https://github.com/gamizahadiagliu4/neon-theme/raw/main/Python.png)

### Python
```python
#!/usr/bin/env python3
"""
Neon Cyberpunk Theme - Python Example
Demonstrates syntax highlighting for Python code
"""

import asyncio
import json
from typing import List, Dict, Optional
from dataclasses import dataclass
from enum import Enum

# Constants and enums
NEON_MATRIX_SIZE = 1024
DEFAULT_ENCRYPTION_KEY = "cyberpunk2077"

class ConnectionStatus(Enum):
    DISCONNECTED = "disconnected"
    CONNECTING = "connecting"
    CONNECTED = "connected"
    ERROR = "error"

@dataclass
class NeuralNode:
    """Represents a node in the cyberpunk neural network"""
    id: str
    position: tuple[float, float, float]
    connections: List[str]
    data_flow: float = 0.0
    is_active: bool = True

class CyberpunkMatrix:
    """Main class for managing the cyberpunk data matrix"""
    
    def __init__(self, size: int = NEON_MATRIX_SIZE):
        self.size = size
        self.nodes: Dict[str, NeuralNode] = {}
        self.status = ConnectionStatus.DISCONNECTED
        self._encryption_key = DEFAULT_ENCRYPTION_KEY
        
    async def connect_to_mainframe(self, host: str, port: int = 2077) -> bool:
        """Establishes connection to the cyberpunk mainframe"""
        try:
            self.status = ConnectionStatus.CONNECTING
            print(f"🔌 Connecting to {host}:{port}...")
            
            await asyncio.sleep(0.5)
            
            if self._validate_connection(host):
                self.status = ConnectionStatus.CONNECTED
                print("✅ Connection established!")
                return True
            else:
                raise ConnectionError("Invalid host credentials")
                
        except Exception as e:
            self.status = ConnectionStatus.ERROR
            print(f"❌ Connection failed: {e}")
            return False

# Generator function for data streaming
def neon_data_generator(count: int = 100):
    """Generates cyberpunk-themed data points"""
    categories = ['neural', 'quantum', 'bio', 'cyber']
    
    for i in range(count):
        yield {
            'id': f"node_{i:04d}",
            'category': np.random.choice(categories),
            'value': np.random.exponential(2.0),
            'timestamp': pd.Timestamp.now().isoformat()
        }

if __name__ == "__main__":
    print("🌃 Initializing Neon Cyberpunk Matrix...")
    asyncio.run(main())
    print("🌃 Matrix shutdown complete. Stay neon! ⚡")
```


![HTML/CSS](https://github.com/gamizahadiagliu4/neon-theme/raw/main/HTML_CSS.png)


### HTML/CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>🌃 Cyberpunk Neon Interface</title>
    
    <style>
        /* CSS Variables for Neon Colors */
        :root {
            --neon-cyan: #00ffff;
            --neon-magenta: #ff00ff;
            --neon-yellow: #ffff00;
            --neon-violet: #8a2be2;
            --neon-green: #00ffaa;
            --bg-primary: #0a0a0f;
            --bg-secondary: #0d0d14;
            --text-primary: #e0e0ff;
        }

        /* Neon Glow Animation */
        @keyframes neonGlow {
            0%, 100% {
                text-shadow: 
                    0 0 5px currentColor,
                    0 0 10px currentColor,
                    0 0 15px currentColor,
                    0 0 20px var(--neon-cyan);
            }
            50% {
                text-shadow: 
                    0 0 2px currentColor,
                    0 0 5px currentColor,
                    0 0 8px currentColor,
                    0 0 12px var(--neon-cyan);
            }
        }

        body {
            font-family: 'Fira Code', monospace;
            background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            color: var(--text-primary);
            min-height: 100vh;
        }

        .cyberpunk-header h1 {
            font-size: 3rem;
            color: var(--neon-cyan);
            animation: neonGlow 2s ease-in-out infinite alternate;
            text-transform: uppercase;
            letter-spacing: 0.2em;
        }

        .neon-button {
            padding: 0.75rem 1.5rem;
            background: transparent;
            border: 2px solid var(--neon-yellow);
            color: var(--neon-yellow);
            text-transform: uppercase;
            transition: all 0.3s ease;
        }

        .neon-button:hover {
            color: var(--bg-primary);
            background: var(--neon-yellow);
            box-shadow: 
                0 0 20px var(--neon-yellow),
                0 0 40px var(--neon-yellow);
        }
    </style>
</head>

<body>
    <header class="cyberpunk-header">
        <h1>🌃 Neon Cyberpunk</h1>
        <p>Welcome to the digital frontier</p>
    </header>

    <main>
        <button class="neon-button">Enter Matrix</button>
    </main>

    <script>
        // Interactive neon effects
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.neon-button');
            
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    console.log('🌃 Neon button activated!');
                });
            });
        });
    </script>
</body>
</html>
```



![terminal](https://github.com/gamizahadiagliu4/neon-theme/raw/main/terminal-example.png)

### Terminal
```bash
#!/bin/bash
# Neon Cyberpunk Theme - Terminal Example

echo "🌃 Welcome to the Neon Cyberpunk Terminal 🌃"
echo "=============================================="

# System Information with colors
echo -e "\n⚡ SYSTEM STATUS:"
echo -e "\033[36mHostname:\033[0m $(hostname)"
echo -e "\033[36mUser:\033[0m $(whoami)"
echo -e "\033[36mUptime:\033[0m $(uptime -p)"

# Network Operations
echo -e "\n🌐 NETWORK DIAGNOSTICS:"
ping -c 3 8.8.8.8 | grep -E "(PING|64 bytes)"
echo -e "\033[32m✅ Network connectivity: ONLINE\033[0m"

# Git Operations with color coding
echo -e "\n🔧 GIT REPOSITORY STATUS:"
if [ -d ".git" ]; then
    echo -e "\033[32m✅ Git repository detected\033[0m"
    git status --porcelain | while read status file; do
        case $status in
            "M ") echo -e "\033[33m📝 Modified: $file\033[0m" ;;
            "A ") echo -e "\033[32m➕ Added: $file\033[0m" ;;
            "D ") echo -e "\033[31m❌ Deleted: $file\033[0m" ;;
            "??") echo -e "\033[36m❓ Untracked: $file\033[0m" ;;
        esac
    done
    echo -e "\033[35mCurrent branch:\033[0m $(git branch --show-current)"
else
    echo -e "\033[31m❌ No git repository found\033[0m"
fi

# Custom neon functions
function neon_banner() {
    echo -e "\033[36m"
    echo "  ███╗   ██╗███████╗ ██████╗ ███╗   ██╗"
    echo "  ████╗  ██║██╔════╝██╔═══██╗████╗  ██║"
    echo "  ██╔██╗ ██║█████╗  ██║   ██║██╔██╗ ██║"
    echo "  ██║╚██╗██║██╔══╝  ██║   ██║██║╚██╗██║"
    echo "  ██║ ╚████║███████╗╚██████╔╝██║ ╚████║"
    echo "  ╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝"
    echo -e "\033[0m"
}

# Cyberpunk aliases
alias matrix='cmatrix -C cyan'
alias neon='echo -e "\033[36m🌃 NEON MODE ACTIVATED ⚡\033[0m"'
alias hack='echo -e "\033[32mAccess granted. Welcome, hacker! 💀\033[0m"'

echo -e "\n🌟 CYBERPUNK TERMINAL SCAN COMPLETE 🌟"
echo -e "\033[36mAll systems operational. Welcome to the neon grid! ⚡\033[0m"
```

## 🔧 Customization

You can customize the theme by adding these settings to your `settings.json`:

```json
{
    "workbench.colorCustomizations": {
        "[Neon Cyberpunk]": {
            "editor.background": "#0a0a0f",
            "terminal.background": "#0a0a0f"
        }
    },
    "editor.tokenColorCustomizations": {
        "[Neon Cyberpunk]": {
            "comments": "#6a6a8f"
        }
    }
}
```

## 🐛 Issues & Feedback

Found a bug or have a suggestion? Please report it on our [GitHub Issues](https://github.com/gamizahadiagliu4/neon-theme/issues) page.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This theme is licensed under the [MIT License](LICENSE.txt).

## 🙏 Acknowledgments

- Inspired by cyberpunk aesthetics and neon-lit cityscapes
- Color theory based on high-contrast accessibility guidelines
- Thanks to the VS Code community for feedback and suggestions

## 🔗 Related Themes

Looking for more cyberpunk themes? Check out:
- [Cyberpunk 2077 Theme](https://marketplace.visualstudio.com/items?itemName=max-SS.cyberpunk)
- [Synthwave '84](https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode)
- [Outrun](https://marketplace.visualstudio.com/items?itemName=samrapdev.outrun)

---

**Enjoy coding in the neon-lit future! 🌃⚡**
