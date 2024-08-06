import React from "react";
import ProjectHeader from "./projectHeader.jsx";
import styles from "./project.module.css";

const projects = () => {
  return (
    <div className={styles.projectContainder}>
      <ProjectHeader />
    </div>
  );
};

export default projects;
