import React from "react";
import { createRoot } from "react-dom/client"; // createRoot 가져오기
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules/index";
import App from "./App";

// 스토어 생성
const store = createStore(rootReducer, applyMiddleware(thunk));

// createRoot 사용
const container = document.getElementById("root"); // root 엘리먼트 가져오기
const root = createRoot(container); // createRoot 호출

// 렌더링
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
