import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Clustering.module.css";

import cluster from "../data/cluster_top20.json";
import minor from "../data/cluster_only.json"
import PickSentence from "../util.js"


const Clustering = () => {
  const navigate = useNavigate();

  const onButtonsContainerClick = useCallback(() => {
    navigate("/common-idea");
  }, [navigate]);

  const onArrowSlideClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onProductOverviewContainerClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onProductOverviewContainer1Click = useCallback(() => {
    navigate("/keyword-analysis");
  }, [navigate]);

  const onProductOverviewContainer2Click = useCallback(() => {
    navigate("/detail-analysis");
  }, [navigate]);

  return (
    <div className={styles.clustering}>
      <div className={styles.clusterBody}>
        <div className={styles.divider} />
        <div className={styles.rectangleParent}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle7.svg"
          />
          <div className={styles.buttons} onClick={onButtonsContainerClick}>
            <div className={styles.buttonText}>자세히 보러가기</div>
          </div>
          <div className={styles.div}>대표 문장</div>
          <div className={styles.div1}>유사 문장</div>
          <div className={styles.parent}>
            <div className={styles.div2}>{PickSentence(cluster.cluster_text[0])}</div>
            <img className={styles.groupChild} alt="" src="../vector-3.svg" />
            <div className={styles.groupItem} />
            <div className={styles.div3}>{cluster.cluster_text[0].length + "건"}</div>
          </div>
          <div className={styles.group}>
            <div className={styles.div2}>{PickSentence(cluster.cluster_text[1])}</div>
            <img className={styles.groupChild} alt="" src="../vector-3.svg" />
            <div className={styles.groupItem} />
            <div className={styles.div5}>{cluster.cluster_text[1].length + "건"}</div>
          </div>
          <div className={styles.container}>
            <div className={styles.div2}>{PickSentence(cluster.cluster_text[2])}</div>
            <img className={styles.groupChild} alt="" src="../vector-3.svg" />
            <div className={styles.groupItem} />
            <div className={styles.div5}>70건</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.div2}>{PickSentence(cluster.cluster_text[3])}.</div>
            <img className={styles.groupChild} alt="" src="../vector-3.svg" />
            <div className={styles.groupItem} />
            <div className={styles.div5}>{cluster.cluster_text[2].length + "건"}</div>
          </div>
          <div className={styles.div10}>공통 의견</div>
        </div>
        <div className={styles.logo}>
          <img className={styles.icongraph} alt="" src="../icongraph.svg" />
          <div className={styles.div11}>세모리</div>
        </div>
        <div className={styles.keywordex}>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle8.svg"
          />
          <div className={styles.div12}>
            고객들의 리뷰 중 비슷한 내용들을 하나의 공통 의견로 모아봤어요
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
            <div className={styles.div13}>?</div>
          </div>
          <div className={styles.div14}>
            <span>{`공통 의견에 해당되지 않는 내용들은 `}</span>
            <span className={styles.span}>개별 의견 항목</span>
            <span>에서 확인할 수 있어요</span>
          </div>
        </div>
        <img
          className={styles.arrowSlideIcon}
          alt=""
          src="../arrow-slide1.svg"
          onClick={onArrowSlideClick}
        />
        <div className={styles.div15}>의견 분석</div>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.rectangleIcon2}
            alt=""
            src="../rectangle9.svg"
          />
          <div className={styles.buttons1}>
            <div className={styles.buttonText}>자세히 보러가기</div>
          </div>
          <div className={styles.div16}>개별 의견</div>
          <div className={styles.ellipseGroup}>
            <img
              className={styles.groupChild4}
              alt=""
              src="../ellipse-11.svg"
            />
            <div className={styles.div17}>?</div>
          </div>
          <div className={styles.parent1}>
            <div className={styles.div18}>
              {minor["sentences"][0]}
            </div>
            <div className={styles.groupChild5} />
          </div>
          <div className={styles.parent2}>
            <div className={styles.div18}>
            {minor["sentences"][1]}
            </div>
            <div className={styles.groupChild5} />
          </div>
          <div className={styles.parent3}>
            <div className={styles.div18}>
            {minor["sentences"][2]}
            </div>
            <div className={styles.groupChild5} />
          </div>
          <div className={styles.parent4}>
            <div className={styles.div18}>
            {minor["sentences"][3]}
            </div>
            <div className={styles.groupChild5} />
          </div>
          <div className={styles.parent5}>
            <div className={styles.div18}>
            {minor["sentences"][4]}
            </div>
            <div className={styles.groupChild5} />
          </div>
        </div>
      </div>
      <div className={styles.bar}>
        <div className={styles.bar1}>
          <div className={styles.bar2} />
          <div className={styles.mainBarElements}>
            <div className={styles.logout}>
              <div className={styles.div23}>로그아웃</div>
              <img
                className={styles.iconoutlinelogin}
                alt=""
                src="../iconoutlinelogin.svg"
              />
            </div>
            <div className={styles.setting}>
              <div className={styles.div23}>설정</div>
              <img
                className={styles.iconoutlinelogin}
                alt=""
                src="../iconlinearsetting.svg"
              />
            </div>
            <div className={styles.product}>
              <div className={styles.div25}>제품 분석</div>
              <img
                className={styles.iconlinearchart}
                alt=""
                src="../iconlinearchart2.svg"
              />
            </div>
            <div className={styles.home} onClick={onHomeContainerClick}>
              <div className={styles.div23}>홈</div>
              <img
                className={styles.iconlinearspeedometer}
                alt=""
                src="../iconlinearspeedometer1.svg"
              />
            </div>
          </div>
          <div className={styles.logo1}>
            <img className={styles.icongraph} alt="" src="../icongraph.svg" />
            <div className={styles.div11}>세모리</div>
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
            <div
              className={styles.productoverview}
              onClick={onProductOverviewContainerClick}
            >
              <div className={styles.overview}>
                <div className={styles.overview1}>제품 페이지</div>
                <img
                  className={styles.iconlinearcalendar}
                  alt=""
                  src="../iconlinearcalendar.svg"
                />
              </div>
            </div>
            <div
              className={styles.productoverview1}
              onClick={onProductOverviewContainer1Click}
            >
              <div className={styles.overview}>
                <div className={styles.overview1}>키워드 분석</div>
                <img
                  className={styles.iconlinearcalendar}
                  alt=""
                  src="../iconlinearcalendar.svg"
                />
              </div>
            </div>
            <div
              className={styles.productoverview2}
              onClick={onProductOverviewContainer2Click}
            >
              <div className={styles.overview}>
                <div className={styles.overview5}>세부 분석</div>
                <img
                  className={styles.iconlinearcalendar}
                  alt=""
                  src="../iconlinearcalendar.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.productoverview3}>
            <div className={styles.overview6}>
              <div className={styles.overview7}>의견 분석</div>
              <img
                className={styles.iconlinearcalendar}
                alt=""
                src="../iconlinearchart1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clustering;
