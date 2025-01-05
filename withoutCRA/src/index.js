import React from "react";
import ReactDOM from "react-dom";
import FollowButton from "./components/FollowButton.js";

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(FollowButton));
