import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import { LogAboutUs } from '../Utilities/ActivityLogging'
import Navigation from '../Stores/Navigation';

let getState = () => {
  return {
    navItems: Navigation.getNavitaionItems()
  };
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    Navigation.addChangeListener(this.onChange);
    Navigation.provideNavigationItems();
  }

  onChange() {
    this.setState(getState());
  }
  
  render() {
    return (
      <header className="header" role="banner">
        <div className="menu">
          <div className="container">
            <nav role="navigation">
              <ul>
                {
                  this.state.navItems.map(item =>{
                    return  <li><Link to={'/'+item.redirectToUrl.text}>{item.title.value}</Link> </li>
                  })
                }
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-row">
          <div className="container">
            <div className="col-xs-8 col-md-8 col-lg-4 logo">
              <h1 className="logo">
                <IndexLink to="/" className="logo-link">Dancing Goat</IndexLink>
              </h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}  


export default Header;
