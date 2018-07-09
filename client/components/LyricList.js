import React, { Component } from 'react';

class LyricList extends Component {
  renderLyricList(){
    const { lyricList } = this.props;

    const list = lyricList.map(({id, content}) => {
      return (
        <li key={id} className="collection-item">
          {content}
        </li>
      )
    })
    return list;
  }
  render(){
    console.log("render lyricList");

    return(
      <ul className="collection">
        {this.renderLyricList()}
      </ul>
    )
  }
}


export default LyricList;