import { useState } from "react";
import styles from "./ListFilter.module.css";
import Modal from "./Modal";

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

export default ListFilter;
