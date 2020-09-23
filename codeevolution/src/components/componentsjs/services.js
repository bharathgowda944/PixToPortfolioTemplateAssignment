import React,{Component} from 'react';
import data from "../data";
import '../componentscss/service.css';
class Service extends Component{
    render(){

        return(
                <>
            <div className="row paddingalign" id="services">
                <div className="col-md-12 service2">
                    <h1><b>Our Services</b></h1>
                    <p>It is a long established fact that a reader will be distracted by the readable
   <br/>content of a page when looking at its layout</p>
                </div>
            </div>
            
            <div className="row servicealign paddingalign">
                        
                {data.map((ele,key) => {
                    return(
                    
                        
                            <div className=" col-md-4 servicecard">
                                
                               <div className="card cardstyle">
                                    <div className="row salign ">
                                        <div className="col-md-4 col-sm-4">
                                            
                                        {/* <img src={ele.img} alt="productimg"></img> */}
                                    <i style ={{color:"skyblue",fontSize:"40px" }}className={ele.img}></i>
                                        </div>
                                    
                                <div className="col-md-8 col-sm-8 sdalign">
                                {/* <div class="card-body"> */}
                         <h5 className=" title"><b>{ele.productname}</b></h5>
                                    <p className="card-text">{ele.details}</p>
                                    <a href="#" class="btn btn-primary">Demo video</a>
                                </div>
                                    </div>
                                </div>
                                </div>
                               
                              
                        
                        
                    )
                    
                })}
                </div>
                
            </>
        )
    }
    
}
export default Service;







// const Data =[
    
//         "productname":"App Development",
//         "details":"i am developer",
//         "img":"logo192.png"
//     },
//     {
//         "productname":"Web Development",
//         "details":"i am web developer",
//         "img":""
//     }

    
// ];

// class Service extends Component{
//     render(){
//         return(
//         <>

// <div className="row">
//                     {Data.map((ele,kry)=>{
//                         return(
//                         // <h1>{ele.productname} </h1>
//                         <img src={ele.img}></img>
//                         )
//                     })}
//                 </div>
//         </>
        
//           )  }
// }
//  export default Service;