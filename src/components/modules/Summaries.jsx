import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bookmark, ChevronDown, ChevronUp } from 'lucide-react';

const Summaries = ({ data, progress, onToggleBookmark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState({});

  const filteredSummaries = data?.summaries?.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.content.some(l => l.toLowerCase().includes(searchTerm.toLowerCase()))
  ) || [];

  const toggleExpand = (title) => {
    setExpanded(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="summaries">
      <div style={{ marginBottom: '3rem', position: 'relative' }}>
        <input 
          type="text" 
          placeholder="Search study guide..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glass-card"
          style={{ 
            width: '100%', 
            padding: '1.2rem 1.2rem 1.2rem 3.5rem', 
            fontSize: '1.1rem',
            border: '1px solid var(--surface-border)',
            outline: 'none'
          }}
        />
        <Search style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filteredSummaries.map((summary, i) => (
          <div key={i} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div 
              style={{ 
                padding: '1.5rem', 
                cursor: 'pointer', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                background: expanded[summary.title] ? 'rgba(255,255,255,0.03)' : 'transparent'
              }}
              onClick={() => toggleExpand(summary.title)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem' }}>{summary.title}</h3>
                {progress.bookmarks.includes(summary.title) && (
                  <Bookmark size={18} color="var(--primary)" fill="var(--primary)" />
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(summary.title);
                  }}
                  style={{ opacity: 0.6 }}
                >
                  <Bookmark size={20} fill={progress.bookmarks.includes(summary.title) ? "var(--primary)" : "none"} />
                </button>
                {expanded[summary.title] ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>

            <AnimatePresence>
              {expanded[summary.title] && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 2rem 2rem', color: 'var(--text-muted)' }}>
                    {summary.content.map((line, idx) => {
                      if (line.startsWith('###')) return <h4 key={idx} style={{ color: 'var(--text)', margin: '1.5rem 0 0.5rem' }}>{line.replace('###', '')}</h4>;
                      if (line.startsWith('-')) return <li key={idx} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>{line.replace('-', '')}</li>;
                      return <p key={idx} style={{ marginBottom: '0.5rem' }}>{line}</p>;
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summaries;
