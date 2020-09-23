import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import  Home from './components/componentsjs/home';
import Service from './components/componentsjs/services';
import Works from './components/componentsjs/works';
import Resume from './components/componentsjs/resume';
import Testimonial from './components/componentsjs/testimonial';
import Blog from './components/componentsjs/blog';
import Contact from './components/componentsjs/contact';

class App extends Component {
  

  // referenceTo =(event) =>{
  //   document.getElementById(event).scrollIntoView({behavior:"smooth"});
  // }
  render(){
    
    return(
      <div>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top">
      <a className="navbar-brand" href="#home">PORTFOLIO</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="#home"><b>HOME</b> <span class="sr-only">(current)</span></a>
          <a className="nav-link" href="#services"><b>SERVICES</b></a>
          <a className="nav-link" href="#works"><b>WORKS</b></a>
          <a className="nav-link" href="#resume"><b>RESUME</b></a>
          <a className="nav-link" href="#testimonials"><b>TESTIMONIALS</b></a>
          <a className="nav-link" href="#blogs"><b>BLOG</b></a>
          <a className="nav-link" href="#contact"><b>CONTACT</b></a>
    
        
        
          
        </div>
      </div>
    </nav>
    
    
       <Home/>

       
     
       <Service/>
       
       <Works/>
       
       <Resume/>
       <Testimonial/>
       <Blog/>
       <Contact/>
       
       </div>  
      
       
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title"style={{color:"grey"}}>Copyright © 2019 Ellora, All rights Reserved.<br/>Created by Themes_Vila</h5>
                  <div className="card-title icons1">
                    <ul>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                    </ul>
                    
                  </div>
                </div>
                
              </div>
              
                    
</div>
    
   
  );
}
}

export default App;
