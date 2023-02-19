import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle6.svg" />
      <div className={styles.div}>디자인이 예뻐요</div>
      <div className={styles.parent}>
        <div className={styles.div1}>암튼 예쁘네요</div>
        <div className={styles.div2}>디자인이 심플하니 예뻐요</div>
        <div className={styles.div3}>깔끔한 디자인에 캐주일도 정장핏도</div>
        <div className={styles.div4}>너무 만족합니다.</div>
      </div>
      <div className={styles.div5} />
      <div className={styles.div6}>
        <div className={styles.div7}>다음과 유사한 문장이</div>
        <div className={styles.div8}>72</div>
        <div className={styles.div9}>건 있어요</div>
      </div>
      <div className={styles.price}>
        <div className={styles.div10}>보러가기</div>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default FrameComponent2;
