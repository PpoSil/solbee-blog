import React from "react";
import Picture from "./picture.jsx";
import WhoAmI from "./whoAmI.jsx";
import styles from "./introduction.module.css";

const introduction = () => {
  return (
    <div className={styles["introduction-container"]}>
      <WhoAmI />
      <Picture />
    </div>
  );
};

export default introduction;
