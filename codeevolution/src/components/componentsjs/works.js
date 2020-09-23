import React,{Component} from 'react';
import '../componentscss/works.css';
import data from '../datawork';

class Works extends Component{
    render(){
        return(
            <div>
            <div className="row " id="works">
                <div className="col-md-12 service3">
                    <h1><b>Latest Work</b></h1>
                    <p>It is a long established fact that a reader will be distracted by the readable
   <br/>content of a page when looking at its layout</p>
   <div className="buttonbar">
   <button type="button" className="btn btn-outline-info"><b>All</b></button>
   <button type="button" className="btn btn-outline-info"><b>WEB DESIGN</b></button>
   <button type="button" className="btn btn-outline-info"><b>ILLUSTRATOR</b></button>
   <button type="button" className="btn btn-outline-info"><b>UL/UX DESIGN</b></button>
   <button type="button" className="btn btn-outline-info"><b>PRINT</b></button>
   <button type="button" className="btn btn-outline-info"><b>VIDEO</b></button>
             </div>
             </div>   
             </div>
             <div className ="row">
                {
                    data.map((ele,key)=>{console.log(data,">>>>")
                        return(
                            <div className ="col-md-4 pic">
                   <img className="workimg" src={ele.workimg}></img>
                   <h4>{ele.workname}</h4>
                   <p>{ele.workdetails}</p>
                   </div>
                        )
                    })
                }
               </div>
               {/* <button type ="button" className="btn btn-primary">Load More</button> */}
               <button type="submit" className="btn btn-outline-info main-btn">Load More</button>
               
            </div>
            
        )
    }
}

export default Works;
           

            


