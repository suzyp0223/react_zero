import React from "react";
import dog from './images/dog.jpg';

export default function Welcome({withImg, firstName, lastName}) {
  // image + Hello, firstName, lastName
  return (
    <>
      {withImg && <img src={dog} alt="welcomeCat" height="200" />}
      <div>Hello!</div>
      <div>
        <span>{firstName}</span>
        {lastName}
      </div>
    </>
  );

}