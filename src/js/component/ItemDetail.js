import React from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";

export const ItemDetail = ({ item }) => {
  return (
    <div className="row flex-wrap">
      <div className="col-6">
        <img
          src="https://i.imgur.com/fYbZenp.jpg"
          className="img-fluid"
          alt=""
        ></img>
      </div>
      <div className="col-6">
        <h1>{item[0][1]}</h1>
        <p>
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.array,
};
