import React, { useState, useEffect } from "react";
import "./index.css";

function Cartdesignapi() {
  let [user, setUser] = useState([]);

  function GetUsers() {
    fetch("https://rickandmortyapi.com/api/character/1,50,5,8,15,25,60,70")
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
        console.log(">>>", user);
      });
  }

  useEffect(() => {
    GetUsers();
  }, []);

  return (
    <>
      <div className="title">The Rick and Morty API</div>
      <div className="start-part">
        {user &&
          user.length &&
          user.map((item, index) => (
            <>
              <div className="cart-design">
                <div className="cart-box">
                  <div className="image-box">
                    <img
                      src={item.image}
                      style={{
                        width: "90%",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="contant-box">
                    <div className="contant-1">
                      <h1>{item.name}</h1>
                    </div>
                    <div className="flex">
                      <div
                        className={item.status === "Dead" ? "reddot" : "greendot"}
                      ></div>
                      <div className="contant-2">
                        <h3>
                          {item.status}-{item.species}
                        </h3>
                      </div>
                    </div>

                    <div className="contant-3">
                      <h4>Last known location:</h4>
                    </div>
                    <div className="contant-4">
                      <h4>{item.location.name}</h4>
                    </div>

                    <div className="contant-6">
                    First seen in:
                    </div>

                    <div className="contant-7">
                      <h4>{item.origin.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </> 
  );
}
export default Cartdesignapi;
