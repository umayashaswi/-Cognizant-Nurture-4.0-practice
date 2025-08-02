import React, { useState } from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  // control flags for various conditional rendering patterns
  const [showCourse, setShowCourse] = useState(true);
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(true);

  const [mode, setMode] = useState('all'); // 'all', 'courses-only', 'books-only', 'blogs-only'

  // Example of element variable conditional rendering
  let header;
  if (mode === 'all') {
    header = <h1>Blogger App: All Sections</h1>;
  } else if (mode === 'courses-only') {
    header = <h1>Blogger App: Courses</h1>;
  } else if (mode === 'books-only') {
    header = <h1>Blogger App: Books</h1>;
  } else if (mode === 'blogs-only') {
    header = <h1>Blogger App: Blogs</h1>;
  }

  return (
    <div style={{ padding: 32, fontFamily: 'Arial, sans-serif' }}>
      {header} {/* element variable */}

      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setMode('all')}>Show All</button>{' '}
        <button onClick={() => setMode('courses-only')}>Courses Only</button>{' '}
        <button onClick={() => setMode('books-only')}>Books Only</button>{' '}
        <button onClick={() => setMode('blogs-only')}>Blogs Only</button>
      </div>

      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
        {/* 1. Ternary operator */}
        {['all', 'courses-only'].includes(mode) ? (
          <div style={{ flex: 1, borderRight: '4px solid green', paddingRight: 16 }}>
            <CourseDetails />
          </div>
        ) : null}

        {/* 2. Logical && */}
        {['all', 'books-only'].includes(mode) && (
          <div style={{ flex: 1, borderRight: '4px solid green', paddingRight: 16 }}>
            <BookDetails />
          </div>
        )}

        {/* 3. Immediate IIFE-style conditional (wrapped in fragment) */}
        {(() => {
          if (mode === 'all' || mode === 'blogs-only') {
            return (
              <div style={{ flex: 1 }}>
                <BlogDetails />
              </div>
            );
          }
          return null;
        })()}
      </div>

      {/* 4. Inline if-else within a small section */}
      <div style={{ marginTop: 32 }}>
        {showCourse ? (
          <p>Course section is currently visible.</p>
        ) : (
          <p style={{ color: 'gray' }}>Course section is hidden.</p>
        )}
        <label style={{ marginRight: 8 }}>
          <input
            type="checkbox"
            checked={showCourse}
            onChange={(e) => setShowCourse(e.target.checked)}
          />{' '}
          Toggle Course Details
        </label>
      </div>

      {/* 5. Using a switch-like conditional rendering for a summary block */}
      <Summary mode={mode} />
    </div>
  );
}

// Additional component to demonstrate switch-style conditional
const Summary = ({ mode }) => {
  let summaryText;
  switch (mode) {
    case 'all':
      summaryText = 'You are viewing everything.';
      break;
    case 'courses-only':
      summaryText = 'Only course details are visible.';
      break;
    case 'books-only':
      summaryText = 'Only book details are visible.';
      break;
    case 'blogs-only':
      summaryText = 'Only blog details are visible.';
      break;
    default:
      summaryText = 'Unknown view.';
  }

  return (
    <div style={{ marginTop: 24, padding: 12, background: '#f0f0f0', borderRadius: 6 }}>
      <strong>Summary:</strong> {summaryText}
    </div>
  );
};

export default App;
