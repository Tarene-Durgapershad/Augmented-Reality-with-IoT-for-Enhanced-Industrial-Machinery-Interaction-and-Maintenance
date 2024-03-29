// index.js

// Import necessary modules
const core = require('@actions/core');
const fs = require('fs');

try {
  // Retrieve input values
  const sourceFilePath = core.getInput('source');
  const destinationPath = core.getInput('destination');

  // Read the content of the source file
  const content = fs.readFileSync(sourceFilePath, 'utf8');

  // Write the content to the destination file
  fs.writeFileSync(destinationPath, content);

  // Log success message
  core.info(`File copied successfully from ${sourceFilePath} to ${destinationPath}`);
} catch (error) {
  // Log any errors that occur during execution
  core.setFailed(error.message);
}