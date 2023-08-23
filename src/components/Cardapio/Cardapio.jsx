import styles from "./Cardapio.module.scss";
import Item from "./Item";

const Cardapio = ({ cardapio }) => {
  const renderItem = cardapio.map((item) => (
    <Item
      key={item._id}
      image={item.image}
      title={item.title}
      category={item.category}
    />
  ));

  return (
    <section className={styles["cardapio-wrapper"]}>
      <div className={styles.cardapio}>
        <h2 className="gold">No Cardápio</h2>
        <div className={styles.items}>{renderItem}</div>
      </div>
    </section>
  );
};

export default Cardapio;
