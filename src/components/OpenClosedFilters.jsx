import cx from "clsx";
import styles from "./OpenClosedFilters.module.css";

function OpenClosedFilters({ isOpenMode, onClickMode }) {
  return (
    <>
      <OpenClosedFilter
        // size={openModeDataSize}
        state={"Open"}
        selected={isOpenMode}
        onClick={() => onClickMode("open")}
      />
      <OpenClosedFilter
        // size={closeModeDataSize}
        state={"Closed"}
        selected={!isOpenMode}
        onClick={() => onClickMode("closed")}
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

export default OpenClosedFilters;
