import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

// API호출은 useEffect로 마운트된 직후 딱한번만 호출되게 코드변경-fetch
export default function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답 받음.
  const [docs, setDocs] = useState([]);



  // const docs = [
  //   {
  //     id: 1,
  //     title: "React Study!",
  //     data: "05/01/2021",
  //   },
  //   {
  //     id: 2,
  //     title: "JPA 시작하기",
  //     data: "06/01/2021",
  //   },
  //   {
  //     id: 3,
  //     title: "나만의 Todo List App",
  //     data: "07/01/2021",
  //   },
  //   {
  //     id: 4,
  //     title: "CRA 없이 리액트 프로젝트 시작하기",
  //     data: "08/25/2021",
  //   },
  //   {
  //     id: 5,
  //     title: "html/css 완전 정복!!!!!",
  //     data: "09/01/2025",
  //   },
  //   {
  //     id: 6,
  //     title: "마크업의 모든 것",
  //     data: "10/01/2021",
  //   },
  //   {
  //     id: 7,
  //     title: "JavaScript의 신",
  //     data: "05/01/2022",
  //   },
  //   {
  //     id: 8,
  //     title: "이제는 사용해보자 useMemo & useCallback",
  //     data: "05/16/2024",
  //   },
  // ];






  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // const result = await res.json();  // 상태값
      console.log('result: ', result);
      console.log('result.data: ', result.data);
      // setDocs(result);
      return result.data;
    }

    fetchData().then((res) => {
      setDocs(res);
    });
  }, [])

  return (
    <div>
      {docs.map((doc) => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: "block", margin: "1rem 0" }}
        >
          {doc.title}
        </Link>
      ))}
      {/* <Outlet /> */}
    </div>
  );
}
