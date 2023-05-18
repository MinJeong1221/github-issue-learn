import React from "react";
import styles from "./Header.module.css";
import Button from "../components/Button";
import Space from "../components/Space";
import Tabs from "../components/Tabs";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button className={styles.silverButton}>Watch</Button>
        <Space />
        <Button>
          Fork
          <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button>Star</Button>
      </div>
      <Tabs />
    </div>
  );
}

export default Header;
