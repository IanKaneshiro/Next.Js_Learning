import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7735231/pexels-photo-7735231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.25.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          laborum nihil eaque voluptates. Tenetur, nemo? Quos eos aperiam,
          cupiditate consectetur beatae neque, officia commodi repellendus sed,
          a aspernatur? Molestiae, cumque!
        </p>
        <Link className={styles.link} href="./blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
