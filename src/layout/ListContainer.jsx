import cx from "clsx";
import React, { useState } from "react";
import styles from "./ListContainer.module.css";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import ListItemLayout from "../components/ListItemLayout";
import Modal from "../components/Modal";

function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr id:open");
  // const [checkedList, setCheckedListe] = useState([]);

  //   useEffect(()=> {
  //     console.log({inputValue});
  // }, [inputValue]);

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button style={{ backgroundColor: "green", color: "#FFF" }}>
          New Issue
        </Button>
      </div>
      <OpenClosedFilters />
      <ListItemLayout
        style={{
          background: "rgb(246, 248, 250)",
          padding: "16px",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          marginTop: "20px",
        }}
      >
        <ListFilter />
      </ListItemLayout>
      <div className={styles.itemContainer}>
        <ListItem badges={[{ color: "red", title: "Bug2" }]} />
        <ListItem badges={[{ color: "red", title: "Bug2" }]} />
        <ListItem badges={[{ color: "red", title: "Bug2" }]} />
        <ListItem badges={[{ color: "red", title: "Bug2" }]} />
      </div>
    </div>
  );
}

function ListFilter() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.filterLists}>
        <ListFilterItem onClick={() => setShowModal(true)}>
          Author
        </ListFilterItem>
        <ListFilterItem onClick={() => setShowModal(true)}>
          Lable
        </ListFilterItem>
        <ListFilterItem onClick={() => setShowModal(true)}>
          Project
        </ListFilterItem>
        <ListFilterItem onClick={() => setShowModal(true)}>
          Milestones
        </ListFilterItem>
        <ListFilterItem onClick={() => setShowModal(true)}>
          Assignee
        </ListFilterItem>
        <ListFilterItem onClick={() => setShowModal(true)}>Sort</ListFilterItem>
      </div>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        placeholder="Filter labels"
      />
    </>
  );
}

function ListFilterItem({ onClick, children }) {
  return (
    <span role="button" onClick={onClick}>
      {children}▼
    </span>
  );
}

function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);

  // const data = getData();
  // const openData = data.filter((d)=> d.state === 'open');
  // const closeData = data.filter((d)=> d.state === 'close');

  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  );
}
function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size}
      {state}
    </span>
  );
}

export default ListContainer;
