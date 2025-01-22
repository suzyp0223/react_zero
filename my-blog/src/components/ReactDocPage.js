import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ReactDocPage() {
  //docId:  1, 2, 3...
  const params = useParams();
  console.log(params);

  // navigate()는 url나 링크로 가지않고 프로그래밍적으로 라우팅 처리시 사용하는 함수.
  // 보통 네비게이트는 레이아웃 컴포넌트에 많이 씀.
  const navigate = useNavigate();

  return (
    <>
      <h5 onClick={() => navigate("/")}>logo</h5>
      <div>ReactDocPage  ##{params.docId}</div>
    </>
  )
}
