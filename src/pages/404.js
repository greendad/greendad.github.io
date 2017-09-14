import React from 'react';
import Image404 from './404.png';

const ErrorPage = () => (
    <div>
        <h1>Oops, 404! Its OK, happens to best of us.</h1>
        <img
          src={Image404}
          alt={`404`}
          style={{
            float: 'left'
          }}
        />
    </div>
);

export default ErrorPage;