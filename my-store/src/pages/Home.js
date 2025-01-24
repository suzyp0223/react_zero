import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from 'react-query';
import { getUser } from '../mocks/api'

export default function Home() {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery('@getUser', getUser, {

    // 3번째 인자로 staleTime 주면 뒤/앞으로가기 할때마다 새로 데이터 리패치 안함.
    // 캐시되어 있는 값 사용-staleTime
    staleTime: Infinity, // 데이터가 절대 만료되지 않음
    suspense: true,
  });

  // App.js 에서 suspense: true, 로 처리
  // if (isLoading) return <span>Loading...</span>

  return (
    <div>
      <h1>Home, {data?.nickName}</h1>
      <button onClick={() => navigate("/edit")}>Go Edit Page</button>
    </div>
  );
}
