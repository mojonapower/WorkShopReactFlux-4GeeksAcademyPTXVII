import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const CatList = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<h1>Aqui están los gatos con like</h1>
			{store.todosGatitos.map((value, position) => {
				return (
					<div key={position}>
						<img src={value} />{" "}
					</div>
				);
			})}
		</>
	);
};
