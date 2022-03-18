import React, { useState } from "react";
import data from "../mockData.json";
import logo from "../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { MyButton, MyInput } from "./MyElements";
import Item from "./Item";

const LandingPage = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [resultNumber, setResultNumber] = useState([]);
  let history = useHistory();

  const searchName = (e) => {
    const inputSearch = e.target.value;
    if (inputSearch !== "") {
      const filteredName = data.data
        .filter((data) => {
          return (
            data[0].toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1
          );
        })
        .slice(0, 3);
      const resultNumber = data.data.filter((data) => {
        return data[0].toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1;
      }).length;
      setResultNumber(resultNumber);
      setResult(filteredName);
      setSearch(inputSearch);
    } else {
      setResult([]);
      setSearch("");
    }
  };
  const searchNameButton = () => {
    if (search !== "") {
      history.push(`/result/${search}`);
    }
  };

  return (
    <div className="landing-container">
      <div className="brand">
        <img src={logo} alt="logo" width="278" />
        <p>Search web app</p>
      </div>
      <div className="landing-search">
        <MyInput
          width={709}
          onChange={searchName}
          className={
            result.length > 0 || search === "" ? "my-input" : "my-input-error"
          }
        />
        <MyButton
          background="#204080"
          value="Search"
          onClick={searchNameButton}
        />
      </div>
      {result.length !== 0 && (
        <div className="landing-result">
          {result.map((i) => (
            <Item
              key={Math.random()}
              item={i}
              className="landing-result-item"
            />
          ))}
          {resultNumber > 3 && (
            <Link className="landing-result-link" to={`/result/${search}`}>
              Show More...
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
