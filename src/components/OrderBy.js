import React, { useState } from "react";

const OrderBy = ({ result, setResult }) => {
  const [order, setOrder] = useState(false);

  const orderName = (e) => {
    const sortedName = result.sort((a, b) => {
      let nameA = a[0].toUpperCase();
      let nameB = b[0].toUpperCase();
      if (e === "ascending") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      } else {
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      }
    });
    setResult(sortedName);
  };
  const orderDate = (e) => {
    const sortedDate = result.sort((a, b) => {
      let splitString = a[3].split("/");
      let reverseArray = splitString.reverse();
      reverseArray.splice(1, 0, "/");
      reverseArray.splice(3, 0, "/");
      let joinArray = reverseArray.join("");
      let endA = new Date(joinArray);

      let splitString1 = b[3].split("/");
      let reverseArray1 = splitString1.reverse();
      reverseArray1.splice(1, 0, "/");
      reverseArray1.splice(3, 0, "/");
      let joinArray1 = reverseArray1.join("");
      let endB = new Date(joinArray1);

      if (e === "ascending") {
        return endA - endB;
      } else {
        return endB - endA;
      }
    });
    setResult(sortedDate);
  };
  return (
    <>
      <button className="listpage-button" onClick={() => setOrder(!order)}>
        &#8645; Order By
      </button>
      {order && (
        <div className="listpage-order">
          <button onClick={() => orderName("ascending")}>Name Ascending</button>
          <button onClick={() => orderName("descending")}>
            Name Descending
          </button>
          <button onClick={() => orderDate("ascending")}>Year Ascending</button>
          <button onClick={() => orderDate("descending")}>
            Year Descending
          </button>
        </div>
      )}
    </>
  );
};

export default OrderBy;
