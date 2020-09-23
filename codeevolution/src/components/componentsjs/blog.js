import React,{Component} from 'react';

import '../componentscss/blog.css';
import data from '../datablog';
class Blog extends Component{
    render(){
        return(
            
                <div>
                  
            <div className="row service2" id="blogs" >
            <div className="col-md-12">
                <h1><b>Latest Blog</b></h1>
                <p>It is a long established fact that a reader will be distracted by the readable <br/>content of a page when looking at its layout</p>
            </div>
        </div>

<div className="row ">
    
    
        {
            data.map((ele,key)=>{
                return(
                    <div className="col-md-4 blogalign">
<div className="card" >
<img className="card-img-top blogimg" src={ele.blogimg} alt="Card image cap"></img>
<div className="card-body">
<p className="card-text" style={{textAlign:"left"}}><i className="fa fa-calendar" style={{color:"skyblue"}} aria-hidden="true"></i> {ele.blogdate}</p>
  <h5 className="card-title" style={{marginLeft:"25px",textAlign:"left" }}>{ele.blogtitle}</h5>
  <p className="card-text"style={{textAlign:"left"}}>{ele.blogdetails}</p>
  </div>
  
</div>
</div>


                )
                
            })
        }
    
    <div className="row clientalign">
        
        <div className="col-md-2 ">
            <img src="client1.png"></img>
            </div>
            <div className="col-md-2 ">
            <img src="client2.png" ></img>
        </div>
        <div className="col-md-3">
            <img src="client4.png" ></img>
        </div>
        <div className="col-md-3 ">
            <img src="client1.png" ></img>
        </div>
        <div className="col-md-2 ">
            <img src="client1.png"></img>
        </div>
        
        
    </div>

    </div>

</div>
        )
    }
}
export default Blog;