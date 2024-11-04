// Import the required modules
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();
const PORT = 80; // Default HTTP port; you can change this if needed

// Serve static files from the "public" directory (create this folder)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Change to your main HTML file
});

// Additional routes (add if you have more pages, such as an About page)
// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// Start the server and listen on the specified port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});