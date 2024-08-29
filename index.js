// Import the child_process module
const { spawn } = require('child_process');

// Start a Bash shell
const bash = spawn('bash', [], {
    stdio: 'inherit'
});

// Handle child process exit event
bash.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
    process.exit(code);
});
