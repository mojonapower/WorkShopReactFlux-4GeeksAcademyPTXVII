import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Imagen = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="card justify-content-center mx-auto" style={{ width: "18rem" }}>
				<figure className="figure">
					<img src={store.url} className="figure-img img-fluid rounded" alt="..." />
					<figcaption className="figure-caption" />
				</figure>
				<div className="card-body">
					<a
						onClick={() => {
							actions.loadSomeData();
							actions.mandarGatitos(store.url);
						}}
						href="#"
						className="btn btn-success">
						Like
					</a>
					<a
						onClick={() => {
							actions.loadSomeData();
						}}
						href="#"
						className="btn btn-danger">
						Dislike
					</a>
				</div>
			</div>
		</>
	);
};
