import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react';

const Flashcards = ({ data, onMark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState(data?.flashcards || []);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  if (!currentCard) return <div>No cards found.</div>;

  return (
    <div className="flashcards" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>Card {currentIndex + 1} of {cards.length}</span>
        <button onClick={handleShuffle} style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
          <RefreshCw size={16} /> Shuffle
        </button>
      </div>

      <div 
        style={{ perspective: '1000px', height: '400px', cursor: 'pointer' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
          style={{ 
            width: '100%', 
            height: '100%', 
            position: 'relative', 
            transformStyle: 'preserve-3d' 
          }}
        >
          {/* Front */}
          <div 
            className="glass-card"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem',
              textAlign: 'center',
              border: '2px solid var(--surface-border)'
            }}
          >
            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>
              {currentCard.topic || 'General'}
            </div>
            <h2 style={{ fontSize: '1.8rem', lineHeight: 1.3 }}>{currentCard.question}</h2>
            <p style={{ marginTop: '2rem', opacity: 0.4, fontSize: '0.9rem' }}>Click to reveal answer</p>
          </div>

          {/* Back */}
          <div 
            className="glass-card"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem',
              textAlign: 'center',
              transform: 'rotateY(180deg)',
              background: 'var(--surface)',
              border: '2px solid var(--primary)'
            }}
          >
            <p style={{ fontSize: '1.4rem', lineHeight: 1.5 }}>{currentCard.answer}</p>
          </div>
        </motion.div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
        <button className="glass-card" onClick={handlePrev} style={{ padding: '15px' }}><ChevronLeft /></button>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            className="glass-card" 
            onClick={(e) => { e.stopPropagation(); onMark(currentIndex, 'hard'); handleNext(); }}
            style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--secondary)' }}
          >
            <AlertTriangle size={18} /> Hard
          </button>
          <button 
            className="glass-card" 
            onClick={(e) => { e.stopPropagation(); onMark(currentIndex, 'easy'); handleNext(); }}
            style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)' }}
          >
            <CheckCircle size={18} /> Got it
          </button>
        </div>
        <button className="glass-card" onClick={handleNext} style={{ padding: '15px' }}><ChevronRight /></button>
      </div>
    </div>
  );
};

export default Flashcards;
