import React from 'react';
import { Link } from 'react-router-dom';
const Page404 = () => {
  return (
    <div className="page-404">
      <h1>404 - Page Not Found</h1>
      <div className="buttons">
        <Link to="/" className="button">GO BACK</Link>
      </div>
    </div>
  );
};

export default Page404;