import React from 'react';
import Banner from './component/Banner';
import BooksPage from './Books/page';

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <BooksPage/>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;