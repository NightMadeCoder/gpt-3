import React from 'react';
import './brand.css';
import { atLassian, dropbox, google, shopify, slack } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section'>
  <div>
    <img src={google} alt="google" />
  </div>
  <div>
    <img src={slack} alt="slack" />
  </div>
  <div>
    <img src={atLassian} alt="atLassian" />
  </div>
  <div>
    <img src={dropbox} alt="dropbox" />
  </div>
  <div>
    <img src={shopify} alt="shopify" />
  </div>
    </div>
  )
}

export default Brand;
