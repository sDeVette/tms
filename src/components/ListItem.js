import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../styles/ListItem.scss";

class ListItem extends Component {
  render() {
    const {text, to, id} = this.props;
    return (
      <div className="item">
        {id ? id + ": " : null}
        <Link to={to}>
          {text}
        </Link>
      </div>
    );
  }
}

export default ListItem;
