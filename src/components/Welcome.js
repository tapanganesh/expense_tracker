import React,{useEffect,useRef} from 'react';
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import lottie from 'lottie-web'
function Welcome() {
 let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
   (state) => state.user
 );
  const container=useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container:container.current,
      render:'svg',
      loop:true,
      autoplay:true,
      animationData:require('../animations/93344-money-investment.json')
    },)
  })
  return (
    <div>
      <h2 className="welcome">Welcome,{userObj.username}</h2>
      <div className="container w-25" ref={container}></div>
      <p className="note lead text-secondary container">
        <FontAwesomeIcon icon={faLightbulb} className="me-1 text-warning" />{" "}
        <b>Note :</b> A budget is a living document that should evolve over time
        to suit your needs and goals. Recognizing that you are overspending or
        underspending consistently in one spending category in your budget can
        help you determine whether you need to make cuts or increases in that
        category for the next month's budget.
      </p>
    </div>
  );
}

export default Welcome;
