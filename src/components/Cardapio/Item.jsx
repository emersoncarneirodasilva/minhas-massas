import styles from "./Item.module.scss";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@sanity/lib/client";

const Item = ({ image, title, category }) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <div className={styles.item}>
      <Image
        src={imageProps.src}
        alt="Imagem do produto"
        loader={imageProps.loader}
        width={200}
        height={200}
      />
      <h3>{category}</h3>
      <h4>{title}</h4>
    </div>
  );
};

export default Item;
