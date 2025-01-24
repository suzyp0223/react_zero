import React, { useState } from "react";
import { useQuery, useQueries, useMutation, useQueryClient } from 'react-query';
import { getUser, updateNickname, getPosts } from '../mocks/api'

// api를 통해 닉네임값 가져오기
// handleSubmit: 업데이트된 inputValue를 서버에 전송해서, 닉네임값업데이트하기
export default function Edit() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();

  // // results로 대체함.
  // const { data: user } = useQuery('@getUser', getUser, {

  //   // 3번째 인자로 staleTime 주면 뒤/앞으로가기 할때마다 새로 데이터 리패치 안함.
  //   // 캐시되어 있는 값 사용-staleTime
  //   staleTime: Infinity, // 데이터가 절대 만료되지 않음
  // });

  // const { data: posts } = useQuery('@getPosts', getPosts, {
  //   staleTime: Infinity,
  // });

  const results = useQueries([
    { queryKey: ["@getUser"], queryFn: getUser, staleTime: Infinity },
    { queryKey: ["@hetPosts"], queryFn: getPosts, staleTime: Infinity },
  ]);
  console.log('results: ', results);
  const user = results[0].data;
  console.log('user: ', user);
  const posts = results[1].data;
  console.log('posts: ', posts);


  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries("@getUser");
    }
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue);
  };

  // return null;

  // App.js 에서 suspense: true, 로 처리
  // if (isLoading) return <span>Loading...</span>

  return (
    <>
      {/* userQuery suspense not working 이슈는 ? 옵셔널체이닝을 써야함
      {user.nickName} / {posts.map} -> {user?.nickName} / {posts?.map}
      */}
      <h1>Edit</h1>
      <h3>현재 닉네임: {user?.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <ul>
        {posts?.map(post => <li>{post.title}</li>)}
      </ul>
    </>
  );
}
