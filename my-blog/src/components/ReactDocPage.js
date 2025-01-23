import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ReactDocPage() {
  //docId:  1, 2, 3...
  const params = useParams();
  // console.log("params", params);
  const id = params.docId;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchInfo() {
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const answer = await result.json();
      // console.log('result: ', result);
      return answer;
    }

    fetchInfo().then((res) => {
      setInfo(res);
    });
  }, [])


  // navigate()는 url나 링크로 가지않고 프로그래밍적으로 라우팅 처리시 사용하는 함수.
  // 보통 네비게이트는 레이아웃 컴포넌트에 많이 씀.
  const navigate = useNavigate();

  return (
    <>
      <h5 onClick={() => navigate("/")}>logo</h5>
      <div>ReactDocPage  ##{params.docId}</div>
      <div>Title  ##{info.title}</div>
      <div>Body  ##{info.body}</div>
      <div>

      </div>
    </>
  )
}
