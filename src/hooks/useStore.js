import { useState, useEffect } from 'react';
import { parseMarkdown } from '../utils/parser';
import { studyPacketRaw } from '../data/studyPacket';

const STORAGE_KEY = 'mit807_study_progress';

export const useStore = () => {
  const [data] = useState(() => parseMarkdown(studyPacketRaw));
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
