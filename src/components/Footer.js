import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright
} from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <div>
      Expense Tracker
      <FontAwesomeIcon icon={faCopyright} className="ms-2" />.All Rights Reserved.
    </div>
  );
}

export default Footer