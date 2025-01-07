import React, { useState } from "react";

export default function Counter2() {
  const [number, setNumber] = useState(1);

  // 비동기 적으로 실행됨-콜백사용하지 않아- 상태 업뎃시 최신 상태 반영안됨.
  // useState(1)즉, setState를 호출할때
  // React는 제공한 객체를 현재 state로 병합한다.
  // const add = () => setNumber( number + 1);
  // const subtract = () => setNumber( number - 1);
  // const multiplyBy2 = () => setNumber( number * 2);

  // setState 비동기 적으로 실행됨-콜백사용으로 상태 업뎃시 최신 상태를 반영
  // number라는 (현재의 state를) 인자를 함수()로 넘겨주면
  // 다음 병합시에 업데이트된 number가 넘어가도록 되어있음.
  // 즉, setState는 비동기적으로 실행되는데 비동기적으로 실행되는 문제를 피하려면
  // 현재의 state를 함수로 넘겨주면 된다.
  const add = () => setNumber((number) => number + 1);
  const subtract = () => setNumber((number) => number - 1);
  const multiplyBy2 = () => setNumber((number) => number * 2);
  const multiplyBy2AndAddBy1 = () => {
    multiplyBy2();  // setNumber(number * 2) -> UI
    add();  // setNumber( + 1); -> UI
  };


  /*
  여러 객체를 병합하는 메서드 Object.assign()
  number= 3   3*2 = number= 6   3+1 = number = 4 넘버3에 값이 덮어 씌워짐.
  같은 넘버라는 키를 3개나 갖고 있어서 다 덮어 씌워져서 젤 마지막 값이 출력됨.
  Object.assign({ number, number : number * 2, number : number + 1 });
  */


  return (
    <div>
      <h1>Number : {number}</h1>
      <div>
        <button onClick={add}>+ 1</button>
        <button onClick={subtract}>- 1</button>
        <button onClick={multiplyBy2}>*2</button>
        <button onClick={multiplyBy2AndAddBy1}>*2 + 1</button>
      </div>
    </div>
  );
}
