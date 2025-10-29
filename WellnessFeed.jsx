import React, { useState, useEffect } from 'react';
import './WellnessFeed.css';

const WellnessFeed = () => {
  const [posts, setPosts] = useState([]);
  const [currentMood, setCurrentMood] = useState('calm'); // Default mood

  // Mock data - in real app, this would come from backend based on mood
  const moodBasedContent = {
    happy: [
      {
        id: 1,
        user: { name: 'Joyful Jen', avatar: '😄' },
        content: 'Celebrating small wins today! Finished my gratitude journal for the 30th day in a row! 🌟',
        type: 'achievement',
        mood: 'happy',
        likes: 24,
        comments: 8,
        timestamp: '2 hours ago'
      },
      {
        id: 2,
        user: { name: 'Positive Paul', avatar: '🌈' },
        content: 'Just tried "laughing meditation" - highly recommend! Laughter really is the best medicine! 😂',
        type: 'tip',
        mood: 'happy', 
        likes: 31,
        comments: 12,
        timestamp: '4 hours ago'
      }
    ],
    calm: [
      {
        id: 3,
        user: { name: 'Mindful Maya', avatar: '🧘‍♀️' },
        content: 'Morning breathing exercise: 4-7-8 technique. Breathe in for 4, hold for 7, exhale for 8. Instant calm! 🌿',
        type: 'meditation',
        mood: 'calm',
        likes: 45,
        comments: 15,
        timestamp: '1 hour ago'
      },
      {
        id: 4,
        user: { name: 'Serene Sam', avatar: '🍃' },
        content: 'Nature walk therapy: 20 minutes in the park can reduce stress by 30%. Going for my daily dose now! 🚶‍♂️',
        type: 'advice',
        mood: 'calm',
        likes: 28,
        comments: 7,
        timestamp: '3 hours ago'
      }
    ],
    anxious: [
      {
        id: 5,
        user: { name: 'Calm Carl', avatar: '🤲' },
        content: 'When anxiety hits: 5-4-3-2-1 grounding technique. Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste. You got this! 💪',
        type: 'technique',
        mood: 'anxious',
        likes: 67,
        comments: 23,
        timestamp: '30 minutes ago'
      }
    ]
  };

  useEffect(() => {
    // Simulate mood-based content loading
    setPosts(moodBasedContent[currentMood] || []);
  }, [currentMood]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="wellness-feed">
      <div className="feed-header">
        <h2>🌱 Your Wellness Feed</h2>
        <div className="mood-filter">
          <span>Filter by mood:</span>
          <select 
            value={currentMood} 
            onChange={(e) => setCurrentMood(e.target.value)}
            className="mood-select"
          >
            <option value="happy">😊 Happy</option>
            <option value="calm">😌 Calm</option>
            <option value="anxious">😰 Anxious</option>
            <option value="sad">😢 Sad</option>
            <option value="tired">😴 Tired</option>
          </select>
        </div>
      </div>

      <div className="feed-content">
        {posts.length === 0 ? (
          <div className="no-posts">
            <h3>No content for this mood yet</h3>
            <p>Be the first to share something inspiring!</p>
          </div>
        ) : (
          posts.map(post => (
            <div key={post.id} className="wellness-post">
              <div className="post-header">
                <div className="post-user">
                  <span className="user-avatar">{post.user.avatar}</span>
                  <div className="user-info">
                    <strong>{post.user.name}</strong>
                    <span className="post-time">{post.timestamp}</span>
                  </div>
                </div>
                <div className="post-mood">
                  <span className={`mood-tag ${post.mood}`}>
                    {post.mood}
                  </span>
                </div>
              </div>

              <div className="post-content">
                <p>{post.content}</p>
                <div className="post-type">{post.type}</div>
              </div>

              <div className="post-actions">
                <button 
                  className="action-btn like-btn"
                  onClick={() => handleLike(post.id)}
                >
                  💜 {post.likes}
                </button>
                <button className="action-btn">
                  💬 {post.comments}
                </button>
                <button className="action-btn">
                  🔄 Share
                </button>
                <button className="action-btn">
                  📌 Save
                </button>
              </div>

              <div className="post-engagement">
                <span>{post.likes} supports • {post.comments} replies</span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="create-post">
        <button className="create-post-btn">
          ✍️ Share Your Journey
        </button>
      </div>
    </div>
  );
};

export default WellnessFeed;