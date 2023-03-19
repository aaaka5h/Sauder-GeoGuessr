import Image from "next/image";
import styles from "./imageContainer.module.css";

export default function ImageContainer({ location }) {
  const srcString = "/../public/static/" + location.imgPath;
  return (
    <div className={styles.imageContainer}>
      <Image src={srcString} alt={location.name} layout="fill" objectFit="cover" />
    </div>
  );
}
