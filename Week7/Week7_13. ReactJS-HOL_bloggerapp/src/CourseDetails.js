import React from 'react';

const courses = [
  { name: 'Angular', date: '4/5/2021' },
  { name: 'React', date: '6/3/2021' },
];

const CourseDetails = () => {
  // conditional inside map: highlight upcoming course (example)
  return (
    <div>
      <h2>Course Details</h2>
      {courses.length === 0 ? (
        <div>No courses available.</div>
      ) : (
        courses.map((c, idx) => (
          <div key={idx} style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 22, fontWeight: '600' }}>{c.name}</div>
            <div style={{ color: '#555' }}>{c.date}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default CourseDetails;
