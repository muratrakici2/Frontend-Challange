import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import data from "../mockData.json";
import { MyButton, MyInput } from "./MyElements";
import ReactPaginate from "react-paginate";
import OrderBy from "./OrderBy";
import Item from "./Item";

const ListPage = () => {
  //Başlangıç verileri
  let { id } = useParams();
  let history = useHistory();
  const [search, setSearch] = useState(id);
  const [result, setResult] = useState([]);

  // Paginate verileri
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [active, setActive] = useState(0);

  //Başlangıç veri alma fonksiyonları
  useEffect(() => {
    const filteredName = data.data.filter((data) => {
      return data[0].toLowerCase().indexOf(id.toLowerCase()) !== -1;
    });
    setResult(filteredName);
  }, [id]);

  const searchName = () => {
    if (search !== "") {
      history.push(`/result/${search}`);
      setItemOffset(0);
      setActive(0);
    }
  };

  // Paginate fonksiyonları
  const itemsPerPage = 6;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(result.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(result.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, result]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % result.length;
    setItemOffset(newOffset);
    setActive(event.selected);
  };
  
  return (
    <div>
      <header>
        <img src={logo} alt="logo" width={149} />
        <MyInput
          defaultValue={id}
          width={509}
          onChange={(e) => setSearch(e.target.value)}
          className={result.length > 0 ? "my-input" : "my-input-error"}
        />
        <MyButton background="#4F75C2" value="Search" onClick={searchName} />
      </header>
      <div className="listpage-container">
        <OrderBy result={result} setResult={(e) => setResult([...e])} />
        {currentItems.map((i) => (
          <div className="list-item-container" key={Math.random()}>
            <Item item={i} className="list-item" />
          </div>
        ))}
      </div>
      {result.length > itemsPerPage && (
        <ReactPaginate
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          pageCount={pageCount}
          previousLabel="Previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="big-page-item"
          previousLinkClassName="big-page-link"
          nextClassName="big-page-item"
          nextLinkClassName="big-page-link"
          breakLabel="..."
          breakClassName="break-page-item"
          breakLinkClassName="break-page-link"
          containerClassName="pagination"
          activeClassName="pagination-active"
          renderOnZeroPageCount={null}
          forcePage={active}
        />
      )}
    </div>
  );
};

export default ListPage;
