import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock } from 'lucide-react';

const Revision = ({ data }) => {
  return (
    <div className="revision" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'inline-flex', padding: '10px 20px', background: 'rgba(260, 80%, 65%, 0.1)', borderRadius: '30px', color: 'var(--primary)', fontWeight: 700, gap: '10px', alignItems: 'center', marginBottom: '1.5rem' }}>
          <Clock size={18} /> Last-Minute Prep
        </div>
        <h1 style={{ fontSize: '3rem' }}>Ultra-Condensed <span className="premium-gradient-text">Revision</span></h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>High-yield concepts for final review before the exam.</p>
      </header>

      <div className="glass-card" style={{ padding: '3rem' }}>
        {data?.revisionSheet?.map((line, i) => {
          if (line.startsWith('##')) return <h2 key={i} style={{ color: 'var(--primary)', margin: '3rem 0 1.5rem', fontSize: '1.8rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.5rem' }}>{line.replace('##', '')}</h2>;
          if (line.startsWith('-')) {
            const parts = line.split('=');
            if (parts.length > 1) {
              return (
                <div key={i} style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ fontWeight: 700, minWidth: '150px', color: 'var(--text)' }}>{parts[0].replace('-', '').trim()}</div>
                  <div style={{ color: 'var(--text-muted)' }}>{parts[1].trim()}</div>
                </div>
              );
            }
            return <li key={i} style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>{line.replace('-', '')}</li>;
          }
          if (line.startsWith('###')) return <h3 key={i} style={{ margin: '2rem 0 1rem', fontSize: '1.3rem' }}>{line.replace('###', '')}</h3>;
          return <p key={i} style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>{line}</p>;
        })}
      </div>
    </div>
  );
};

export default Revision;
