import React from 'react';

const webappLoader = {
    width: '80px',
    margin: '50px auto',
    position: 'fixed',
    top:' 40%',
    left: '50%',
    margin: '-50px 0px 0px -50px'
  };

const pageLoader = {
    width: '80px',
    margin: '50px auto',
    position: 'unset'
  }

const PulseLoader = (props) => {
  return (
    <div style={props.pageLoader ? pageLoader : webappLoader }>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-double-ring">
        <circle cx="50" cy="50" fill="none" strokeLinecap="round" r="40" strokeWidth="5" stroke="#dfb527" strokeDasharray="62.83185307179586 62.83185307179586" transform="rotate(264.157 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" fill="none" strokeLinecap="round" r="35" strokeWidth="4" stroke="#004f86" strokeDasharray="54.97787143782138 54.97787143782138" strokeDashoffset="54.97787143782138" transform="rotate(-264.157 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default PulseLoader;
