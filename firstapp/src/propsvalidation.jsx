import PropTypes from "prop-types";

import React from "react";
function Propvalidation(props) {
  return (
    <>
      <div>
        <h1></h1>
        <tr>
          <td>Array</td>
          <td>{props.propArray}</td>
          <td>{props.propArray ? "true" : "FAlse"}</td>
        </tr>
      </div>
    </>
  );
}

Propvalidation.prototype = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.any,
};

Propvalidation.deafaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (x) {
    return x + 5;
  },
  propNumber: 1,
  propString: 7,
};
