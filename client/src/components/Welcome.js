/* eslint-disable semi */
import React from 'react';
import banner from '../styles/assets/coffee.jpg';

const Welcome = () =>
    <div className="welcome--container">
    <img src = {banner} style = {{ marginTop: '-20px' }} alt = 'banner'/>
        <h3 className="welcome--message-text">Hello</h3>
        <p className="welcome--description-text"></p>
    </div>

export default Welcome;
