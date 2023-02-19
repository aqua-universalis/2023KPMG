import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DetailAnalysis.module.css";
import search from "../data/search.json";

const CutLongSentence = (str) => {
  if (str.length > 130 ){
      return str.slice(0, 130).padEnd(130, " ") + "...";
  }

  return str
}


function DetailAnalysis(props = {"keyword":"배송"})  {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onProductOverviewContainer1Click = useCallback(() => {
    navigate("/keyword-analysis");
  }, [navigate]);

  const onProductOverviewContainer3Click = useCallback(() => {
    navigate("/clustering");
  }, [navigate]);

  return (
    <div className={styles.detailAnalysis}>
      <div className={styles.background}>
        <div className={styles.logo}>
          <img
            className={styles.logoChild}
            alt=""
            src="../rectangle-11271.svg"
          />
          <img className={styles.icongraph} alt="" />
          <div className={styles.div}>세모리</div>
        </div>
        <div className={styles.div1}>몰루?</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.bar1}>
          <div className={styles.bar2} />
          <div className={styles.mainBarElements}>
            <div className={styles.logout}>
              <div className={styles.div2}>로그아웃</div>
              <img
                className={styles.iconoutlinelogin}
                alt=""
                src="../iconoutlinelogin.svg"
              />
            </div>
            <div className={styles.setting}>
              <div className={styles.div2}>설정</div>
              <img
                className={styles.iconoutlinelogin}
                alt=""
                src="../iconlinearsetting.svg"
              />
            </div>
            <div className={styles.product}>
              <div className={styles.div4}>제품 분석</div>
              <img
                className={styles.iconlinearchart}
                alt=""
                src="../iconlinearchart6.svg"
              />
            </div>
            <div className={styles.home} onClick={onHomeContainerClick}>
              <div className={styles.div2}>홈</div>
              <img
                className={styles.iconlinearspeedometer}
                alt=""
                src="../iconlinearspeedometer3.svg"
              />
            </div>
          </div>
          <div className={styles.logo1}>
            <img className={styles.icongraph} alt="" src="../icongraph.svg" />
            <div className={styles.div}>세모리</div>
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
            <div className={styles.productoverview2}>
              <div className={styles.overview4}>
                <div className={styles.overview5}>세부 분석</div>
                <img
                  className={styles.iconlinearcalendar}
                  alt=""
                  src="../iconlinearchart1.svg"
                />
              </div>
            </div>
          </div>
          <div
            className={styles.productoverview3}
            onClick={onProductOverviewContainer3Click}
          >
            <div className={styles.overview}>
              <div className={styles.overview7}>의견 분석</div>
              <img
                className={styles.iconlinearcalendar}
                alt=""
                src="../iconlinearcalendar.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle58.svg"
        />
        <img className={styles.transparentRectangleIcon} alt="" />
        <div className={styles.component10}>
          <div className={styles.component5}>
            <div className={styles.divider} />
            <div className={styles.frame}>
              <div className={styles.frameParent}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="../image@2x.png"
                  />
                </div>
                <div className={styles.div7}>1</div>
                <div className={styles.div8}>익명의 리뷰</div>
                <div className={styles.div9}>
                  <span>{CutLongSentence(search["sentences"][0])}</span>
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../group-6.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.component6}>
            <div className={styles.divider} />
            <div className={styles.frame}>
              <div className={styles.frameParent}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="../image@2x.png"
                  />
                </div>
                <div className={styles.div7}>2</div>
                <div className={styles.div8}>익명의 리뷰</div>
                <div className={styles.div9}>
                  <span>{CutLongSentence(search["sentences"][1])}</span>
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../group-61.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.component7}>
            <div className={styles.divider} />
            <div className={styles.frame}>
              <div className={styles.frameParent}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="../image@2x.png"
                  />
                </div>
                <div className={styles.div7}>3</div>
                <div className={styles.div8}>익명의 리뷰</div>
                <div className={styles.div9}>
                  <span>{CutLongSentence(search["sentences"][2])}</span>
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../group-62.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.component8}>
            <div className={styles.divider} />
            <div className={styles.frame}>
              <div className={styles.frameParent}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="../image@2x.png"
                  />
                </div>
                <div className={styles.div7}>4</div>
                <div className={styles.div8}>익명의 리뷰</div>
                <div className={styles.div9}>
                <span>{CutLongSentence(search["sentences"][3])}</span>
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../group-63.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.component9}>
            <div className={styles.divider} />
            <div className={styles.frame}>
              <div className={styles.frameParent}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="../image4@2x.png"
                  />
                </div>
                <div className={styles.div7}>5</div>
                <div className={styles.div8}>익명의 리뷰</div>
                <div className={styles.div21}>
                  <span className={styles.span4}>배송</span>
                  <span className={styles.span5}>
                    이 생각보다 오래걸려서 조금 실망입니다..
                  </span>
                </div>
                <img className={styles.frameChild} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div22}>{props.keyword}</div>
        <div className={styles.div23}>
          을 기반으로 한 리뷰 {search["num_pos"]+search["num_neg"]}건을 모아봤어요
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div}>전체</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>긍정적인 리뷰</div>
        </div>
        <div className={styles.wrapper1}>
          <div className={styles.div}>부정적인 리뷰</div>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <img className={styles.arrowSlideIcon} alt="" src="../arrow-slide3.svg" />
      <div className={styles.div27}>세부 분석</div>
      <div className={styles.parent}>
        <div className={styles.div28}>{props.keyword}</div>
        <div className={styles.div29}>
          이때, 긍정적인 리뷰는 {search["num_pos"]}건, 부정적인 리뷰는 {search["num_neg"]}건이에요
        </div>
        <div className={styles.div30}>전체 리뷰 중</div>
        <div className={styles.div31}>{`키워드의 비중은 `}</div>
        <div className={styles.div32}>에요</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.div33}>{Math.floor(search["incl_rate"]*1000)/10}%</div>
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.div34}></div>
        <img className={styles.searchIcon} alt="" src="../search-icon.svg" />
      </div>
    </div>
  );
};

DetailAnalysis.defaultProps = {
  keyword: "배송"
}

export default DetailAnalysis;
