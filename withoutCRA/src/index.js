// react 18이상 최신방식
import React from "react";
import ReactDOM from "react-dom/client";
import FollowButton from "./components/FollowButton.js";

const domContainer = document.querySelector('.root');
if (domContainer) {
  const root = ReactDOM.createRoot(domContainer);
  root.render(
    <React.StrictMode>
      <FollowButton />
    </React.StrictMode>
  );
} else {
  console.error("Root container not found.");
}

/**
 * React 17 이하 (옛날 방식)
import React from "react";
import ReactDOM from "react-dom/client";
import FollowButton from "./components/FollowButton.js";

const domContainer = document.querySelector('#root');
ReactDOM.render(<FollowButton />, domContainer));
 */