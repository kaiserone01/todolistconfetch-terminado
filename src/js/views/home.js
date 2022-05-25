import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <h1> character</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {store.peoples.map((people, index) => {
          return <ItemCard key={people.uid} item={people} />;
        })}
      </div>
    </div>
  );
};
