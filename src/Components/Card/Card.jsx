import React from "react";

const Card = ({ array, setFunc }) => {
  return (
    <div className="list-container">
      {array.map((item) => {
        return (
          <p key={item}>
            {item}{" "}
            <i
              onClick={() => {
                let newArray = array.filter((item2) => {
                 return item2 !== item;
                });
           
                setFunc(newArray);
              }}
              class="fa-solid fa-x"
            ></i>
          </p>
        );
      })}
    </div>
  );
};

export default Card;
