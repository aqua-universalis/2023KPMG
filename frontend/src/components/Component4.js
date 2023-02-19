import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component4.module.css";
import positive from "../data/best_key.json";
import soso from "../data/soso_key.json";
import negative from "../data/worst_key.json";
import React, { useState } from 'react';

function keywords(emotion) {
  if (emotion ===0){
    return soso;
  }
  if (emotion ===-1){
    return negative;
  }
  return positive
}

const Component4 = (props,emotion) => {
  const navigate = useNavigate();
  const [colorA, setColorA] = useState('#441199');
  const [colorB, setColorB] = useState('grey');
  const [colorC, setColorC] = useState('grey');
  const useByebye = (e) => {useCallback(() => {
    props[keywords] = e;
    navigate("/product-page");
  }, [navigate]);
};

  const [e, setE] = useState(emotion);
  return (
    <div className={styles.component4}>
      <form className={styles.rectangleParent}>
        <div className={styles.divider} />
        <div className={styles.frameWrapper}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle47.svg"
              />
              <div className={styles.div}>2</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[1]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div2}>{keywords(e)[Object.keys( keywords(e))[2]]}%</div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle48.svg"
              />
              <div className={styles.div}>7</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[6]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div5}>{keywords(e)[Object.keys( keywords(e))[0]]}%</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle49.svg"
              />
              <div className={styles.div}>3</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[2]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div2}>{keywords(e)[Object.keys( keywords(e))[2]]}%</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle50.svg"
              />
              <div className={styles.div}>8</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[7]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div5}>{keywords(e)[Object.keys( keywords(e))[7]]}%</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle51.svg"
              />
              <div className={styles.div}>4</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[3]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div14}>{keywords(e)[Object.keys( keywords(e))[3]]}%</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper3}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle52.svg"
              />
              <div className={styles.div}>9</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[8]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div17}>{keywords(e)[Object.keys( keywords(e))[8]]}%</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper4}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle53.svg"
              />
              <div className={styles.div}>5</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[4]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div20}>{keywords(e)[Object.keys( keywords(e))[4]]}%</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper5}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle54.svg"
              />
              <div className={styles.div}>10</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[9]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div17}>{keywords(e)[Object.keys( keywords(e))[9]]}%</div>
            </div>
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div24}>키워드</div>
          <div className={styles.div25}>순위</div>
          <div className={styles.div26}>언급지수</div>
          <div className={styles.ellipseParent}>
            <img className={styles.groupChild} alt="" src="../ellipse-11.svg" />
            <div className={styles.div27}>?</div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div24}>키워드</div>
          <div className={styles.div25}>순위</div>
          <div className={styles.div26}>언급지수</div>
          <div className={styles.ellipseParent}>
            <img className={styles.groupChild} alt="" src="../ellipse-11.svg" />
            <div className={styles.div27}>?</div>
          </div>
        </div>
        <div className={styles.keywordList}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle55.svg"
              />
              <div className={styles.div}>1</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[0]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div34}>{keywords(e)[Object.keys( keywords(e))[0]]}%</div>
            </div>
            <div className={styles.frame3variant3}>
              <div className={styles.component2Parent}>
                <div className={styles.component2}>
                  <img
                    className={styles.rectangleIcon1}
                    alt=""
                    src="../rectangle56.svg"
                  />
                  <div className={styles.div}>2</div>
                  <div className={styles.div1}>{Object.keys( keywords(e))[1]}</div>
                </div>
                <div className={styles.component1}>
                  <div className={styles.component1Child} />
                  <div className={styles.div2}>{keywords(e)[Object.keys( keywords(e))[1]]}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper6}>
          <div className={styles.component2Parent}>
            <div className={styles.component2}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="../rectangle57.svg"
              />
              <div className={styles.div}>6</div>
              <div className={styles.div1}>{Object.keys( keywords(e))[5]}</div>
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.div40}>{keywords(e)[Object.keys( keywords(e))[5]]}%</div>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.div41} style = {{color:colorA}} onClick = {()=>{setE(1); setColorA('#441199'); setColorB('grey'); setColorB('grey');console.log(e);}}>긍정적인 키워드</div>
      <div className={styles.div42} style = {{color:colorB}} onClick = {()=>{setE(-1); console.log(e);setColorB('#441199'); setColorA('grey'); setColorC('grey');console.log(e);}}>부정적인 키워드</div>
      <div className={styles.div43} style = {{color:colorC}} onClick = {()=>{setE(0); console.log(e);setColorC('#441199'); setColorB('grey'); setColorA('grey');console.log(e);}}>개선의견 키워드</div>
      <div className={styles.component4Child} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="../vector-2.svg" />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild} />
        <img className={styles.vectorIcon} alt="" src="../vector-21.svg" />
      </div>
    </div>
  );
};

export default Component4;
