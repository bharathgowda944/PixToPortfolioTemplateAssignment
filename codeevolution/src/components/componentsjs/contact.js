import React,{Component} from 'react';
import Validator from 'validator';
import isEmpty from 'is-empty';
import '../componentscss/contact.css';
import { findAllInRenderedTree } from 'react-dom/test-utils';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            fullname:'',
            email:'',
            subject:''
        };
        this.mysubmitHandler=this.mysubmitHandler.bind(this);
    }
    mysubmitHandler=(event) =>{
        let errors={};
        let nam=event.target.name;
        let val=event.target.value;
       
    if(isEmpty(val)){
        alert("please fill all fields")
    }
    else if(nam==="email"){
        if(Validator.isEmail(val)){
            errors.email="enter valid email";
        }
    }
    else{
        document.getElementById('blogs');
    }

    }
   
    
    render() {
        return(
            <>
           
           
           <div className="row paddingalign" id="contact">
                <div className="col-md-12 service2">
                    <h1><b>Contact Me</b></h1>
                    <p>It is a long established fact that a reader will be distracted by the readable
   <br/>content of a page when looking at its layout</p>
                </div>
            </div>

           
            <div className="row" >
                <div className="col-md-9"style={{paddingRight:"30px"}}>
                <form onSubmit={this.mysubmitHandler} id="form11">
                        <div className="form-row">
                        <div className="form-group col-md-4">
                        <input type="text" name="fullname"className="form-control" onSubmit={this.mysubmitHandler} placeholder="FullName"/>
                        </div>
                        <div className="form-group col-md-4">
                        
                        <input type="email" name="email" className="form-control" onSubmit={this.mysubmitHandler}id="email" placeholder="Email"/>
                        </div>
                        <div className="form-group col-md-4">
                        
                        <input type="text" name="subject"className="form-control" onSubmit={this.mysubmitHandler}id="subject" placeholder="Subject"/>
                        </div>
                        </div> 

                        <div className="form-row ">
                        
                            <div className="form-group col-md-12">
                        
                            <input type="text" className="form-control malign" id="subject" placeholder="Message"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-info main-btn">Send Me</button>
                        
                    </form>    

                </div>
                <div className="col-md-3 calign" >
                    <div className="row" style={{marginBottom:"20px"}}>
                    <div className="col-md-2">
                    <i className="fa fa-users" aria-hidden="true" style={{fontSize:"30px",color:"skyblue",paddingTop:"10px"}}></i>
                    </div>
                    <div className="col-md-10"style={{paddingLeft:"0"}}>
                    <p >3010 Raoul Wallenberg<br/>PlaceWallingford CT 06492</p>
                    
                    </div>
                    </div>

                    <div className="row"style={{marginBottom:"20px"}}>
                    <div className="col-md-2">
                    <i className="fa fa-phone" aria-hidden="true" style={{fontSize:"30px",color:"skyblue",paddingTop:"10px"}}></i>
                    </div>
                    <div className="col-md-10"style={{paddingLeft:"0"}}>
                    <p >797-512-8266 <br/>205-806-9368</p>
                    
                    
                    </div>
                    </div>
                    
                    <div className="row"style={{marginBottom:"20px"}}>
                    <div className="col-md-2">
                    <i className="fa fa-phone" aria-hidden="true" style={{fontSize:"30px",color:"skyblue",paddingTop:"10px"}}></i>
                    </div>
                    <div className="col-md-10"style={{paddingLeft:"0"}}>
                    <p >bharath@gmail.com<br/>pixto@gmail.in</p>
                    
                    
                    </div>
                    </div>
                    
                    
                </div>

                
            </div>
    

</>


            
        )
    }
}
export default Contact;