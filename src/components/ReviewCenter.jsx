import React from 'react';
import { motion } from 'framer-motion';
import { TriangleAlert, Book, Target } from 'lucide-react';

const ReviewCenter = ({ data, progress, onNavigate }) => {
  const difficultCards = data?.flashcards?.filter((_, i) => progress.difficultCards.includes(i)) || [];
  const bookmarkedTopics = data?.summaries?.filter(s => progress.bookmarks.includes(s.title)) || [];

  return (
    <div className="review-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Review <span className="premium-gradient-text">Weak Areas</span></h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        {/* Difficult Flashcards */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', color: 'var(--secondary)' }}>
            <TriangleAlert />
            <h2 style={{ fontSize: '1.5rem' }}>Difficult Flashcards ({difficultCards.length})</h2>
          </div>
          {difficultCards.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>No difficult cards marked yet. Keep studying!</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {difficultCards.slice(0, 5).map((card, i) => (
                <div key={i} className="glass-card" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{card.question}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{card.answer}</div>
                </div>
              ))}
              {difficultCards.length > 5 && <button onClick={() => onNavigate('flashcards')} style={{ color: 'var(--primary)', marginTop: '1rem' }}>View all in Flashcards</button>}
            </div>
          )}
        </div>

        {/* Bookmarked Topics */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', color: 'var(--accent)' }}>
            <Book />
            <h2 style={{ fontSize: '1.5rem' }}>Bookmarked Topics ({bookmarkedTopics.length})</h2>
          </div>
          {bookmarkedTopics.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>No bookmarks yet. Save topics you find challenging.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {bookmarkedTopics.map((topic, i) => (
                <div 
                  key={i} 
                  className="glass-card" 
                  onClick={() => onNavigate('summaries')}
                  style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span style={{ fontWeight: 600 }}>{topic.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quiz History */}
      <div className="glass-card" style={{ marginTop: '2rem', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', color: 'var(--primary)' }}>
          <Target />
          <h2 style={{ fontSize: '1.5rem' }}>Recent Quiz Performance</h2>
        </div>
        {progress.quizScores.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>No quiz history yet. Take a quiz to track your performance!</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {progress.quizScores.slice(-5).reverse().map((score, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--surface-border)' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{score.type.toUpperCase()} Quiz</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{new Date(score.date).toLocaleDateString()}</div>
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: (score.score / score.total) > 0.7 ? 'var(--accent)' : 'var(--secondary)' }}>
                  {score.score} / {score.total}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCenter;
