const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
  res.json({ message: 'MindMate API is working!' });
});

// Mock routes for demo
app.get('/api/posts', (req, res) => {
  res.json([
    {
      _id: '1',
      user: { username: 'demo_user', profile: { name: 'Demo User' } },
      content: { text: 'Welcome to MindMate! This is a demo post.' },
      mood: 'happy',
      likes: [],
      comments: [],
      createdAt: new Date()
    }
  ]);
});

app.post('/api/moods', (req, res) => {
  console.log('Mood recorded:', req.body);
  res.json({ message: 'Mood recorded successfully!' });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`🚀 MindMate Server running on port ${PORT}`);
  console.log(`👉 Visit: http://localhost:${PORT}`);
  console.log(`✅ Your backend is working!`);
});