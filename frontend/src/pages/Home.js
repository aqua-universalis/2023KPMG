import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onProductContainerClick = useCallback(() => {
    navigate("/product-analysis");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.background}>
        <div className={styles.fixedBackground}>
          <img
            className={styles.fixedBackgroundChild}
            alt=""
            src="../rectangle-1127.svg"
          />
          <div className={styles.title}>
            <div className={styles.div}>
              수 만 개의 리뷰를 클릭 한 번에 요약해요
            </div>
            <div className={styles.div1}>고객들의 인사이트</div>
            <div className={styles.div2}>지금 바로 확인해볼까요?</div>
            <div className={styles.div3}>세상의 모든 리뷰를 모아서</div>
          </div>
          <div className={styles.item}>
            <div className={styles.item4}>
              <div className={styles.div4}>1,082명의 리뷰</div>
              <div className={styles.price}>
                <div className={styles.div5}>바로가기</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.item4Child} />
              <div className={styles.s23Ultra512}>
                제품명 1 사전예약 갤럭시 S23 Ultra 512
              </div>
            </div>
            <div className={styles.item3}>
              <div className={styles.div4}>1,082명의 리뷰</div>
              <div className={styles.price}>
                <div className={styles.div5}>바로가기</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.item4Child} />
              <div className={styles.s23Ultra512}>
                제품명 1 사전예약 갤럭시 S23 Ultra 512
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.div4}>1,082명의 리뷰</div>
              <div className={styles.price}>
                <div className={styles.div5}>바로가기</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.item4Child} />
              <div className={styles.s23Ultra512}>
                제품명 1 사전예약 갤럭시 S23 Ultra 512
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.div4}>1,082명의 리뷰</div>
              <div className={styles.price}>
                <div className={styles.div5}>바로가기</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.item4Child} />
              <div className={styles.s23Ultra512}>
                제품명 1 사전예약 갤럭시 S23 Ultra 512
              </div>
            </div>
            <div className={styles.itemtitle}>
              아래 제품의 인사이트들을 확인할 수 있어요
            </div>
          </div>
          <div className={styles.profiles}>
            <img
              className={styles.iconboldarrowDown}
              alt=""
              src="../iconboldarrowdown2.svg"
            />
            <div className={styles.name}>
              <div className={styles.div15}>홍길동</div>
              <div className={styles.div16}>탕탕마켓</div>
            </div>
            <div className={styles.avatar}>
              <img
                className={styles.image55Icon}
                alt=""
                src="../image-55@2x.png"
              />
            </div>
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="../mask-group@2x.png"
          />
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="../mask-group1@2x.png"
          />
          <img
            className={styles.maskGroupIcon2}
            alt=""
            src="../mask-group2@2x.png"
          />
          <img
            className={styles.maskGroupIcon3}
            alt=""
            src="../mask-group3@2x.png"
          />
        </div>
        <div className={styles.searchBar}>
          <div className={styles.div17}>어떤 제품을 검색하시나요?</div>
          <img className={styles.categoryIcon} alt="" src="../category.svg" />
          <img className={styles.searchIcon} alt="" src="../search-icon.svg" />
          <div className={styles.category1}>
            <img
              className={styles.arrowDownIcon}
              alt=""
              src="../arrow-down-icon.svg"
            />
            <div className={styles.div18}>카테고리</div>
          </div>
        </div>
        <div className={styles.div19}>
          <p className={styles.p}>검색창 넓이 수정</p>
          <p className={styles.p}>하단 멘트 수정</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p2}>완료</p>
        </div>
      </div>
      <div className={styles.bar}>
        <div className={styles.bar1} />
        <div className={styles.mainBarElements}>
          <div className={styles.logout}>
            <div className={styles.div20}>로그아웃</div>
            <img
              className={styles.iconoutlinelogin}
              alt=""
              src="../iconoutlinelogin5.svg"
            />
          </div>
          <button className={styles.setting}>
            <div className={styles.div21}>설정</div>
            <img
              className={styles.iconoutlinelogin}
              alt=""
              src="../iconlinearsetting5.svg"
            />
          </button>
          <div className={styles.product} onClick={onProductContainerClick}>
            <div className={styles.div20}>제품 분석</div>
            <img
              className={styles.iconoutlinelogin}
              alt=""
              src="../iconlinearchart10.svg"
            />
          </div>
          <div className={styles.home1}>
            <div className={styles.div23}>홈</div>
            <img
              className={styles.iconoutlinelogin}
              alt=""
              src="../iconlinearspeedometer5.svg"
            />
          </div>
        </div>
        <div className={styles.logo}>
          <img className={styles.icongraph} alt="" src="../icongraph8.svg" />
          <div className={styles.div24}>세모리</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
