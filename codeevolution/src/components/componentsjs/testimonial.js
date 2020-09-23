import React,{Component} from 'react';
import '../componentscss/testimonial.css';

class Testimonial extends Component{
    render(){
        return(

            <>
            <div className="row " id="testimonials">
                <div className="col-md-12 service3">
                    <h1><b>Our Testimonial</b></h1>
                    <p>It is a long established fact that a reader will be distracted by the readable<br/>
content of a page when looking at its layout</p>
            </div>
            </div>
            
            <div className="section-light">
    
        <div className ="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-6">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner abc">
                        <div className="carousel-item active">
                        {/* <img src="2.jpg" class=" img-fluid" alt="first-slide"></img>     */}
                        <img src="carousel2.png" className=" img-fluid" alt="first-slide"></img> 
                        </div>
                        <div className="carousel-item">
                          {/* <img src="4.jpg" class=" img-fluid" alt="second-slide"></img> */}
                          <img src="carousel1.png"className=" img-fluid" alt="first-slide"></img> 
                            
                        </div>
                        
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

            </div>
        <div class="col"></div>
        </div>


</div>
           
           
            
</>







            
        )
    }
}
export default Testimonial;