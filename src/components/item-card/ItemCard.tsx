import styles from "./ItemCard.module.scss";

const ItemCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.img} />
			<div className={styles.content}>
				<p>Jacket</p>
				<button className={styles.btn}>Buy</button>
			</div>
		</div>
	);
};

export default ItemCard;
