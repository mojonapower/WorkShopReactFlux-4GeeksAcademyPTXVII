import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Imagen } from "../component/card";

export const Cats = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="text-center">Aqui estan nuestros gatos</h1>

			<Imagen />

			<Link to="/likes">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					A VER LOS GATOS!!!
				</span>
			</Link>
			<h1>Aqui están los gatos con like</h1>
			{store.todosGatitos.map((value, position) => {
				return (
					<div key={position}>
						<img src={value} />{" "}
					</div>
				);
			})}
		</div>
	);
};
