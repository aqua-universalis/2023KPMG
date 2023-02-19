import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component4";
import styles from "./KeywordAnalysis.module.css";

import positive from "../data/best_key.json";
import soso from "../data/soso_key.json";
import negative from "../data/worst_key.json";

function keywords(emotion) {
  if (emotion ===0){
    return soso;
  }
  if (emotion ===-1){
    return negative;
  }
  return positive
}


const KeywordAnalysis = (emotion) => {

  const navigate = useNavigate();

  const onArrowSlideClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onOverviewContainerClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onProductOverviewContainer2Click = useCallback(() => {
    navigate("/detail-analysis");
  }, [navigate]);

  const onProductOverviewContainer3Click = useCallback(() => {
    navigate("/clustering");
  }, [navigate]);

  return (
    <div className={styles.keywordAnalysis}>
      <div className={styles.background}>
        <div className={styles.vectorParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="../rectangle-1127.svg"
          />
          <div className={styles.parent}>
            <div className={styles.div}>키워드 분석</div>
            <img
              className={styles.arrowSlideIcon}
              alt=""
              src="../arrow-slide2.svg"
              onClick={onArrowSlideClick}
            />
            <div className={styles.keywordex}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle8.svg"
              />
              <div className={styles.div1}>
                고객들은 해당 제품에 대해 다음과 같은 키워드를 언급하고 있어요
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../ellipse-1.svg"
                />
                <div className={styles.div2}>?</div>
              </div>
              <div className={styles.div3}>
                <span>키워드</span>
                <span className={styles.span}>
                  를 선택하면 세부 분석으로 이동해 구체적인 리뷰들을 확인할 수
                  있어요
                </span>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.rectangleIcon1} alt="" />
        <div className={styles.parent1}>
          <div className={styles.div51} >긍정적인 키워드</div>
          <div className={styles.div52}>부정적인 키워드</div>
          <div className={styles.div53}>개선의견 키워드</div>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
        </div>
        <img className={styles.backgroundChild} alt="" />
        <div className={styles.rectangleParent}>
          <div className={styles.frameInner} />
          <img className={styles.vectorIcon} alt="" />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <img className={styles.vectorIcon} alt="" />
        </div>
      </div>
      <div className={styles.bar}>
        <div className={styles.bar1}>
          <div className={styles.bar2} />
          <div className={styles.mainBarElements}>
            <div className={styles.logout}>
              <div className={styles.div54}>로그아웃</div>
              <img
                className={styles.iconoutlinelogin}
                alt=""
                src="../iconoutlinelogin2.svg"
              />
            </div>
            <div className={styles.setting}>
              <div className={styles.div54}>설정</div>
              <img
                className={styles.iconoutlinelogin}
                alt=""
                src="../iconlinearsetting2.svg"
              />
            </div>
            <div className={styles.product}>
              <div className={styles.div56}>제품 분석</div>
              <img
                className={styles.iconlinearchart}
                alt=""
                src="../iconlinearchart4.svg"
              />
            </div>
            <div className={styles.home} onClick={onHomeContainerClick}>
              <div className={styles.div54}>홈</div>
              <img
                className={styles.iconlinearspeedometer}
                alt=""
                src="../iconlinearspeedometer2.svg"
              />
            </div>
          </div>
          <div className={styles.logo}>
            <img className={styles.icongraph} alt="" src="../icongraph4.svg" />
            <div className={styles.div58}>세모리</div>
          </div>
        </div>
        <div className={styles.subBar}>
          <div className={styles.rectangle} />
          <div className={styles.imageParent}>
            <div className={styles.image} />
            <img
              className={styles.icon}
              alt=""
              src="../-20230214--917-1@2x.png"
            />
          </div>
          <img className={styles.subBarChild} alt="" src="../vector-1.svg" />
          <div className={styles.s23Ultra512}>
            셀렙샵 양모 리버시블 하프코트
          </div>
          <div className={styles.subOverview}>
            <div className={styles.productoverview}>
              <div
                className={styles.overview}
                onClick={onOverviewContainerClick}
              >
                <div className={styles.overview1}>제품 페이지</div>
                <img
                  className={styles.iconlinearcalendar}
                  alt=""
                  src="../iconlinearcalendar6.svg"
                />
              </div>
            </div>
            <div className={styles.productoverview1}>
              <div className={styles.overview2}>
                <div className={styles.overview3}>키워드 분석</div>
                <img
                  className={styles.iconlinearcalendar}
                  alt=""
                  src="../iconlinearchart1.svg"
                />
              </div>
            </div>
            <div
              className={styles.productoverview2}
              onClick={onProductOverviewContainer2Click}
            >
              <div className={styles.overview4}>
                <div className={styles.overview5}>세부 분석</div>
                <img
                  className={styles.iconlinearcalendar}
                  alt=""
                  src="../iconlinearcalendar6.svg"
                />
              </div>
            </div>
          </div>
          <div
            className={styles.productoverview3}
            onClick={onProductOverviewContainer3Click}
          >
            <div className={styles.overview4}>
              <div className={styles.overview5}>의견 분석</div>
              <img
                className={styles.iconlinearcalendar}
                alt=""
                src="../iconlinearcalendar6.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component4}>
        <Component4 props emotion />
      </div>
    </div>
  );
};

export default KeywordAnalysis;
