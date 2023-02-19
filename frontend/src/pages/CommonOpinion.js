import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CommonOpinion.module.css";

const CommonOpinion = () => {
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

  return (
    <div className={styles.commonOpinion}>
      <div className={styles.commonIdea}>
        <div className={styles.rectangleParent}>
          <img className={styles.rectangleIcon} alt="" src="../rectangle.svg" />
          <div className={styles.div}>기대 한대로 예뻐요</div>
          <div className={styles.parent}>
            <div className={styles.div1}>너무 만족합니다.</div>
            <div className={styles.div2}>너무 예쁜거에요!</div>
            <div className={styles.div3}>좋았어요..</div>
            <div className={styles.div4}>너무 만족합니다.</div>
          </div>
          <div className={styles.div5} />
          <div className={styles.div6}>
            <div className={styles.div7}>다음과 유사한 문장이</div>
            <div className={styles.div8}>104</div>
            <div className={styles.div9}>건 있어요</div>
          </div>
          <div className={styles.price}>
            <div className={styles.div10}>보러가기</div>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle1.svg"
          />
          <div className={styles.div}>겨울에 잘입어질거 같아요</div>
          <div className={styles.parent}>
            <div className={styles.div1}>
              따뜻하게 잘 입을거란 확신이 듭니다
            </div>
            <div className={styles.div2}>
              겨울에 휘두루마뚜르 잘 입을 것 같아여
            </div>
            <div className={styles.div3}>좋았어요..</div>
            <div className={styles.div4}>너무 만족합니다.</div>
          </div>
          <div className={styles.div5} />
          <div className={styles.div6}>
            <div className={styles.div7}>다음과 유사한 문장이</div>
            <div className={styles.div19}>70</div>
            <div className={styles.div9}>건 있어요</div>
          </div>
          <div className={styles.price}>
            <div className={styles.div10}>보러가기</div>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.rectangleIcon2}
            alt=""
            src="../rectangle2.svg"
          />
          <div className={styles.div}>겨울에 잘 입어질 것 같아요</div>
          <div className={styles.parent}>
            <div className={styles.div1}>너무 만족합니다.</div>
            <div className={styles.div2}>너무 예쁜거에요!</div>
            <div className={styles.div3}>좋았어요..</div>
            <div className={styles.div4}>너무 만족합니다.</div>
          </div>
          <div className={styles.div5} />
          <div className={styles.div6}>
            <div className={styles.div7}>다음과 유사한 문장이</div>
            <div className={styles.div8}>104</div>
            <div className={styles.div9}>건 있어요</div>
          </div>
          <div className={styles.price}>
            <div className={styles.div10}>보러가기</div>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle3.svg"
          />
          <div className={styles.div}>디자인이 예뻐요</div>
          <div className={styles.parent}>
            <div className={styles.div1}>암튼 예쁘네요</div>
            <div className={styles.div2}>디자인이 심플하니 예뻐요</div>
            <div className={styles.div3}>깔끔한 디나인에</div>
            <div className={styles.div4}>너무 만족합니다.</div>
          </div>
          <div className={styles.div5} />
          <div className={styles.div6}>
            <div className={styles.div7}>다음과 유사한 문장이</div>
            <div className={styles.div41}>72</div>
            <div className={styles.div9}>건 있어요</div>
          </div>
          <div className={styles.price}>
            <div className={styles.div10}>보러가기</div>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.div44}>
          <div className={styles.div45}>개수 순</div>
          <img
            className={styles.iconboldarrowDown}
            alt=""
            src="../iconboldarrowdown.svg"
          />
        </div>
        <div className={styles.logo}>
          <img className={styles.icongraph} alt="" src="../icongraph.svg" />
          <div className={styles.div46}>세모리</div>
        </div>
        <img
          className={styles.arrowSlideIcon}
          alt=""
          src="../arrow-slide.svg"
        />
        <div className={styles.div47}>공통 의견</div>
        <div className={styles.bar}>
          <div className={styles.bar1}>
            <div className={styles.bar2} />
            <div className={styles.mainBarElements}>
              <div className={styles.logout}>
                <div className={styles.div48}>로그아웃</div>
                <img
                  className={styles.iconoutlinelogin}
                  alt=""
                  src="../iconoutlinelogin.svg"
                />
              </div>
              <div className={styles.setting}>
                <div className={styles.div48}>설정</div>
                <img
                  className={styles.iconoutlinelogin}
                  alt=""
                  src="../iconlinearsetting.svg"
                />
              </div>
              <div className={styles.product}>
                <div className={styles.div50}>제품 분석</div>
                <img
                  className={styles.iconlinearchart}
                  alt=""
                  src="../iconlinearchart.svg"
                />
              </div>
              <div className={styles.home} onClick={onHomeContainerClick}>
                <div className={styles.div48}>홈</div>
                <img
                  className={styles.iconlinearspeedometer}
                  alt=""
                  src="../iconlinearspeedometer.svg"
                />
              </div>
            </div>
            <div className={styles.logo1}>
              <img className={styles.icongraph} alt="" src="../icongraph.svg" />
              <div className={styles.div46}>세모리</div>
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
    </div>
  );
};

export default CommonOpinion;
