import React,{Component} from "react";
import data from "../dataresume";
import '../componentscss/resume.css';

class Resume extends Component{
    render(){
        return(
            <>
                <div className="row" id="resume">
                <div className="col-md-12 service2">
                    <h1><b>Our Resume</b></h1>
                    <p>It is a long established fact that a reader will be distracted by the readable
<br/>content of a page when looking at its layout</p>
                </div>
            </div>

            <div className="container-fluid row">
            <div className="col-md-6 resumeheader">
                    <h4><i className="fa fa-book" style={{fontSize:"30px",color:"skyblue",marginRight:"10px"}}></i><b>Education</b></h4>
                {data.Education.map((ele,key)=>{
                    return(
                        <div className="jumbotron resumedetails">
                            <p className="lead">{ele.date}</p>
                    <h5 className="display-7"><b>{ele.name}</b></h5>
                            
                            <p className="lead">{ele.university}</p>
                            <p className="lead">{ele.details}.</p>

                               
                            </div>
                    )
                })}
            
                    
                
                
                </div>
                <div className="col-md-6 resumeheader">
                    <h4><i className="fa fa-briefcase" style={{fontSize:"30px",color:"skyblue",marginRight:"10px"}}></i><b>Experience</b></h4>
                    {data.Experience.map((ele,key)=>{
                        return(
                            <div className="jumbotron resumedetails">
                            <p className="lead">{ele.date}</p>
                    <h5 className="display-7"><b>{ele.name}</b></h5>
                            
                            <p className="lead">{ele.university}</p>
                            <p className="lead">{ele.details}.</p>

                               
                            </div>
                        )
                    })}
                    
                    
                   
                
                
                </div>
            </div>
            
            <div className="container bg backgroundimg">
                
                    <div className="row bg">
                       
                    <div className="col-md-3">
                           <div className="counter-items">
                               <div className="number-number">
                                   <span className="counter"><h4><center><b>583</b></center></h4></span>
                               </div>
                               <p className="number-desc"><h5><center><b>PROJECTS DELIVERED</b></center></h5></p>
                           </div>
                       
                   </div>
                       
                   
                   <div className="col-md-3">
                           <div className="counter-items">
                               <div className="number-number">
                                   <span className="counter"><h4><center><b>6923</b></center></h4></span>
                               </div>
                               <p className="number-desc"><h5><center><b>HAPPY CUSTOMER</b></center></h5></p>
                           </div>
                       
                   </div>
                   <div className="col-md-3">
                           <div className="counter-items">
                               <div className="number-number">
                                   <span className="counter"><h4><center><b>524</b></center></h4></span>
                               </div>
                               <p className="number-desc"><h5><center><b>HDOWNLOADS</b></center></h5></p>
                           </div>
                       
                   </div>
                   <div className="col-md-3">
                           <div className="counter-items">
                               <div className="number-number">
                                   <span className="counter"><h4><center><b>9372</b></center></h4></span>
                               </div>
                               <p className="number-desc"><h5><center><b>AWARDS WIN</b></center></h5></p>
                           </div>
                       
                   </div>

               </div>

                </div>
            
                    

            </>

        )
    }
}
export default Resume;
