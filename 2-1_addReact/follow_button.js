// React Component!
// Follow <-> following
function FollowButton() {
  return React.createElement("div", {}, "Follow");
}

const domContainer = document.querySelector('.follow_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(FollowButton));
