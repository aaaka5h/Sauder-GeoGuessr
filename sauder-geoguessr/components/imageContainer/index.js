import Image from "next/image";
import styles from "./imageContainer.module.css";

export default function ImageContainer({ src, alt }) {
  const srcString = "/../public/images/" + src + ".jpeg";
  return (
    <div className={styles.imageContainer}>
      <Image src={srcString} alt={alt} layout="fill" />
    </div>
  );
}
