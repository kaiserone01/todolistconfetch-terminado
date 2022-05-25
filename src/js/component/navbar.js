import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
/* import startWarsLogo from "../../img/startWarsLogo.png"; */

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <navbar className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand" href="#">
            <img
              src={"../../img/startWarsLogo.png"}
              alt=""
              width="100"
              height="50"
              className="d-inline-block align-text-top"
            />
          </span>
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span className="dot">{store.favorites.length}</span>
          </button>
          <ul
            id="navDropDown"
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            {store.favorites &&
              store.favorites.map((favorite, index) => {
                return (
                  <li className="d-flex align-items-center" key={index}>
                    <Link to={favorite.url} className="dropdown-item">
                      {favorite.favName}
                    </Link>
                    <i
                      className="far fa-trash-alt pe-2"
                      onClick={(e) => {
                        actions.removeFavorite(index);
                      }}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </navbar>
  );
};
