#!/usr/bin/env python3
"""
Simple HTTP server for the Suriya Kanthi restaurant website.
This script serves the website locally for development and testing.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers to allow ES modules to work
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    # Change to the directory containing this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Check if required files exist
    required_files = ['index.html', 'config.js', 'styles.css', 'scripts.js']
    missing_files = [f for f in required_files if not os.path.exists(f)]
    
    if missing_files:
        print(f"❌ Missing required files: {', '.join(missing_files)}")
        print("Please make sure all website files are in the current directory.")
        sys.exit(1)
    
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print("🍛 SURIYA KANTHI Restaurant Website Server")
            print("=" * 50)
            print(f"✅ Server running at: http://localhost:{PORT}")
            print(f"📁 Serving files from: {os.getcwd()}")
            print("\n🌐 Opening website in your default browser...")
            print("\n⚠️  Note: Keep this terminal window open while using the website")
            print("   Press Ctrl+C to stop the server")
            print("=" * 50)
            
            # Open the website in the default browser
            webbrowser.open(f'http://localhost:{PORT}')
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped. Thank you for using Suriya Kanthi website!")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use.")
            print("Either:")
            print("1. Stop the other server using that port")
            print("2. Edit this script to use a different port")
        else:
            print(f"❌ Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main() 