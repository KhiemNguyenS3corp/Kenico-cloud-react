import React, { Component } from 'react';
import BackgroundImage from '../Images/banner-default.jpg';
import HeroUnit from '../Stores/Herounit';

let getState = () => {
  return {
    heroUnit: HeroUnit.getHeroUnit()
   
  };
};

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = getState();
    this.onChange = this.onChange.bind(this);
    
  }

  componentDidMount() {
    HeroUnit.addChangeListener(this.onChange);
    HeroUnit.provideHeroUnit();
    
  }

  onChange() {
    this.setState(getState());
  }
 
  
  render() {
    if (this.state.heroUnit.length === 0) {
      return (
         <section className="banner-section" style={{ backgroundImage: "url(" + BackgroundImage + ")" }}>
          <h2 className="banner-heading"></h2>
          <p className="banner-text">
          
                </p>
         </section>
      );
    }else{
      let heroUnit = this.state.heroUnit[0];
      console.log('unit', heroUnit)
      let title = heroUnit.title.value;
      let summary =heroUnit.marketing_message.value

     
      return (
        <section className="banner-section" style={{ backgroundImage: "url(" + BackgroundImage + ")" }}>
          <h2 className="banner-heading">{title}</h2>
          <p className="banner-text">
          {summary}
                </p>
        </section>
      );

    }
    
    
    
  }
}  


export default Banner;
