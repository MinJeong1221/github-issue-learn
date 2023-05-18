import cx from "clsx";
import React, { useState } from "react";
import styles from "./ListContainer.module.css";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import ListItemLayout from "../components/ListItemLayout";
import Modal from "../components/Modal";

function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr id:open");

  const [list, setList] = useState([] /* 초기 data를 받아온값 */);
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
        <ListFilter
          onChangeFliter={(filteredData) => {
            //필터링된 요소에 맞게 데이터를 불러오기
            //const data = getData('필터링된 정보')
            //setList(data);
          }}
        />
      </ListItemLayout>
      <div className={styles.itemContainer}>
        {list.map((listItem, index) => (
          <ListItem key={index} badges={[{ color: "red", title: "Bug2" }]} />
        ))}
      </div>
    </div>
  );
}

function ListFilter({ onChangeFliter }) {
  return (
    <>
      <div className={styles.filterLists}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Lable</ListFilterItem>
        <ListFilterItem>Project</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </>
  );
}

function ListFilterItem({ onClick, children, onChangeFliter }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children}▼
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter labels"
          searchDataList={["bug", "List"]}
          onClickCell={() => {
            // 클릭된 정보를 통해 리스트 필터링
            onChangeFliter();
          }}
        />
      </div>
    </div>
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
