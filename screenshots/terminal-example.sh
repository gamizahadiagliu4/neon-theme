#!/bin/bash

# Neon Cyberpunk Theme - Terminal Example
# Demonstrates terminal colors and command syntax highlighting

echo "🌃 Welcome to the Neon Cyberpunk Terminal 🌃"
echo "=============================================="

# System Information
echo -e "\n⚡ SYSTEM STATUS:"
echo -e "\033[36mHostname:\033[0m $(hostname)"
echo -e "\033[36mUser:\033[0m $(whoami)"
echo -e "\033[36mUptime:\033[0m $(uptime -p)"
echo -e "\033[36mKernel:\033[0m $(uname -r)"

# Network Operations
echo -e "\n🌐 NETWORK DIAGNOSTICS:"
ping -c 3 8.8.8.8 | grep -E "(PING|64 bytes|ping statistics)"
echo -e "\033[32m✅ Network connectivity: ONLINE\033[0m"

# File Operations with Colors
echo -e "\n📁 FILE SYSTEM OPERATIONS:"
ls -la --color=always | head -10
echo -e "\033[33m⚠️  Listing top 10 files in current directory\033[0m"

# Process Management
echo -e "\n🔄 PROCESS MONITORING:"
ps aux --sort=-%cpu | head -5 | awk '{
    if (NR==1) {
        printf "\033[35m%-10s %-5s %-5s %-5s %-10s %-s\033[0m\n", $1, $2, $3, $4, $5, $11
    } else {
        printf "\033[36m%-10s\033[0m \033[33m%-5s\033[0m \033[32m%-5s\033[0m \033[31m%-5s\033[0m \033[35m%-10s\033[0m \033[37m%-s\033[0m\n", $1, $2, $3, $4, $5, $11
    }
}'

# Git Operations
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
    echo -e "\033[35mLast commit:\033[0m $(git log -1 --pretty=format:'%h - %s (%cr)')"
else
    echo -e "\033[31m❌ No git repository found\033[0m"
fi

# Docker Operations
echo -e "\n🐳 DOCKER CONTAINERS:"
if command -v docker &> /dev/null; then
    docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | while IFS= read -r line; do
        if [[ $line == *"NAMES"* ]]; then
            echo -e "\033[35m$line\033[0m"
        elif [[ $line == *"Up"* ]]; then
            echo -e "\033[32m$line\033[0m"
        else
            echo -e "\033[31m$line\033[0m"
        fi
    done
else
    echo -e "\033[33m⚠️  Docker not installed\033[0m"
fi

# System Resources
echo -e "\n💾 SYSTEM RESOURCES:"
echo -e "\033[36mMemory Usage:\033[0m"
free -h | awk 'NR==2{printf "\033[32m  Used: %s\033[0m / \033[33mTotal: %s\033[0m (\033[31m%.2f%%\033[0m)\n", $3, $2, $3*100/$2}'

echo -e "\033[36mDisk Usage:\033[0m"
df -h / | awk 'NR==2{printf "\033[32m  Used: %s\033[0m / \033[33mTotal: %s\033[0m (\033[31m%s\033[0m)\n", $3, $2, $5}'

echo -e "\033[36mCPU Load:\033[0m"
uptime | awk -F'load average:' '{print "\033[32m " $2 "\033[0m"}'

# Package Management
echo -e "\n📦 PACKAGE MANAGEMENT:"
if command -v apt &> /dev/null; then
    echo -e "\033[36mAPT Package Manager:\033[0m"
    apt list --upgradable 2>/dev/null | wc -l | awk '{print "\033[33m  Upgradable packages: " $1 "\033[0m"}'
elif command -v yum &> /dev/null; then
    echo -e "\033[36mYUM Package Manager:\033[0m"
    yum check-update 2>/dev/null | grep -c "updates" | awk '{print "\033[33m  Available updates: " $1 "\033[0m"}'
elif command -v pacman &> /dev/null; then
    echo -e "\033[36mPacman Package Manager:\033[0m"
    pacman -Qu 2>/dev/null | wc -l | awk '{print "\033[33m  Upgradable packages: " $1 "\033[0m"}'
else
    echo -e "\033[31m❌ No supported package manager found\033[0m"
fi

# Development Environment
echo -e "\n💻 DEVELOPMENT ENVIRONMENT:"
echo -e "\033[36mNode.js:\033[0m $(node --version 2>/dev/null || echo '\033[31mNot installed\033[0m')"
echo -e "\033[36mPython:\033[0m $(python3 --version 2>/dev/null || echo '\033[31mNot installed\033[0m')"
echo -e "\033[36mGit:\033[0m $(git --version 2>/dev/null || echo '\033[31mNot installed\033[0m')"
echo -e "\033[36mDocker:\033[0m $(docker --version 2>/dev/null || echo '\033[31mNot installed\033[0m')"
echo -e "\033[36mVS Code:\033[0m $(code --version 2>/dev/null | head -1 || echo '\033[31mNot installed\033[0m')"

# Network Interfaces
echo -e "\n🔌 NETWORK INTERFACES:"
ip addr show | grep -E "^[0-9]+:|inet " | while read line; do
    if [[ $line =~ ^[0-9]+: ]]; then
        interface=$(echo $line | awk '{print $2}' | sed 's/://')
        echo -e "\033[35m$interface\033[0m"
    elif [[ $line =~ inet ]]; then
        ip=$(echo $line | awk '{print $2}')
        echo -e "  \033[32m$ip\033[0m"
    fi
done

# Security Status
echo -e "\n🔐 SECURITY STATUS:"
echo -e "\033[36mFirewall Status:\033[0m"
if command -v ufw &> /dev/null; then
    ufw status | head -1 | awk '{print "\033[32m  " $0 "\033[0m"}'
elif command -v firewall-cmd &> /dev/null; then
    firewall-cmd --state 2>/dev/null | awk '{print "\033[32m  Firewall: " $0 "\033[0m"}'
else
    echo -e "\033[33m  ⚠️  Firewall status unknown\033[0m"
fi

echo -e "\033[36mSSH Service:\033[0m"
systemctl is-active ssh 2>/dev/null | awk '{
    if ($0 == "active") 
        print "\033[32m  SSH: Running\033[0m"
    else 
        print "\033[31m  SSH: Not running\033[0m"
}'

# Log Analysis
echo -e "\n📋 RECENT LOG ENTRIES:"
echo -e "\033[36mSystem Logs (last 5 entries):\033[0m"
journalctl -n 5 --no-pager 2>/dev/null | while read line; do
    if [[ $line =~ ERROR|error ]]; then
        echo -e "\033[31m$line\033[0m"
    elif [[ $line =~ WARNING|warning ]]; then
        echo -e "\033[33m$line\033[0m"
    elif [[ $line =~ INFO|info ]]; then
        echo -e "\033[32m$line\033[0m"
    else
        echo -e "\033[37m$line\033[0m"
    fi
done

# Custom Functions
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

function matrix_effect() {
    echo -e "\033[32m"
    for i in {1..10}; do
        echo -n "$(shuf -i 0-1 -n 1)"
        sleep 0.1
    done
    echo -e "\033[0m"
}

# Interactive Commands
echo -e "\n🎮 INTERACTIVE COMMANDS:"
echo -e "\033[35mAvailable functions:\033[0m"
echo -e "\033[36m  neon_banner\033[0m - Display neon ASCII art"
echo -e "\033[36m  matrix_effect\033[0m - Show matrix-style binary"

# File Search with Colors
echo -e "\n🔍 FILE SEARCH EXAMPLES:"
echo -e "\033[36mFinding JavaScript files:\033[0m"
find . -name "*.js" -type f 2>/dev/null | head -5 | while read file; do
    echo -e "\033[33m  📄 $file\033[0m"
done

echo -e "\033[36mFinding Python files:\033[0m"
find . -name "*.py" -type f 2>/dev/null | head -5 | while read file; do
    echo -e "\033[32m  🐍 $file\033[0m"
done

# Environment Variables
echo -e "\n🌍 ENVIRONMENT VARIABLES:"
echo -e "\033[36mPATH directories:\033[0m"
echo $PATH | tr ':' '\n' | head -5 | while read dir; do
    echo -e "\033[33m  📁 $dir\033[0m"
done

echo -e "\033[36mShell:\033[0m \033[32m$SHELL\033[0m"
echo -e "\033[36mHome:\033[0m \033[32m$HOME\033[0m"
echo -e "\033[36mUser:\033[0m \033[32m$USER\033[0m"

# Completion Message
echo -e "\n🌟 CYBERPUNK TERMINAL SCAN COMPLETE 🌟"
echo -e "\033[35m============================================\033[0m"
echo -e "\033[36mAll systems operational. Welcome to the neon grid! ⚡\033[0m"

# Aliases for cyberpunk-themed commands
alias matrix='cmatrix -C cyan'
alias neon='echo -e "\033[36m🌃 NEON MODE ACTIVATED ⚡\033[0m"'
alias cyber='figlet -f digital "CYBERPUNK" | lolcat'
alias hack='echo -e "\033[32mAccess granted. Welcome, hacker! 💀\033[0m"'

# Export functions for use in shell
export -f neon_banner matrix_effect

echo -e "\n\033[33m💡 Tip: Use 'neon_banner' or 'matrix_effect' for cool effects!\033[0m"
