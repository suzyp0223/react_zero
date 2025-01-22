import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import TechPage from "./components/TechPage";
import BlogPage from "./components/BlogPage";
import JavascriptPage from "./components/JavascriptPage";
import ReactPage from "./components/ReactPage";

function App() {
  // 라우트 구성 기본
  // root url: main page component
  // tech url: tech page component
  // blog url: blog page component

  return (
    <BrowserRouter>
      <Routes>
        {/* 각각의 URL 경로에 대응하는 컴포넌트 */}
        <Route path="/" element={<MainPage />} />

        <Route path="tech" element={<TechPage />}>
          <Route path="javascript" element={<JavascriptPage />} />
          <Route path="react" element={<ReactPage />} />
        </Route>

        <Route path="blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
