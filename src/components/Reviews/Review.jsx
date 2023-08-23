import styles from "./Review.module.scss";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@sanity/lib/client";

const Review = ({ image, name, review }) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <div className={styles.review}>
      <div className={styles.avatar}>
        <Image
          src={imageProps.src}
          alt="Imagem dos cliente/depoimentos"
          loader={imageProps.loader}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <span>{name}</span>
      <p>{review}</p>
    </div>
  );
};

export default Review;
