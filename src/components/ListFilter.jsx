import { useState } from "react";
import styles from "./ListFilter.module.css";
import Modal from "./Modal";

function ListFilter({ onChangeFliter }) {
  const [showModal, setShowModal] = useState();
  const filterList = [
    "Author",
    "Lable",
    "Project",
    "Milestones",
    "Assignee",
    "Sort",
  ];
  return (
    <>
      <div className={styles.filterLists}>
        {filterList.map((filter) => (
          <ListFilterItem
            searchDataList={[]}
            key={filter}
            onClick={() => setShowModal(filter)}
            onClose={() => setShowModal()}
            showModal={showModal === filter}
          >
            {filter}
          </ListFilterItem>
        ))}
      </div>
    </>
  );
}

function ListFilterItem({
  children,
  placeholder,
  searchDataList,
  showModal,
  onClick,
  onClose,
  onChangeFliter,
}) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={onClick}>
        {children}▼
      </span>
      <div className={styles.modalContainer}>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder={placeholder}
          searchDataList={searchDataList}
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
