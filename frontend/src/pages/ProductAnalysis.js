import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductAnalysis.module.css";

const ProductAnalysis = () => {
  const navigate = useNavigate();

  const onContainer1Click = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onDirectContainerClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onProductContainerClick = useCallback(() => {
    navigate("/product-analysis");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.productAnalysis}>
      <div className={styles.background}>
        <img
          className={styles.backgroundChild}
          alt=""
          src="../rectangle-1127.svg"
        />
        <div className={styles.searchBar}>
          <div className={styles.div}>갤럭시</div>
          <img className={styles.categoryIcon} alt="" src="../category.svg" />
          <img className={styles.searchIcon} alt="" src="../search-icon.svg" />
          <div className={styles.category1}>
            <img
              className={styles.arrowDownIcon}
              alt=""
              src="../arrow-down-icon.svg"
            />
            <div className={styles.div1}>카테고리</div>
          </div>
        </div>
        <div className={styles.div2}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle65.svg"
          />
          <div className={styles.divider} />
          <div className={styles.div3}>
            <div className={styles.div4}>리뷰량순</div>
            <img
              className={styles.iconboldarrowDown}
              alt=""
              src="../iconboldarrowdown1.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <div className={styles.div5}>3,722명의 리뷰</div>
              <div className={styles.div6} onClick={onContainer1Click}>
                <div className={styles.div7}>바로가기</div>
              </div>
              <div className={styles.divider1} />
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="../mask-group4@2x.png"
              />
              <div className={styles.div8}>셀렉샵 양모 리버시블 하프코트</div>
            </div>
            <div className={styles.group}>
              <div className={styles.div9} />
              <div className={styles.div10}>리뷰 평점</div>
              <div className={styles.div11}>4.2점</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div9} />
              <div className={styles.div13}>신규 리뷰</div>
              <div className={styles.div14}>38건</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.group}>
              <div className={styles.div9} />
              <div className={styles.div10}>리뷰 평점</div>
              <div className={styles.div11}>3.8점</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div9} />
              <div className={styles.div13}>신규 리뷰</div>
              <div className={styles.div14}>15건</div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div21} />
              <div className={styles.parent2}>
                <div className={styles.div22}>1,082명의 리뷰</div>
                <div className={styles.direct} onClick={onDirectContainerClick}>
                  <div className={styles.div7}>바로가기</div>
                </div>
                <div className={styles.divider1} />
                <div className={styles.wrapper}>
                  <img
                    className={styles.icon}
                    alt=""
                    src="../-20230214--924-1@2x.png"
                  />
                </div>
                <div className={styles.div24}>셀렙샵 양모 리버시블 롱 코트</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.title}>
          인사이트 분석이 필요한 제품을 선택하세요
        </div>
        <div className={styles.logo}>
          <img className={styles.icongraph} alt="" src="../icongraph4.svg" />
          <textarea className={styles.textarea} />
        </div>
        <div className={styles.div25}>좌측 항목 수정 필요</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.bar1} />
        <div className={styles.mainBarElements}>
          <div className={styles.logout}>
            <div className={styles.div26}>로그아웃</div>
            <img
              className={styles.iconoutlinelogin}
              alt=""
              src="../iconoutlinelogin6.svg"
            />
          </div>
          <div className={styles.setting}>
            <div className={styles.div26}>설정</div>
            <img
              className={styles.iconoutlinelogin}
              alt=""
              src="../iconlinearsetting2.svg"
            />
          </div>
          <div className={styles.product} onClick={onProductContainerClick}>
            <div className={styles.div28}>제품 분석</div>
            <img
              className={styles.iconlinearchart}
              alt=""
              src="../iconlinearchart11.svg"
            />
          </div>
          <div className={styles.home} onClick={onHomeContainerClick}>
            <div className={styles.div26}>홈</div>
            <img
              className={styles.iconlinearspeedometer}
              alt=""
              src="../iconlinearspeedometer6.svg"
            />
          </div>
        </div>
        <div className={styles.logo1}>
          <img className={styles.icongraph} alt="" src="../icongraph10.svg" />
          <div className={styles.div30}>세모리</div>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalysis;
