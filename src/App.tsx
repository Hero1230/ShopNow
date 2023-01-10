import "./App.scss";
import Cart from "./components/cart/Cart";
import ItemList from "./components/item-list/ItemList";

function App() {
	return (
		<div className="App">
			<div className="cart-area">
				<Cart />
			</div>
			<ItemList />
		</div>
	);
}

export default App;
