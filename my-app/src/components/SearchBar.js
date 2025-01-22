import React from "react";

export default function SearchBar(props) {
  const { text, inStockOnly } = props.filter;

  function handleText(e) {
    // setFilter
    props.updateFilter(e.target.name, e.target.value);
  }

  function handleInStockOnly(e) {
    props.updateFilter(e.target.name, e.target.checked);
  }

  return (
    <>
      <input onChange={handleText} placeholder="Search..."
        name={"text"} value={text} />
      <div>
        <input type="checkbox" onChange={handleInStockOnly}
          id="stock" name="inStockOnly" checked={inStockOnly} />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </>
  );
};