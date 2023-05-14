import React from "react";
import styles from "./Header.module.css";
import Button from "../components/Button";
import Space from "../components/Space";
import Tabs from "../components/Tabs";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button style={{ backgroundColor: "transparent", color: "#000" }}>
          Watch
        </Button>
        <Space />
        <Button style={{ backgroundColor: "transparent", color: "#000" }}>
          Fork
          <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button style={{ backgroundColor: "transparent", color: "#000" }}>
          Star
        </Button>
      </div>
      <Tabs />
    </div>
  );
}

export default Header;
