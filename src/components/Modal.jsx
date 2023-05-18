import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import cx from "clsx";

function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(searchDataList);

  // useEffect(() => {
  //   console.log({ searchValue });
  // }, [searchValue]);

  useEffect(() => {
    // setFilteredData(searchDataList.filter((item) => item.some("...")));
    // setFilteredData(["apple"]);
    setFilteredData(searchDataList.filter((item) => item === searchValue));
  }, [searchDataList, searchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredData.map((data) => (
        <div key={data} onClick={onClickCell}>
          {data}
        </div>
      ))}
    </div>
  );
}

export default Modal;
