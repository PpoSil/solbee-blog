import React from "react";
import styles from "./contact.module.css";

const contact = () => {
  return (
    <section>
      <div>
        <img
          src="/solbee.jpg"
          alt="The Bee Is Gone Away!!"
          className={styles["profile-img"]}
        />
        <p>안솔비</p>
        <p>Email</p>
        <p>solbi1996@gmail.com</p>
      </div>
    </section>
  );
};

export default contact;
