import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";
function Welcome() {
  return (
    <div>
      <h2 className="welcome">Welcome,</h2>

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
