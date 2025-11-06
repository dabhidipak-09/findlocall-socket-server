const io = require('socket.io-client');

// Your server URL — update port if needed (e.g. 3000)
const socket = io.connect('http://localhost:3000', {
  transports: ['websocket'], // force WebSocket
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 2000
});

// When connected
socket.on('connect', () => {
  console.log('✅ Connected to Socket.IO server');
  
  // Send test message
  socket.emit('private_message', {
    to_id: "123",
    from_id: "456",
    username: "tester",
    msg: "Hello from test client",
    color: "blue",
    message_reply_id: "0",
    story_id: "0",
    lat: "0",
    lng: "0",
    isSticker: "false"
  });
});

// Listen for any response from server
socket.on('private_message_response', (data) => {
  console.log('📩 Message response:', data);
});

// On error
socket.on('connect_error', (err) => {
  console.error('❌ Connection error:', err.message);
});