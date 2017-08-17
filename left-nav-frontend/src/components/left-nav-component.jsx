import React, { Component } from 'react';

class LeftNav extends Component {
  renderSubmenuItem(item) {
    return (<li key={item.id}><a href={item.url} className="submenu-item">{item.name}</a></li>);
  }
  renderSubmenu(itemList = []) {
    if(itemList.length === 0){
      return;
    }
    return (<ul>
      {itemList.map(item => this.renderSubmenuItem(item))}
    </ul>);
  }
  renderPrimaryMenuItem(item) {
    return (<ul key={item.id}>
      <li>
        <a href={item.url} className="primary-menu-item">{item.name}</a>
        {this.renderSubmenu(item.submenu)}
      </li>
    </ul>);
  }
  render() {
    return (
      <div className="left-nav">   
        {this.props.leftNavData.map(item => this.renderPrimaryMenuItem(item))}     
      </div>
    );
  }
}

export default LeftNav;