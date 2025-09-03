import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());

// Check if dist directory exists - handle both development and production paths
const distPath = process.env.NODE_ENV === 'development' 
  ? path.join(process.cwd(), 'dist')
  : path.join(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    distExists: fs.existsSync(distPath),
    indexExists: fs.existsSync(indexPath),
    distPath,
    indexPath,
    cwd: process.cwd(),
    __dirname,
    nodeEnv: process.env.NODE_ENV
  });
});

// Serve static files from the dist directory if it exists
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  
  // Serve React app for all other routes
  app.get('*', (req, res) => {
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).json({ error: 'index.html not found', path: indexPath });
    }
  });
} else {
  // If dist doesn't exist, just return a message
  app.get('*', (req, res) => {
    res.json({ 
      error: 'Build files not found', 
      message: 'Please run npm run build first',
      distPath,
      indexPath,
      cwd: process.cwd(),
      __dirname
    });
  });
}

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Something broke!', 
    details: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Dist path: ${distPath}`);
    console.log(`Index path: ${indexPath}`);
    console.log(`Current working directory: ${process.cwd()}`);
  });
}

export default app;