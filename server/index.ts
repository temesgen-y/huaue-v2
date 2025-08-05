import { createServer } from 'vite';

async function startServer() {
  try {
    const server = await createServer({
      server: {
        host: '0.0.0.0',
        port: 5000,
        allowedHosts: ['all'],
      }
    });
    
    await server.listen();
    console.log('Vite server running on http://localhost:5000');
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();