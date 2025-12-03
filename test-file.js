/**
 * Neon Cyberpunk Theme Test File
 * This file demonstrates the theme's syntax highlighting capabilities
 * across different programming constructs and languages.
 */

// Import statements
import React, { useState, useEffect } from 'react';
import { cyberpunkAPI } from './api/neon-interface';

// Constants and variables
const NEON_COLORS = {
    cyan: '#00ffff',
    magenta: '#ff00ff',
    yellow: '#ffff00',
    violet: '#8a2be2',
    green: '#00ffaa'
};

let globalCounter = 0;
var legacyVariable = "deprecated";

// Class definition
class CyberpunkInterface {
    constructor(name, type = 'neural') {
        this.name = name;
        this.type = type;
        this.isActive = false;
        this.connections = [];
    }

    // Method with async/await
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

    // Generator function
    *dataStream() {
        for (let i = 0; i < this.connections.length; i++) {
            yield this.connections[i];
        }
    }

    // Arrow function with destructuring
    processData = ({ input, filters = [] }) => {
        return input
            .filter(item => filters.every(filter => filter(item)))
            .map(item => ({ ...item, processed: true }))
            .reduce((acc, curr) => acc + curr.value, 0);
    }
}

// Function with template literals and regex
function validateNeonCode(code) {
    const pattern = /^[A-F0-9]{6}$/i;
    const isValid = pattern.test(code);
    
    return `Color code ${code} is ${isValid ? 'valid' : 'invalid'}`;
}

// React functional component
const NeonButton = ({ children, onClick, variant = 'primary' }) => {
    const [isGlowing, setIsGlowing] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlowing(prev => !prev);
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    const buttonStyle = {
        backgroundColor: NEON_COLORS[variant] || NEON_COLORS.cyan,
        color: '#0a0a0f',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        boxShadow: isGlowing ? `0 0 20px ${NEON_COLORS[variant]}` : 'none',
        transition: 'all 0.3s ease'
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};

// Async function with Promise
async function initializeCyberpunkSystem() {
    const systems = ['neural-net', 'data-core', 'security-grid'];
    
    try {
        const results = await Promise.all(
            systems.map(async (system) => {
                const cyberpunkInterface = new CyberpunkInterface(system);
                return await cyberpunkInterface.connect('mainframe');
            })
        );
        
        console.log('All systems online:', results);
        return results.every(result => result.status === 'connected');
    } catch (error) {
        console.error('System initialization failed:', error);
        return false;
    }
}

// Object with various property types
const cyberpunkConfig = {
    version: '2.0.77',
    isProduction: false,
    maxConnections: 1000,
    themes: ['neon', 'dark', 'cyberpunk'],
    settings: {
        graphics: {
            quality: 'ultra',
            effects: true,
            rayTracing: true
        },
        audio: {
            volume: 0.8,
            spatialAudio: true
        }
    },
    // Method shorthand
    initialize() {
        return initializeCyberpunkSystem();
    },
    // Computed property
    get status() {
        return this.isProduction ? 'LIVE' : 'DEV';
    }
};

// Array methods and higher-order functions
const neonData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const processedData = neonData
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);

// Conditional and ternary operators
const systemStatus = cyberpunkConfig.isProduction 
    ? 'Production Mode Active' 
    : 'Development Mode';

if (processedData > 50) {
    console.log('High data throughput detected');
} else if (processedData > 20) {
    console.log('Normal data flow');
} else {
    console.log('Low data activity');
}

// Switch statement
switch (cyberpunkConfig.settings.graphics.quality) {
    case 'ultra':
        console.log('Maximum visual fidelity enabled');
        break;
    case 'high':
        console.log('High quality graphics active');
        break;
    case 'medium':
        console.log('Balanced performance mode');
        break;
    default:
        console.log('Basic graphics mode');
}

// Export statement
export { CyberpunkInterface, NeonButton, cyberpunkConfig };
export default initializeCyberpunkSystem;

/* 
Multi-line comment demonstrating
the cyberpunk theme's comment styling
with proper contrast and readability
*/

// TODO: Add more neon effects
// FIXME: Optimize connection pooling
// NOTE: This theme rocks! 🌃⚡
