import { createServer } from 'vite';

async function startServer() {
  try {
    const server = await createServer({
      server: {
        host: '0.0.0.0',
        port: 5000,
        allowedHosts: [
          'localhost',
          '0.0.0.0',
          '.replit.dev',
          'dce6c4be-50f2-4599-9d8a-f2047860e79a-00-1g1ojlsnbsq95.spock.replit.dev'
        ],
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