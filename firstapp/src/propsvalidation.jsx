import React from "react";
import PropTypes from "prop-types";

function Propvalidation(props) {
  return (
    <>
      <div>
        <h1>ReactJS Props validation example</h1>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Boolean</td>
              <td>{props.propBool ? "True" : "False"}</td>
              <td>{props.propBool ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>Function</td>
              <td>{props.propFunc(5)}</td>
              <td>{props.propFunc(5) ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>String</td>
              <td>{props.propString}</td>
              <td>{props.propString ? "True" : "False"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

Propvalidation.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
};

Propvalidation.defaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (x) {
    return x + 5;
  },
  propNumber: 1,
  propString: "a",
};

export default Propvalidation;
