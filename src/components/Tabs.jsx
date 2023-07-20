import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Tabs.module.css";
import cx from "clsx";

const tabList = [
  { name: "Code", pathname: "/code" },
  { name: "Issues", pathname: "/issue" },
  { name: "Pull requests", pathname: "/pulls" },
  { name: "Actions", pathname: "/actions" },
  { name: "Project", pathname: "/project" },
  { name: "Wiki", pathname: "/wiki" },
  { name: "Security", pathname: "/security" },
  { name: "Insights", pathname: "/insights" },
  { nsme: "Setting", pathname: "/setting" },
];

function Tabs() {
  const { pathname } = useLocation();

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, idx) => (
        <Tab
          key={idx}
          item={tab}
          selected={(pathname === "/" ? "/issue" : pathname) === tab.pathname}
        />
      ))}
    </ul>
  );
}
function Tab({ item, selected, onClick, number }) {
  return (
    <li>
      <Link to={item.pathname} className={styles.link}>
        <button className={cx(styles.tab, { [styles.selected]: selected })}>
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  );
}

export default Tabs;
