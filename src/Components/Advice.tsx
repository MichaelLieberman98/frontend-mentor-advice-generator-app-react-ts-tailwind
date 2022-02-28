import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dice from '../images/icon-dice.svg';

//classnames module
import classNames from 'classnames';

//image imports
import DesktopDivider from '../images/pattern-divider-desktop.svg';
import MobileDivider from '../images/pattern-divider-mobile.svg';

const adviceEndpoint = "https://api.adviceslip.com/advice";

export default function Advice () {
  function retrieveAdvice (){
    axios.get(adviceEndpoint).then((response) => {
      console.log(response);
      console.log(response["data"]["slip"]);
      let advice = response["data"]["slip"];
      setAdviceNumber(advice["id"]);
      setAdvice(advice["advice"]);
    });
  }
  useEffect(() => {
    retrieveAdvice();
  });
  const [adviceNumber, setAdviceNumber] = useState(0);
  const [advice, setAdvice] = useState("");
  
  return (
    <div className={classNames(`m-auto text-center flex flex-col`)}>
      <div className={classNames(`w-[320px] h-[320px] bg-[#4E5D73] rounded-[10px] flex flex-col justify-around
        md:w-[370px] md:h-[240px]`)}>
        <h4 className={classNames(`text-[#52FFA8] mt-[20px]`)}>
          Advice #{adviceNumber}
        </h4>
        <h2 className={classNames(`mx-[30px]`)}>
          "{advice}"
        </h2>

        <div className={classNames(`mt-[0px] mx-[20px] pb-[50px]`)}>
          <img src={MobileDivider} className={classNames(`md:hidden`)}/>
          <img src={DesktopDivider} className={classNames(`w-full hidden md:block`)}/>
        </div>
      
      </div>

      <div className={classNames(`w-[60px] h-[60px] rounded-full bg-[#52FFA8] flex mx-auto relative bottom-[30px]`)}>
        <img src={Dice} className={classNames(`bg-[#000000] w-[25px] h-[25px] m-auto rounded-[6px]`)} onClick={retrieveAdvice}/>
      </div>
    </div>
  );
}