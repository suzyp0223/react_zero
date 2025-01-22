import React from 'react';
import ProductsTable from './ProductTable.js';

export default function StoreTable(props) {

  const { products, filter } = props;
  // const sportingGoods = products.filter(p => p.category === "Sporting Goods");
  // const electronics = products.filter(p => p.category === "Electronics");


  // products에서 filter.text가 있으면,-> 그 친구만 렌더링을 해야함
  const targetProduct = products.filter(p => p.name === filter.text);
  const filteredProducts = targetProduct.length > 0 ? targetProduct : products;
  console.log('filteredProducts: ', filteredProducts);


  // 서버에서 내려주는 데이터
  const result = filteredProducts.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      // key(카테고리)가지고 있는 케이스, 배열에 추가만
      return {
        ...acc,
        // 지금 카테고리에 : 내것을 ,cur추가
        [cur.category]: [...acc[cur.category], cur] // ...acc기존의것 풀어써주고 ,cur내것도 추가
      }
    } else {
      // 새로운 카테고리 key를 생성하고 배열도 추가함.
      return {
        ...acc, // 원래가지고 있는것은 디스트럭쳐링으로 풀어주고
        [cur.category]: [cur]   // [cur] 새로운 배열에 추가
      }
    }
  }, {});
  console.log(result);
  // result가 키라서 배열에 키만 담음.
  const keys = Object.keys(result);

  return (
    <table>
      <thead>
        <tr style={{fontWeight: "bold"}}>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {keys.map((key, idx) =>
          <ProductsTable category={key} items={result[key]} key={idx}
          inStockOnly={filter.inStockOnly}
          />)}
      </tbody>
    </table>
  );
};
