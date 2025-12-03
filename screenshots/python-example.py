#!/usr/bin/env python3
"""
Neon Cyberpunk Theme - Python Example
Demonstrates syntax highlighting for Python code
"""

import asyncio
import json
from typing import List, Dict, Optional, Union
from dataclasses import dataclass
from enum import Enum
import numpy as np
import pandas as pd

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
        
    def __repr__(self) -> str:
        return f"CyberpunkMatrix(size={self.size}, nodes={len(self.nodes)})"
    
    @property
    def active_nodes(self) -> List[NeuralNode]:
        """Returns list of active neural nodes"""
        return [node for node in self.nodes.values() if node.is_active]
    
    async def connect_to_mainframe(self, host: str, port: int = 2077) -> bool:
        """Establishes connection to the cyberpunk mainframe"""
        try:
            self.status = ConnectionStatus.CONNECTING
            print(f"🔌 Connecting to {host}:{port}...")
            
            # Simulate async connection
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
    
    def _validate_connection(self, host: str) -> bool:
        """Private method to validate connection parameters"""
        return host.startswith("neon.") and len(host) > 10
    
    def add_neural_node(self, node_id: str, position: tuple) -> NeuralNode:
        """Adds a new neural node to the matrix"""
        if node_id in self.nodes:
            raise ValueError(f"Node {node_id} already exists")
        
        node = NeuralNode(
            id=node_id,
            position=position,
            connections=[],
            data_flow=np.random.uniform(0.1, 10.0),
            is_active=True
        )
        
        self.nodes[node_id] = node
        return node
    
    def process_data_stream(self, data: List[Dict]) -> pd.DataFrame:
        """Processes incoming data stream using pandas"""
        df = pd.DataFrame(data)
        
        # Data transformation pipeline
        processed = (df
                    .assign(timestamp=pd.to_datetime(df['timestamp']))
                    .query('value > 0')
                    .groupby('category')
                    .agg({
                        'value': ['mean', 'max', 'std'],
                        'timestamp': 'count'
                    })
                    .round(3))
        
        return processed
    
    def encrypt_data(self, data: str) -> str:
        """Simple encryption using XOR cipher"""
        key_bytes = self._encryption_key.encode()
        data_bytes = data.encode()
        
        encrypted = bytearray()
        for i, byte in enumerate(data_bytes):
            encrypted.append(byte ^ key_bytes[i % len(key_bytes)])
        
        return encrypted.hex()

# Generator function for data streaming
def neon_data_generator(count: int = 100):
    """Generates cyberpunk-themed data points"""
    categories = ['neural', 'quantum', 'bio', 'cyber']
    
    for i in range(count):
        yield {
            'id': f"node_{i:04d}",
            'category': np.random.choice(categories),
            'value': np.random.exponential(2.0),
            'timestamp': pd.Timestamp.now().isoformat(),
            'coordinates': tuple(np.random.uniform(-100, 100, 3))
        }

# Decorator for performance monitoring
def monitor_performance(func):
    """Decorator to monitor function performance"""
    import time
    from functools import wraps
    
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.perf_counter()
        result = func(*args, **kwargs)
        end_time = time.perf_counter()
        
        print(f"⚡ {func.__name__} executed in {end_time - start_time:.4f}s")
        return result
    
    return wrapper

@monitor_performance
async def main():
    """Main cyberpunk application entry point"""
    # Initialize the matrix
    matrix = CyberpunkMatrix(size=2048)
    
    # Connect to mainframe
    connected = await matrix.connect_to_mainframe("neon.cyberpunk.net")
    
    if not connected:
        print("Failed to establish connection. Exiting...")
        return
    
    # Add neural nodes
    for i in range(10):
        position = tuple(np.random.uniform(-50, 50, 3))
        node = matrix.add_neural_node(f"neural_node_{i}", position)
        print(f"🧠 Added node: {node.id} at {node.position}")
    
    # Generate and process data
    data_stream = list(neon_data_generator(50))
    processed_data = matrix.process_data_stream(data_stream)
    
    print("\n📊 Processed Data Summary:")
    print(processed_data)
    
    # Encrypt sensitive data
    sensitive_info = json.dumps({
        "access_code": "NEON_MATRIX_2077",
        "user_level": "cyberpunk_elite",
        "neural_patterns": [node.id for node in matrix.active_nodes]
    })
    
    encrypted = matrix.encrypt_data(sensitive_info)
    print(f"\n🔐 Encrypted data: {encrypted[:50]}...")
    
    # List comprehension with filtering
    high_flow_nodes = [
        node.id for node in matrix.active_nodes 
        if node.data_flow > 5.0
    ]
    
    print(f"\n🚀 High-flow nodes: {high_flow_nodes}")
    
    # Context manager example
    class NeonLogger:
        def __enter__(self):
            print("🌟 Entering neon logging mode...")
            return self
        
        def __exit__(self, exc_type, exc_val, exc_tb):
            print("🌟 Exiting neon logging mode...")
        
        def log(self, message: str):
            print(f"💫 NEON LOG: {message}")
    
    with NeonLogger() as logger:
        logger.log("Matrix operations completed successfully!")

# Lambda functions and functional programming
calculate_distance = lambda p1, p2: np.sqrt(sum((a - b) ** 2 for a, b in zip(p1, p2)))
neon_colors = ['#00ffff', '#ff00ff', '#ffff00', '#8a2be2', '#00ffaa']
color_brightness = list(map(lambda c: len(c.replace('#', '')), neon_colors))

# Exception handling
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"⚠️ Mathematical error: {e}")
except Exception as e:
    print(f"❌ Unexpected error: {e}")
finally:
    print("🔄 Cleanup completed")

if __name__ == "__main__":
    # Run the cyberpunk matrix
    print("🌃 Initializing Neon Cyberpunk Matrix...")
    asyncio.run(main())
    print("🌃 Matrix shutdown complete. Stay neon! ⚡")
