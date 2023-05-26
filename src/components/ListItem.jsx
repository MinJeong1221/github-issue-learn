import React from "react";
import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import Badge from "./Badge";
import moment from "moment";

export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.labels;
  const state = data.state === "open" ? "opened" : "closed";
  const date = data.state === "open" ? data.created_at : data.closed_at;

  return (
    <ListItemLayout checked={checked} onClick={onChangeCheckBox}>
      <div>
        <div role="button" className={styles.title} onClick={onClickTitle}>
          {data.title}
          {data.labels.length > 0 &&
            badges.map((badgeProps, idx) => (
              <Badge key={idx} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {moment(date).fromNow()} by {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  );
}
