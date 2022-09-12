import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SinglePage from '../components/SinglePage';

// eslint-disable-next-line arrow-body-style
const About = () => {
  return (
    <div className="about-content">
      <ul className="about-list">
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":slug" element={<SinglePage />} />
      </Routes>
    </div>
  );
};
export default About;
