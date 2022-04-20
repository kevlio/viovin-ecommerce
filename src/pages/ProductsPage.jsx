import React, { useState, useEffect } from "react";
import ProductContainer from "../components/Product/ProductContainer";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { wineList } from "../data";
import { useRecoilState } from "recoil";
import { filterState } from "../stores/atom";

const Categories = styled.div`
  display: flex;
`;

const Filter = styled.ul``;

const FilterOption = styled.li`
  display: flex;
`;

function ProductsPage() {
  const [filter, setFilter] = useRecoilState(filterState)
  const [categoryFilter, setCategoryFilter] = useState("none");

  const filterList = wineList.filter((wine) => {
    if (categoryFilter === "none") {
     
      return true;
    }
    if (wine.category === categoryFilter) {

      return true;
    } else {
    
      return false;
    }
  });

  useEffect(() => {
    setFilter(filterList)
  },[categoryFilter])

  return (
    <div>
      <Navbar />

      <Categories>
        <Filter>
          Sort
          <FilterOption name="red" onClick={(e) => console.log (e.target.name)}>Red</FilterOption>
          <FilterOption value="white" onClick={(e) => setCategoryFilter (e.target.value)}>White</FilterOption>
          <FilterOption value={categoryFilter} onClick={(e) => setCategoryFilter (e.target.value)}>Rose</FilterOption>
        </Filter>

        <Filter>
          Producent
          <FilterOption>A</FilterOption>
          <FilterOption>B</FilterOption>
          <FilterOption>C</FilterOption>
        </Filter>
      </Categories>
      <ProductContainer />
    </div>
  );
}

export default ProductsPage;
