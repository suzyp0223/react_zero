import React from "react";
import styled from "styled-components";  // https://styled-components.com/docs/basics#motivation
// import * as S from "./ProductsTable.style.js"

// 정적인 버전.
export default function ProductsTable(props) {
  const { category, items, inStockOnly } = props;
  const filteredItems = inStockOnly ? items.filter(item => item.stocked) : items;
  return (
    <>
      <tr>
        {/* <td style={{ fontWeight: "bold" }}>{category}</td> */}
        {/* <S.Category>{category}</S.Category> */}
        <Category>{category}</Category>
      </tr>
      {filteredItems.map((item, idx) => (
        <tr key={idx}>
          {/* <td style={item.stocked ? {color: "black"} : {color: "red"}}>{item.name}</td> */}
          <ProductName stocked={item.stocked}>{item.name}</ProductName>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
}


const Category = styled.td`
  font-weight: bold;
`;

// styled-components에 props적용
const ProductName = styled.td`
  color: ${(props) => (props.stocked ? "black" : "red")};
`;