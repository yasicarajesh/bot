import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Service from './service';
const styles = {
  fontFamily: "sans-serif",
 top : "500%",
  width:"calc(100%-90px)",
  width : "30px"

};
class Top extends React.Component{
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
  
  onOpenModal1= () => {
    this.setState({ open: true });
  };


  
  
  
    //do stuff...
   
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  onCloseModal2 = () => {
    this.setState({ open: false });
  };

  
    render(){
      const { open } = this.state;
      return(
        <>
        



<div className="App">
<header className="header">


<img className="logo" src="/assets/img/logo.png" alt="Company Logo"/>

<div class="navbar">

<div class="menu">
<div class="dropdown">


<button class="dropbtn"><i class="fa fa-bars"></i></button>
                            <div class="dropdown-content">
                            <a href="Top/">Home</a>
                            <a href="#section1">About</a>
                            <a href="#section">Our Services</a>
                           
                           <a href="#sect5"><button onClick={this.onOpenModal1} class="bt">Contact Us</button></a>
                           
                            
                          </div>
                          </div>
                          </div>
                          </div>
                          
                         

<div className="button-container">
<button className="home-btn" aria-label="Home">
<img className="home" src="/assets/img/hometop.png" alt=""/>
<div class="homeb"><a href="Top/">Home</a></div>
</button>
<button className="about-btn" aria-label="About">
<img className="about" src="/assets/img/aboutmain.png" alt=""/>
<div class="aboutb"><a href="#section1">About us</a></div>
</button>
<button className="services-btn" aria-label="Our Services">
<img className="services" src="/assets/img/servicemain2.png" alt=""/>
<div class="serviceb"><a href="#section">Our services</a></div>
</button>
</div>

<button onClick={this.onOpenModal}className="contact-us">

Contact Us
</button>
<div class="section5" id="sect5">

<Modal open={open} onClose={this.onCloseModal} class="mod">

<div class="con1">Fill in the form below,or give us a call on +91 7358233212</div>
       <div class="con8">
         <div class="con2">
         <div class="name1"><input type="text" class="text-line" name="name" placeholder="Your name" id="name" required></input><span class="dot"></span></div>
         <div class="name2"><input type="email" class="text-line" name="email" placeholder="Your email address" required></input><span class="dot"></span></div>
         </div>
         <div class="name3"><input type="ph" class="text-line1" name="phone" placeholder="Your phone number" id="ph" pattern="^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$" title="pls match" required></input><span class="dot"></span></div>
         <div class="name4"><input type="text" class="text-line1" name="message" placeholder="Tell us about your project?" id="name" required></input><span class="dot"></span></div>
         </div>
         <div class="btn1">
        
         <button onClick={this.onCloseModal} class="btn2">
          submit
          </button></div>
         <div class="last">
            Prefer an email? No problem <font>hello@botindevelopers</font> 
          </div>
          
</Modal>

</div>


</header>
<div className="banner-container">
<img className="banner" src="/assets/img/homey.png" alt=""/>
</div>


</div>
        </>
      )
    }
}
export default Top;