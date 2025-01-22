import React from 'react';
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h1>MainPage</h1>
      {/** blog로 가는 링크 */}
      <Link to="/blog">Blog</Link> | <Link to="/tech">Tech</Link> | 
      <Link to="/javascript">Javascript</Link> | <Link to="/react">React</Link>
    </div>
  );
}
