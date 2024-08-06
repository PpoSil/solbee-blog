import React from "react";
import EmptyContainer from "./emptyContainer";
import styles from "./project.module.css";

const ProjectHeader = () => {
  return (
    <div>
      <EmptyContainer />
      <div>Project</div>
      <section className={styles.projectButtonSection}>
        <button>1. Heul-Git</button>
        <button>2. Have-It!</button>
        <button>3. SSTUDE HOUSE</button>
      </section>
      <section>
        <div>Heul-Git</div>
        <div>Have-It!</div>
        <div>SSTUDE HOUSE</div>
      </section>
    </div>
  );
};

export default ProjectHeader;
