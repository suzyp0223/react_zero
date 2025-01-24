import React, { useContext } from 'react'
import { UserContext } from "../store/user";

export default function BlogPage() {
  // 디스트럭처링
  const {user, dispatch} = useContext(UserContext);
  console.log('dispatch: ', dispatch);


  return (
    <div>
      <h1>BlogPage</h1>
      <p>Current Job : {user.job}</p>
      <button onClick={() => dispatch({ type: 'changeJob', text: 'B-developer'})}>Change Job</button>
    </div>
  );
}
