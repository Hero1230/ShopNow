import ItemCard from "../item-card/ItemCard";
import styles from "./ItemList.module.scss";

const ItemList = () => {
	return (
		<div className={styles.container}>
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
		</div>
	);
};

export default ItemList;
