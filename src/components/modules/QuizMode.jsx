import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Info, Trophy, RotateCcw } from 'lucide-react';

const QuizMode = ({ data, onSaveScore }) => {
  const [mode, setMode] = useState('mcq'); // 'mcq' or 'short'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const mcqs = data?.mcqs || [];
  const shortAnswers = data?.shortAnswers || [];

  const currentMcq = mcqs[currentIndex];
  const currentShort = shortAnswers[currentIndex];

  const handleOptionSelect = (letter) => {
    if (showFeedback) return;
    setSelectedOption(letter);
    setShowFeedback(true);
    if (letter === currentMcq.answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    const total = mode === 'mcq' ? mcqs.length : shortAnswers.length;
    if (currentIndex < total - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
      setShowAnswer(false);
    } else {
      setQuizFinished(true);
      if (mode === 'mcq') onSaveScore('mcq', score, mcqs.length);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizFinished(false);
    setShowAnswer(false);
  };

  if (quizFinished) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <Trophy size={64} color="var(--primary)" style={{ marginBottom: '2rem' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Quiz Completed!</h2>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Your Score: <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{score} / {mode === 'mcq' ? mcqs.length : shortAnswers.length}</span>
        </p>
        <button className="btn-primary" onClick={resetQuiz} style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0 auto' }}>
          <RotateCcw size={20} /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-mode" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        <button 
          className={`glass-card ${mode === 'mcq' ? 'active' : ''}`}
          onClick={() => { setMode('mcq'); resetQuiz(); }}
          style={{ padding: '12px 24px', flex: 1, border: mode === 'mcq' ? '1px solid var(--primary)' : '1px solid var(--surface-border)' }}
        >
          MCQ Mode
        </button>
        <button 
          className={`glass-card ${mode === 'short' ? 'active' : ''}`}
          onClick={() => { setMode('short'); resetQuiz(); }}
          style={{ padding: '12px 24px', flex: 1, border: mode === 'short' ? '1px solid var(--primary)' : '1px solid var(--surface-border)' }}
        >
          Short Answer Self-Test
        </button>
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ opacity: 0.6 }}>Question {currentIndex + 1} of {mode === 'mcq' ? mcqs.length : shortAnswers.length}</span>
        {mode === 'mcq' && <span style={{ fontWeight: 600, color: 'var(--primary)' }}>Score: {score}</span>}
      </div>

      {mode === 'mcq' ? (
        <div className="mcq-content">
          <h2 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', lineHeight: 1.4 }}>{currentMcq?.question}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.entries(currentMcq?.options || {}).map(([letter, text]) => {
              let status = '';
              if (showFeedback) {
                if (letter === currentMcq.answer) status = 'correct';
                else if (letter === selectedOption) status = 'wrong';
              }
              return (
                <button
                  key={letter}
                  onClick={() => handleOptionSelect(letter)}
                  className="glass-card"
                  style={{
                    padding: '1.2rem',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.2s ease',
                    border: status === 'correct' ? '2px solid var(--accent)' : status === 'wrong' ? '2px solid var(--secondary)' : '1px solid var(--glass-border)',
                    background: status === 'correct' ? 'rgba(0, 255, 255, 0.1)' : status === 'wrong' ? 'rgba(255, 0, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: 'rgba(255,255,255,0.05)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 700
                  }}>
                    {letter}
                  </div>
                  <span style={{ flex: 1 }}>{text}</span>
                  {status === 'correct' && <Check size={20} color="var(--accent)" />}
                  {status === 'wrong' && <X size={20} color="var(--secondary)" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showFeedback && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{ marginTop: '2rem', padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem', fontWeight: 600 }}>
                  <Info size={18} /> Explanation
                </div>
                <p style={{ color: 'var(--text-muted)' }}>{currentMcq.explanation}</p>
                <button className="btn-primary" onClick={handleNext} style={{ marginTop: '1.5rem', width: '100%' }}>Next Question</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="short-content">
          <h2 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', lineHeight: 1.4 }}>{currentShort?.question}</h2>
          
          <div className="glass-card" style={{ minHeight: '150px', padding: '2rem', marginBottom: '2rem', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!showAnswer ? (
              <button className="btn-primary" onClick={() => setShowAnswer(true)}>Reveal Model Answer</button>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 600 }}>
                  <Info size={18} /> Model Answer / Guide
                </div>
                <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>{currentShort.guide}</p>
              </motion.div>
            )}
          </div>

          {showAnswer && (
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="glass-card" onClick={handleNext} style={{ flex: 1, padding: '15px', color: 'var(--secondary)' }}>Missed it</button>
              <button className="glass-card" onClick={() => { setScore(s => s + 1); handleNext(); }} style={{ flex: 1, padding: '15px', color: 'var(--accent)' }}>Got it!</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizMode;
