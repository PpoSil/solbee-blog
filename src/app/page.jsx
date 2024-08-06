import React from "react";
// import styles from "./page.module.css";
import Projects from "./projects/projects";
import Introduction from "./introduction/introduction";

const page = () => {
  return (
    <div>
      <Introduction />
      <Projects />
    </div>
  );
};

export default page;
