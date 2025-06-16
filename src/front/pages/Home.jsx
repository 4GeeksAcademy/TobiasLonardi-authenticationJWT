import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {Navigate} from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	if(!store.token){
		return <Navigate to="/login"/>
	}
	return(
		<div className="container">
			<div>
				<h1>Hola que tal bienvenido al inicio de la web</h1>
				<p className="mt-4"> iniciaste Sesion</p>
			</div>
		</div>
	);
}; 