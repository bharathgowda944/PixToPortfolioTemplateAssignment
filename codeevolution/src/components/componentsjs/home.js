import React,{Component} from 'react';
import '../componentscss/home.css';
import men from '../images/men.png';
import about from '../images/about.png';
import sign from '../images/sign.png';
import data from '../data';
class Home extends Component {
     clickHandler=()=>{
       document.getElementById("home");
     }
    render() {
    
      
        return(
            
               
    <div>   


    <div className =" container" id="home">
    <div className ="row abc" >
    
        <div className="col-md-7 nameeditor">
            <h1 >Hello I'm Bharath</h1>
        <div className="typewriter">
  <h2>I am Front-end developer</h2>
</div>

<button type="button" className="btn btn-outline-info main-btn">Download CV</button>
        </div>
        
        <div className="col-md-5 photoeditor">
            <img src ={men} alt="myphoto"></img>
        </div>
          
    </div>
    <div className ="row">
        <div className ="col-md-5">
        <img src ={about} className="myphoto" alt="myphoto"></img>
        </div>
        <div className="col-md-7">
            <div className="about-content">
                <h2 className="about-title"><b>About Me</b> </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit, sed do eiusmod tempor 
                incidiei dunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exeracita 
                aation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <img src ={sign} className ="signature" alt="signature"></img>
                {/* <div className="row hiremebutton">
                    <div className="col-md-2">
                <button type="button" className="btn btn-outline-info main-btn">Hire Me </button></div>
                
                <div className ="col-md-4">
                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#exampleModal">
                
                <i className="fa fa-play" ></i> Playvideo
</button>


                </div>
                </div> */}

                <div className="about-buttons">
                <button type="button" className="btn btn-outline-info main-btn " style={{color:"white"}}onSubmit={this.clickHandler}><a href="" style={{color:"skyblue"}}>Hire Me</a>  </button>
                <button type="button" className="btn btn--light vidbtn" data-toggle="modal" data-target="#exampleModal">
                
                <i className="fa fa-play"style={{color:"skyblue"}} ></i> Playvideo
</button>
                </div>
            </div>
            
        </div>
    </div>
    

<div className="myskills">

    <h2><b>My Skills</b></h2>
            <p>It is a long established fact that a reader will be distracted by the readable<br/>
            content of a page when looking at its layout
            </p>
</div>
<div className="row">
    <div className="col-md-6 progress_head">
        <h5>Development</h5>
        <div className="progress">
  <div className="progress-bar pbar" role="progressbar" style={{width:"80%",background:"skyblue"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </div>
    <div className="col-md-6 progress_head">
        <h5>Cordginator</h5>
        <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width:"90%",background:"skyblue"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </div>
    <div className="col-md-6 progress_head">
        <h5>Web Design</h5>
        <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width:"85%",background:"skyblue"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </div>
    <div className="col-md-6 progress_head">
        <h5>Laveral</h5>
        <div class="progress">
  <div className="progress-bar" role="progressbar" style={{width:"70%",background:"skyblue"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  
  {/* <div style={{position:"absolute", top:100}} id="progress-outer">
    <div id="progress-inner"></div> */}
{/* </div> */}

</div>
    </div>
</div>
    

</div>

<div className="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content videop">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Pixto.in</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      <iframe className ="pixtovideo"width="560" height="315" src="https://www.youtube.com/embed/mTHrKV8BiRA" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>














</div>



        );

    }
}
export default Home;