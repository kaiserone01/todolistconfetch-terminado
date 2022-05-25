import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ItemCard = ({ item }) => {
  const { store, actions} = useContext(Context);
  return (
    <div className="card" style={{ minWidht: "300px" }}>
      <img
        src="https://i.imgur.com/fYbZenp.jpg"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <div className="card-title">{item.name}</div>
        <div className="d-flex justify-content-between">
          <Link 
          className="btn btn-outline-primary" 
          to={`detail/${item.url.replace("https://www.swapi.tech/api/", "")}`}>
          {"learn more"}
            
          </Link>
          <button 
         
          type="button" 
          onClick={event => {
            let url ="/detail/" + item.url.replace("https://www.swapi.tech/api/", "");
            if (
              store && store.favorites.find((favorite, index) =>{
                return favorite.url === url;
              })
            ) {
              let index = store.favorites.indexOf(store.favorites.find((favorite, index) => {
                return favorite.url === url;
              })
              );
              actions.removeFavorite(index);
            }else {
              actions.addToFavorites(item.name, url, true);
            }
          }}
          className="btn border border-warning">
          
                {store && store.favorites.find((favorite, index) => {
                  return favorite.url === "/detail/" + item.url.replace("https://www.swapi.tech/api/", "");
                }) ? (
                  <i className="fas fa-heart text-warning" />
                ) : (
                  <i className="fas fa-heart text-warning" />
                )}
                </button>
                
        </div>
      </div>
    </div>
  );
};

ItemCard.protoType = {
  item: PropTypes.object,
};
