export const parseMarkdown = (markdown) => {
  const lines = markdown.split('\n');
  const sections = {
    overview: [],
    summaries: [],
    flashcards: [],
    mcqs: [],
    shortAnswers: [],
    revisionSheet: [],
    comparisonTable: []
  };

  let currentSection = null;
  let currentSubSection = null;
  let currentItem = null;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed && !currentItem) return;

    // Detect Main Sections
    if (line.startsWith('# ')) {
      const title = line.replace('# ', '').toLowerCase();
      if (title.includes('overview')) currentSection = 'overview';
      else if (title.includes('summary')) currentSection = 'summaries';
      else if (title.includes('flashcards')) currentSection = 'flashcards';
      else if (title.includes('quiz')) currentSection = 'quiz';
      else if (title.includes('revision')) currentSection = 'revisionSheet';
      else if (title.includes('comparison')) currentSection = 'comparisonTable';
      return;
    }

    // Detect Sub Sections
    if (line.startsWith('## ')) {
      currentSubSection = line.replace('## ', '').trim();
      if (currentSection === 'quiz') {
        if (currentSubSection.includes('Multiple-Choice')) currentSection = 'mcqs';
        else if (currentSubSection.includes('Short-Answer')) currentSection = 'shortAnswers';
      }
      if (currentSection === 'summaries') {
        sections.summaries.push({ title: currentSubSection, content: [] });
      }
      return;
    }

    // Parsing Logic based on current section
    if (currentSection === 'overview') {
      if (trimmed) sections.overview.push(line);
    } 
    else if (currentSection === 'summaries') {
      const lastSummary = sections.summaries[sections.summaries.length - 1];
      if (lastSummary) lastSummary.content.push(line);
    } 
    else if (currentSection === 'flashcards') {
      if (trimmed.startsWith('**Q:**') || (trimmed.match(/^\d+\./) && trimmed.includes('**Q:**'))) {
        const question = trimmed.replace(/.*\*\*Q:\*\*\s*/, '').trim();
        currentItem = { question, answer: '', topic: currentSubSection };
        sections.flashcards.push(currentItem);
      } else if (trimmed.startsWith('**A:**')) {
        if (currentItem) {
          currentItem.answer = trimmed.replace('**A:**', '').trim();
        }
      }
    } 
    else if (currentSection === 'mcqs') {
      const mcqMatch = trimmed.match(/^\d+\.\s+\*\*(.*)\*\*/);
      if (mcqMatch) {
        currentItem = { 
          question: mcqMatch[1], 
          options: {}, 
          answer: '', 
          explanation: '',
          id: sections.mcqs.length + 1
        };
        sections.mcqs.push(currentItem);
      } else if (trimmed.match(/^[A-D]\.\s/)) {
        if (currentItem) {
          const letter = trimmed[0];
          currentItem.options[letter] = trimmed.substring(3).trim();
        }
      } else if (trimmed.startsWith('**Answer:**')) {
        if (currentItem) currentItem.answer = trimmed.replace('**Answer:**', '').trim();
      } else if (trimmed.startsWith('**Explanation:**')) {
        if (currentItem) currentItem.explanation = trimmed.replace('**Explanation:**', '').trim();
      }
    } 
    else if (currentSection === 'shortAnswers') {
      const saMatch = trimmed.match(/^\d+\.\s+\*\*(.*)\*\*/);
      if (saMatch) {
        currentItem = { question: saMatch[1], guide: '' };
        sections.shortAnswers.push(currentItem);
      } else if (trimmed.startsWith('**Guide:**')) {
        if (currentItem) currentItem.guide = trimmed.replace('**Guide:**', '').trim();
      }
    }
    else if (currentSection === 'revisionSheet') {
      sections.revisionSheet.push(line);
    }
    else if (currentSection === 'comparisonTable') {
      sections.comparisonTable.push(line);
    }
  });

  return sections;
};
