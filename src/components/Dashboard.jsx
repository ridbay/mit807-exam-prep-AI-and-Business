import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Target, TriangleAlert, ChevronRight, ChartBar } from 'lucide-react';

const Dashboard = ({ progress, data, onNavigate }) => {
  const stats = [
    { 
      label: 'Flashcards', 
      value: `${progress.completedFlashcards.length} / ${data?.flashcards?.length || 0}`,
      icon: <Zap size={20} color="var(--primary)" />,
      module: 'flashcards'
    },
    { 
      label: 'Quiz Avg', 
      value: progress.quizScores.length > 0 
        ? `${Math.round(progress.quizScores.reduce((acc, curr) => acc + (curr.score/curr.total), 0) / progress.quizScores.length * 100)}%`
        : '0%',
      icon: <ChartBar size={20} color="var(--secondary)" />,
      module: 'quiz'
    },
    { 
      label: 'Bookmarks', 
      value: progress.bookmarks.length,
      icon: <BookOpen size={20} color="var(--accent)" />,
      module: 'summaries'
    },
    { 
      label: 'Difficult', 
      value: progress.difficultCards.length,
      icon: <TriangleAlert size={20} color="var(--secondary)" />,
      module: 'review'
    }
  ];

  return (
    <div className="dashboard">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="welcome-card glass-card"
        style={{ marginBottom: '2rem', padding: '3rem' }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Ready for the <span className="premium-gradient-text">MIT807 Exam</span>?
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Your ultimate AI study companion. Track your progress and master complex topics.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card stat-card"
            onClick={() => onNavigate(stat.module)}
            style={{ cursor: 'pointer', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              {stat.icon}
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{stat.label}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <ModuleLink 
          title="Study Guide" 
          desc="Structured summaries and lecture overviews."
          icon={<BookOpen size={24} />}
          onClick={() => onNavigate('summaries')}
        />
        <ModuleLink 
          title="Quiz Arena" 
          desc="100+ MCQs and short-answer practice."
          icon={<Target size={24} />}
          onClick={() => onNavigate('quiz')}
        />
        <ModuleLink 
          title="Last-Minute Revision" 
          desc="Condensed high-yield topics for quick review."
          icon={<Zap size={24} />}
          onClick={() => onNavigate('revision')}
        />
      </div>
    </div>
  );
};

const ModuleLink = ({ title, desc, icon, onClick }) => (
  <div 
    className="glass-card" 
    onClick={onClick}
    style={{ 
      padding: '2rem', 
      cursor: 'pointer', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div style={{ color: 'var(--primary)' }}>{icon}</div>
    <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{desc}</p>
    <div style={{ position: 'absolute', right: '20px', bottom: '20px', opacity: 0.3 }}>
      <ChevronRight size={32} />
    </div>
  </div>
);

export default Dashboard;
