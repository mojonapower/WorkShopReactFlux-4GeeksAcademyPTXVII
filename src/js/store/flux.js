const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			url: "",
			todosGatitos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				// la constante store me va a permitir obtener TODOS los elementos y valores del objeto strore
				const store = getStore();
				fetch("https://api.thecatapi.com/v1/images/search")
					.then(response => response.json())
					.then(result => {
						//con setStore() yo modifico store en el campo que yo quiera con el valor recibido de la api
						//si yo quiero modificar el campo url , entonces setStore({url:"valor"})
						setStore({ url: result[0].url });
						console.log(store.url);
					})
					.catch(error => console.log("errorcito", error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			mandarGatitos: url => {
				const store = getStore();
				setStore({ todosGatitos: [...store.todosGatitos, url] });
			}
		}
	};
};

export default getState;
