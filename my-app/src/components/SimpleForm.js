import React, { useState } from "react";

export default function SimpleForm() {
  // const [nickname, setNickname] = useState("");
  // const [password, setPassword] = useState("");

  const [userInputs, setUserInputs] = useState({
    nickname: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name] : e.target.value });
    // if (e.target.name === 'nickname') return setNickname(e.target.value);
    // return setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    // 서버의 기본동작이 작동하지 않도록
    e.preventDefault();
    // 서버 요청 + a
    const {nickname, password} = userInputs;
    alert(`nickname: ${nickname}, password: ${password}`);
  };

  return (
    // 로그인 폼
    <form onSubmit={handleSubmit}>
      <label>닉네임 :</label>
      <input type="text" name="nickname" onChange={handleChange} value={userInputs.nickname} />
      <br />
      <label>비밀번호 :</label>
      <input type="text" name="password" onChange={handleChange} value={userInputs.password} />
      <input type="submit" value="제출" />
    </form>
  );
}
