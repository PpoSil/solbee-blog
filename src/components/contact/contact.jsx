import React from "react";
import styles from "./contact.module.css";

const contact = () => {
  return (
    <section>
      <div>
        <h3>벌이 도망갔습니다...</h3>
        <img className={styles["notfound-img"]} src="/not-found.jpg" alt="" />
        <p>
          <a href="https://kr.freepik.com/free-vector/cute-honey-bee-flying-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_34068066.htm#fromView=search&page=1&position=10&uuid=878dfc4f-393b-4132-a072-9f83a24df8b2">
            작가 catalyststuff 출처 Freepik
          </a>
        </p>
      </div>

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
