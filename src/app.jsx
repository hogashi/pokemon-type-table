import React, { useState, useCallback } from "react";

/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Home function that is reflected across the site
export default function Home() {  
  const types = ['ノ', '炎', '水', '電', '草', '氷', '格', '毒', '地', '飛', '超', '虫', '岩', '霊', '竜', '悪', '鋼', '妖'];
  const aishos = [
    // ノ 炎 水 電 草 氷 格 毒 地 飛 超 虫 岩 霊 竜 悪 鋼 妖
    [" "," "," "," "," "," "," "," "," "," "," "," ","▲","×"," "," ","▲"," "],
    [" ","▲","▲"," ","●","●"," "," "," "," "," ","●","▲"," ","▲"," ","●"," "],
    [" ","●","▲"," ","▲"," "," "," ","●"," "," "," ","●"," ","▲"," "," "," "],
    [" "," ","●","▲","▲"," "," "," ","×","●"," "," "," "," ","▲"," "," "," "],
    [" ","▲","●"," ","▲"," "," ","▲","●","▲"," ","▲","●"," ","▲"," ","▲"," "],
    [" ","▲","▲"," ","●","▲"," "," ","●","●"," "," "," "," ","●"," ","▲"," "],
    ["●"," "," "," "," ","●"," ","▲"," ","▲","▲","▲","●","×"," ","●","●","▲"],
    [" "," "," "," ","●"," "," ","▲","▲"," "," "," ","▲","▲"," "," ","×","●"],
    [" ","●"," ","●","▲"," "," ","●"," ","×"," ","▲","●"," "," "," ","●"," "],
    [" "," "," ","▲","●"," ","●"," "," "," "," ","●","▲"," "," "," ","▲"," "],
    [" "," "," "," "," "," ","●","●"," "," ","▲"," "," "," "," ","×","▲"," "],
    [" ","▲"," "," ","●"," ","▲","▲"," ","▲","●"," "," ","▲"," ","●","▲","▲"],
    [" ","●"," "," "," ","●","▲"," ","▲","●"," ","●"," "," "," "," ","▲"," "],
    ["×"," "," "," "," "," "," "," "," "," ","●"," "," ","●"," ","▲"," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," ","●"," ","▲","×"],
    [" "," "," "," "," "," ","▲"," "," "," ","●"," "," ","●"," ","▲"," ","▲"],
    [" ","▲","▲","▲"," ","●"," "," "," "," "," "," ","●"," "," "," ","▲","●"],
    [" ","▲"," "," "," "," ","●","▲"," "," "," "," "," "," ","●","●","▲"," "]
  ];
  const aishoToNumber = {
    "×": 0,
    "▲": 0.5,
    " ": 1,
    "●": 2,
  };
  
  const [clickedAtts, setClickedAtts] = useState([]);
  const [clickedDefs, setClickedDefs] = useState([]);
  
  const onClickAtt = useCallback((i) => {
    const newClickedAtts = [...clickedAtts];
    newClickedAtts[i] = !newClickedAtts[i];
    setClickedAtts(newClickedAtts);
  }, [clickedAtts]);
  const onClickDef = useCallback((i) => {
    const newClickedDefs = [...clickedDefs];
    newClickedDefs[i] = !newClickedDefs[i];
    setClickedDefs(newClickedDefs);
  }, [clickedDefs]);
  
  const onFlipButtonClick = useCallback(() => {
    setClickedAtts([...clickedDefs]);
    setClickedDefs([...clickedAtts]);
  }, [clickedAtts, clickedDefs]);
  const onResetClick = useCallback(() => {
    setClickedAtts([]);
    setClickedDefs([]);
  }, [clickedAtts, clickedDefs]);
  
  return (
    <div>
      <p>クリックでハイライト</p>
      <p>
        <button onClick={onFlipButtonClick}>縦横の選択を入れ替える</button>
      </p>
      <div class="poke-title">防御側のポケモンのタイプ</div>
      <div class="container2">
        <div class="waza-title">使用するわざのタイプ</div>
        <table>
          <tbody>
            <tr>
              <th></th>
              {
                types.map((t, i) => (
                  <th
                    class={`type-def-${i} ${clickedDefs[i] ? 'clicked' : ''}`}
                    onClick={() => onClickDef(i)}
                  >{t}</th>
                ))
              }
            </tr>
            {
              types.map((t, i) => (
                <tr>
                  <th
                    class={`type-att-${i} ${clickedAtts[i] ? 'clicked' : ''}`}
                    onClick={() => onClickAtt(i)}
                  >
                    {t}
                  </th>
                  {
                    aishos[i].map((a, j) => (
                      <td
                        class={[
                          `aisho-att-${i}`,
                          `aisho-def-${j}`,
                          clickedAtts[i] || clickedDefs[j] ? 'clicked' : '',
                        ].join(' ')}
                        data-aisho={aishoToNumber[a]}
                        onClick={() => {
                          onClickAtt(i);
                          onClickDef(j);
                        }}
                      >
                        {a}
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
      <p><button onClick={onResetClick}>選択を全部解除</button></p>
      <p>
        参考
        <ul>
          <li><a href="https://www.pokemon.co.jp/ex/sun_moon/fight/161215_01.html">https://www.pokemon.co.jp/ex/sun_moon/fight/161215_01.html</a></li>
          <li><a href="https://yakkun.com/data/aisyou.htm">https://yakkun.com/data/aisyou.htm</a></li>
        </ul>
      </p>
    </div>
  );
}
