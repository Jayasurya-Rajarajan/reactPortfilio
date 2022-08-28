import React from "react";
import styles from "./SideBar.module.css";
import profile from "../../Images/profile.png";
const SideBar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles["profile-image-div"]}>
          <img
            className={styles["profile-image"]}
            src={profile}
            alt="profile"
            width="150px"
            height="150px"
          />
        </div>
        <div className={styles["name-div"]}>
          <h1>Jayasurya</h1>
        </div>
        <div className={styles["designation-div"]}>
          <h3>Software Developer</h3>
        </div>
        <div className={styles['tech-list-div']}>
          <div className={styles['tech-list']}>
            <h6>.NET,</h6>
            <h6>React JS,</h6>
            <h6>SQL Server</h6>
          </div>
        </div>
        <p className={styles["sidebar-paragraph"]}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
};

export default SideBar;
