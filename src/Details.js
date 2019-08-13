import React from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
    return (
      <div className='details_text'>
        <h1>Welcome to the details page, work in progress!</h1>
        <Link to='/'>Back to Home Page</Link>
      </div>
    );
  }