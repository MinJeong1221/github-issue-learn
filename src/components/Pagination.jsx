import React from "react";
import cx from "clsx";
import styles from "./Pagination.module.css";

function Pagination({ currentPage, maxPage, onClickPageButton }) {
  return (
    <div>
      <button
        className={cx(
          styles.button /* { [styles.disabled]: currentPage === 1 }*/,
          styles.buleButton,
        )}
        disabled={currentPage === 1}
      >
        {"< Previous"}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton
          number={i + 1}
          onClick={onClickPageButton}
          selected={i + 1 === currentPage}
        />
      ))}
      <button
        className={cx(
          styles.button /*{
          [styles.disabled]: currentPage === maxPage,
        }*/,
          styles.buleButton,
        )}
        disabled={currentPage === maxPage}
      >
        {"Next >"}
      </button>
    </div>
  );
}

function PageButton({ onClick, number, selected }) {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}
export default Pagination;
