import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ListContainer.module.css";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import ListItemLayout from "../components/ListItemLayout";
import ListFilter from "../components/ListFilter";
import Pagination from "../components/Pagination";
import OpenClosedFilters from "../components/OpenClosedFilters";

function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr id:open");
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState([]); //data
  const [page, setPage] = useState(1);

  async function getData(pageParam) {
    const data = await axios.get(
      "https://api.github.com/repos/facebook/react/issues",
      {
        params: { page: pageParam },
      },
    );
    setList(data.data);
  }

  useEffect(() => {
    getData(page);
  }, [page]);

  console.log({ list });

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button color={"green"}>New Issue</Button>
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
          {list.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              checked={checked}
              onChangeCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  );
}

export default ListContainer;
