import React, { createContext, useState, useReducer } from "react";

export const UserContext = createContext();

const initialUser = {
  name: 'ari',
  job: 'FE-developer',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'changeJob':
      //  state의 job에 해당하는 데이터를 action.text로 변경
      return { ...state, job: action.text };
      break;

    default:
      // break;
      return state; // 기본적으로 state를 그대로 반환
  }
};

export default function UserStore(props) {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  console.log('user: ', user);

  return (
    // <UserContext.Provider value={dispatch}>
    // redux리덕스(전역상태관리)  UserContext안에 user, dispatch가 있어서
    // 둘중 하나만 쓸때는 UserContextUser, UserContextDispatch로 쪼개기도함.
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}
