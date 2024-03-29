// index.js

// Import necessary modules
const { execSync } = require('child_process');

// Install @actions/core
try {
  execSync('npm install @actions/core');
} catch (error) {
  console.error('Error installing @actions/core:', error);
}

// Now you can import @actions/core and use it in your action logic
const core = require('@actions/core');
