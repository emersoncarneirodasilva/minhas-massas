import styles from "./Benefit.module.scss";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@sanity/lib/client";

const Benefit = ({ title, subtitle, icon }) => {
  const iconProps = useNextSanityImage(client, icon);

  return (
    <div className={styles.benefit}>
      <Image
        src={iconProps.src}
        alt=""
        loader={iconProps.loader}
        width={56}
        height={56}
      />
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Benefit;
