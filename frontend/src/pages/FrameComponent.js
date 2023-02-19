import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle4.svg" />
      <div className={styles.div}>겨울에 잘입어질거 같아요</div>
      <div className={styles.parent}>
        <div className={styles.div1}>따뜻하게 잘 입을거란 확신이 듭니다</div>
        <div className={styles.div2}>겨울에 휘두루마뚜르 잘 입을 것 같아여</div>
        <div className={styles.div3}>깔끔한 디자인에 캐주일도 정장핏도</div>
      </div>
      <div className={styles.div4} />
      <div className={styles.div5}>
        <div className={styles.div6}>다음과 유사한 문장이</div>
        <div className={styles.div7}>104</div>
        <div className={styles.div8}>건 있어요</div>
      </div>
      <div className={styles.price}>
        <div className={styles.div9}>보러가기</div>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default FrameComponent;
