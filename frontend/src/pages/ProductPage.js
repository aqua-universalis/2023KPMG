import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductPage.module.css";
import data from "../data/best_key.json";
import cluster from "../data/cluster_top20.json";
import PickSentence from "../util.js"
import minor from "../data/cluster_only.json"





const ProductPage = () => {
  const navigate = useNavigate();

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

  const onProductOverviewContainer3Click = useCallback(() => {
    navigate("/clustering");
  }, [navigate]);

  return (
    <div className={styles.productPage}>
      <div className={styles.background}>
        <img 
          className={styles.backgroundChild}
          alt=""
          src="../rectangle-1127.svg"
        />
        <div className={styles.logo}>
          <img className={styles.icongraph} alt="" src="../icongraph4.svg" />
          <div className={styles.div}>세모리</div>
        </div>
        <div className={styles.div1}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle59.svg"
          />
          <div className={styles.div2}>
            <div className={styles.div3}>전체 평점</div>
            <div className={styles.twitterroundedSquaretrue}>
              <div className={styles.twitterroundedSquaretrueChild} />
              <img
                className={styles.iconlinearstatusUp}
                alt=""
                src="../iconlinearstatusup.svg"
              />
            </div>
            <div className={styles.parent}>
              <div className={styles.div4}>4.2</div>
              <div className={styles.div5}>/ 5.0 (점)</div>
            </div>
          </div>
          <div className={styles.div6}>
            <div className={styles.div3}>신규 리뷰</div>
            <img
              className={styles.twitterroundedSquaretrue}
              alt=""
              src="../twitterrounded-squaretrue.svg"
            />
            <div className={styles.group}>
              <div className={styles.div4}>{`38 `}</div>
              <div className={styles.div9}>/ 1,082 (개)</div>
            </div>
          </div>
          <div className={styles.div10}>
            <div className={styles.div11}>감성 평가</div>
            <img
              className={styles.twitterroundedSquaretrue}
              alt=""
              src="../twitterrounded-squaretrue1.svg"
            />
            <div className={styles.div12}>긍정 92</div>
            <div className={styles.div13}>%</div>
          </div>
          <div className={styles.div14}>제품 리뷰 정보 요약</div>
          <div className={styles.divider} />
          <div className={styles.divider1} />
        </div>
        <div className={styles.div15}>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle60.svg"
          />
          <div className={styles.div16}>공통/개별 의견 분석</div>
          <div className={styles.div17}>대표 문장</div>
          <div className={styles.div18}>유사 문장</div>
          <div className={styles.container}>
            <div className={styles.div19}>{PickSentence(cluster.cluster_text[0])}</div>
            <img className={styles.groupChild} alt="" src="../vector-3.svg" />
            <div className={styles.groupItem} />
            <div className={styles.div20}> {cluster.cluster_text[0].length + "건"}</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.div19}>{PickSentence(cluster.cluster_text[1])}</div>
            <img className={styles.groupChild} alt="" src="../vector-3.svg" />
            <div className={styles.groupItem} />
            <div className={styles.div22}>{cluster.cluster_text[1].length + "건"}</div>
          </div>
          <div className={styles.parent1}>
            <div className={styles.div19}>{PickSentence(cluster.cluster_text[2])}</div>
            <img className={styles.groupChild} alt="" src="../vector-3.svg" />
            <div className={styles.groupItem} />
            <div className={styles.div22}>{cluster.cluster_text[2].length + "건"}</div>
          </div>
          <div className={styles.divider2} />
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
            <div className={styles.div25}>
            {minor["sentences"][0].slice(0, 48).padEnd(48, " ") + "..."}
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div26}>
              {minor["sentences"][1].slice(0, 48).padEnd(48, " ") + "..."}
              </div>
            </div>
          </div>
          <div className={styles.div27}>자세히 보기</div>
        </div>
        <div className={styles.div28}>
          <div className={styles.div29}>키워드 분석</div>
          <div className={styles.searchBar}>
            <div className={styles.div30}>
              궁금한 키워드가 있다면? 빠른 키워드 검색
            </div>
            <img
              className={styles.searchIcon}
              alt=""
              src="../search-icon.svg"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.rectangleIcon2}
              alt=""
              src="../rectangle61.svg"
            />
            <div className={styles.div31}>
              <div className={styles.inner}>
                <div className={styles.component2Parent}>
                  <div className={styles.component2}>
                    <img
                      className={styles.rectangleIcon3}
                      alt=""
                      src="../rectangle62.svg"
                    />
                    <div className={styles.div32}>2</div>
                    <div className={styles.div33}>{ Object.keys(data)[1] }</div>
                  </div>
                  <div className={styles.component1}>
                    <div className={styles.component1Child} />
                    <div className={styles.div34}>{ data[Object.keys(data)[1]] + "%" }</div>
                  </div>
                </div>
              </div>
              <div className={styles.child}>
                <div className={styles.component2Parent}>
                  <div className={styles.component2}>
                    <img
                      className={styles.rectangleIcon3}
                      alt=""
                      src="../rectangle63.svg"
                    />
                    <div className={styles.div32}>3</div>
                    <div className={styles.div33}>{ Object.keys(data)[2] }</div>
                  </div>
                  <div className={styles.component1}>
                    <div className={styles.component1Child} />
                    <div className={styles.div37}>{ data[Object.keys(data)[2]] + "%" }</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.div38}>키워드</div>
                <div className={styles.div39}>순위</div>
                <div className={styles.div40}>언급지수</div>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="../ellipse-112.svg"
                  />
                  <div className={styles.div41}>?</div>
                </div>
              </div>
              <div className={styles.component2Container}>
                <div className={styles.component2}>
                  <img
                    className={styles.rectangleIcon3}
                    alt=""
                    src="../rectangle64.svg"
                  />
                  <div className={styles.div32}>1</div>
                  <div className={styles.div33}>{ Object.keys(data)[0] }</div>
                </div>
                <div className={styles.component1}>
                  <div className={styles.component1Child} />
                  <div className={styles.div44}>{ data[Object.keys(data)[0]] + "%" }</div>
                </div>
              </div>
            </div>
            <div className={styles.parent2}>
              <div className={styles.div45}>긍정적인 키워드</div>
              <img
                className={styles.iconboldarrowDown}
                alt=""
                src="../iconboldarrowdown1.svg"
              />
            </div>
          </div>
          <div className={styles.div46}>자세히 보기</div>
        </div>
      </div>
      <div className={styles.bar}>
        <div className={styles.bar1}>
          <div className={styles.bar2} />
          <div className={styles.mainBarElements}>
            <div className={styles.logout}>
              <div className={styles.div47}>로그아웃</div>
              <img
                className={styles.iconoutlinelogin}
                alt=""
                src="../iconoutlinelogin2.svg"
              />
            </div>
            <div className={styles.setting}>
              <div className={styles.div47}>설정</div>
              <img
                className={styles.iconoutlinelogin}
                alt=""
                src="../iconlinearsetting2.svg"
              />
            </div>
            <div className={styles.product}>
              <div className={styles.div49}>제품 분석</div>
              <img
                className={styles.iconlinearchart}
                alt=""
                src="../iconlinearchart8.svg"
              />
            </div>
            <div className={styles.home} onClick={onHomeContainerClick}>
              <div className={styles.div47}>홈</div>
              <img
                className={styles.iconlinearspeedometer}
                alt=""
                src="../iconlinearspeedometer4.svg"
              />
            </div>
          </div>
          <div className={styles.logo1}>
            <img className={styles.icongraph} alt="" src="../icongraph4.svg" />
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
            <div
              className={styles.productoverview}
              onClick={onProductOverviewContainerClick}
            >
              <div className={styles.overview}>
                <div className={styles.overview1}>제품 페이지</div>
                <img
                  className={styles.iconlinearcalendar}
                  alt=""
                  src="../iconlinearchart1.svg"
                />
              </div>
            </div>
            <div
              className={styles.productoverview1}
              onClick={onProductOverviewContainer1Click}
            >
              <div className={styles.overview2}>
                <div className={styles.overview3}>키워드 분석</div>
                <img
                  className={styles.iconlinearcalendar}
                  alt=""
                  src="../iconlinearcalendar6.svg"
                />
              </div>
            </div>
            <div
              className={styles.productoverview2}
              onClick={onProductOverviewContainer2Click}
            >
              <div className={styles.overview2}>
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
            <div className={styles.overview2}>
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
    </div>
  );
};

export default ProductPage;
