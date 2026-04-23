import { useState, useEffect } from 'react';
import { parseMarkdown } from '../utils/parser';
import { studyPacketRaw } from '../data/studyPacket';
import { studyPacket2Raw } from '../data/studyPacket2';

const STORAGE_KEY = 'mit807_study_progress';

export const useStore = () => {
  const [data] = useState(() => {
    const p1 = parseMarkdown(studyPacketRaw);
    const p2 = parseMarkdown(studyPacket2Raw);
    
    return {
      overview: [...p1.overview, ...p2.overview],
      summaries: [...p1.summaries, ...p2.summaries],
      flashcards: [...p1.flashcards, ...p2.flashcards],
      mcqs: [...p1.mcqs, ...p2.mcqs.map(m => ({ ...m, id: m.id + p1.mcqs.length }))],
      shortAnswers: [...p1.shortAnswers, ...p2.shortAnswers],
      revisionSheet: [...p1.revisionSheet, ...p2.revisionSheet],
      comparisonTable: [...p1.comparisonTable, ...p2.comparisonTable]
    };
  });
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      completedFlashcards: [],
      difficultCards: [],
      quizScores: [],
      bookmarks: [],
      weakTopics: [],
      lastVisited: null
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggleBookmark = (topic) => {
    setProgress(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(topic)
        ? prev.bookmarks.filter(t => t !== topic)
        : [...prev.bookmarks, topic]
    }));
  };

  const markFlashcard = (id, difficulty) => {
    setProgress(prev => {
      const completed = [...new Set([...prev.completedFlashcards, id])];
      let difficult = prev.difficultCards;
      if (difficulty === 'hard') {
        difficult = [...new Set([...difficult, id])];
      } else {
        difficult = difficult.filter(d => d !== id);
      }
      return { ...prev, completedFlashcards: completed, difficultCards: difficult };
    });
  };

  const saveQuizScore = (type, score, total) => {
    setProgress(prev => ({
      ...prev,
      quizScores: [...prev.quizScores, { type, score, total, date: new Date().toISOString() }]
    }));
  };

  return {
    data,
    progress,
    toggleBookmark,
    markFlashcard,
    saveQuizScore,
    setProgress
  };
};
