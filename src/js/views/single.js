import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ItemDetail } from "../component/ItemDetail";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [item,  setItem]  =  useState(undefined);

	const  getPeopleInfo = async  (id)  => {
		let  response = await fetch(`${store.URL_API}/people/${id}`);
		if(response.ok){
			const  body  =  await response.json();
			let  peopleDetails =[];
			peopleDetails.push(
			["Name", body.result.properties.name],
			["Birth  Day",  body.result.properties.birth_year],
			["Gender", body.result.properties.gender],
			["Height", body.result.properties.height],
			["Skin Color", body.result.properties.skin_color],
			["Eye Color", body.result.properties.eye_color]

			);
			setItem(peopleDetails);
		}

	};

	useEffect(() =>{
		if(params.id){
			getPeopleInfo(params.id)
		}
	});




	return (
	<div className="container">
		{item   ?   <ItemDetail  item={item}/> : ""}
	</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
