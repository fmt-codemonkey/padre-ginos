const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { style: { color: "red" } }, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Some dope pizza",
    }),
    React.createElement(Pizza, {
      name: "Americano",
      description: "French fires and hot dogs",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "Pinnaple and Ham",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "Chicken nuggets on the pizza",
    }),
    React.createElement(Pizza, {
      name: "Pokhareli Pizza",
      description: "Ham and pineapple best on the town",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
