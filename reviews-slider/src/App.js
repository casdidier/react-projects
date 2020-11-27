import React from 'react';

import './App.css';
import ReviewContainer from './ReviewContainer';

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline" />
        </div>
        <ReviewContainer />
      </section>
    </main>
  );
}

export default App;
