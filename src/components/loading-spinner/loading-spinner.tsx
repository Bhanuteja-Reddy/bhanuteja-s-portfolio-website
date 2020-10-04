import React from 'react';

import './loading-spinner.css';

/* eslint-disable-next-line */
export interface LoadingSpinnerProps {
  loading: boolean;
}

export const LoadingSpinner = (
  props: LoadingSpinnerProps
) => {
  return (
    <div id="loading-spinner" style={{ display: props.loading ? "block" : "none" }}>
      <div style={{ margin: "20% 0% 20% 0%" }}>
        <div className="ant-spin ant-spin-lg ant-spin-spinning ant-spin-show-text" >
          <span className="ant-spin-dot ant-spin-dot-spin">
            <i className="ant-spin-dot-item"></i>
            <i className="ant-spin-dot-item"></i>
            <i className="ant-spin-dot-item"></i>
            <i className="ant-spin-dot-item">
            </i></span>
          <div className="ant-spin-text">Loading...</div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
