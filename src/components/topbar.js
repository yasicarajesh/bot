import React from 'react';
class Top extends React.Component{
    render(){
      return(
        <>
        <div className="App">
<header className="header">
<img className="logo" src="/assets/img/logo.png" alt="Company Logo"/>
<div className="button-container">
<button className="home-btn" aria-label="Home">
<img className="home" src="/assets/img/home.png" alt=""/>
<div>Home</div>
</button>
<button className="about-btn" aria-label="About">
<img className="about" src="/assets/img/about.png" alt=""/>
<div>About us</div>
</button>
<button className="services-btn" aria-label="Our Services">
<img className="services" src="/assets/img/services.png" alt=""/>
<div>Our services</div>
</button>
</div>
<button className="contact-us">
Contact Us
</button>
</header>
<div className="banner-container">
<img className="banner" src="/assets/img/homepage.png" alt=""/>
</div>
</div>
        </>
      )
    }
}
export default Top;