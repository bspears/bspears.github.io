import React from "react";
import {
    Link
  } from "react-router-dom";

  import "./styles.scss"

  function ListRow(props) {
      const { title, mag, time, id } = props;

      return (
          <li className="list-row">
              <div className="column title"><Link to={`/feature?id=${id}`}>{title}</Link></div>
              <div className="column mag">{mag}</div>
              <div className="column time">{time}</div>
          </li>
      );
  }

export default ListRow;