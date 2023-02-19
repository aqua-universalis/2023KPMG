import styles from "./GroupComponent2.module.css";

const GroupComponent2 = () => {
  return (
    <div className={styles.ellipseParent}>
      <img className={styles.groupChild} alt="" src="../ellipse-2.svg" />
      <img className={styles.groupItem} alt="" src="../ellipse-2.svg" />
      <img className={styles.groupInner} alt="" src="../ellipse-3.svg" />
    </div>
  );
};

export default GroupComponent2;
