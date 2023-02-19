import styles from "./Keywordex.module.css";

const Keywordex = () => {
  return (
    <div className={styles.keywordex}>
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="../ellipse-1.svg" />
        <div className={styles.div}>?</div>
      </div>
      <div className={styles.component3}>
        <div className={styles.div1}>키워드 분석</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse.svg" />
        <img className={styles.rectangleIcon} alt="" src="../rectangle8.svg" />
        <div className={styles.div2}>
          고객들은 해당 제품에 대해 다음과 같은 키워드를 언급하고 있어요
        </div>
        <div className={styles.div3}>
          <span>키워드</span>
          <span className={styles.span}>
            를 선택하면 세부 분석으로 이동해 구체적인 리뷰들을 확인할 수 있어요
          </span>
        </div>
      </div>
    </div>
  );
};

export default Keywordex;
