import React, { useRef } from "react";

// useRef를 활용 -> 비제어 컨포넌트 방식으로 Form을 다뤄보자!
export default function UnControlledForm() {
  const inputRef = useRef();
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  console.log(inputRef);
  console.log(inputRef.current);

  function handleSubmit(e) {
    e.preventDefault();
    alert(inputRef.current.value);
    // inputRef.current.focus();
  };



  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 :</label>
      <input type="text" name="nickname"
        // onChange={handleChange}
        ref={inputRef} />
      <input type="submit" value="제출"/>
    </form>
  );
}
