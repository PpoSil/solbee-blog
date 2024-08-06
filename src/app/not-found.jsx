import React from "react";
import styles from "./not-found.module.css";

const notFound = () => {
  return (
    <section>
      <div>
        <h1>404 Not Found</h1>
        <h3>벌이 길을 잃었습니다...</h3>
        <img className={styles["notfound-img"]} src="/not-found.png" alt="" />
        <p>
          <a href="https://kr.freepik.com/free-vector/cute-honey-bee-flying-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_34068066.htm#fromView=search&page=1&position=10&uuid=878dfc4f-393b-4132-a072-9f83a24df8b2">
            작가 catalyststuff 출처 Freepik
          </a>
        </p>
      </div>
    </section>
  );
};

export default notFound;
