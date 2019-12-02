import React from "react";


const EmployeeDetails = (props) =>{
    let style = {
        height:"200px",
        width:"200px",
        align:"center"
        
    }
    let {imgUrl,name,profile}=props;

    return(
<div> 
                    <img src={imgUrl} className="card-img-top rounded-circle img-thumbnail" alt="Employee" style={style}/>
                    <br/><br/>
                        <p className="card-text"><b>Name</b>: {name}</p>
                        <p className="card-text"><b>Profile</b>: {profile}</p>
                        
                    </div>
                    
                    
                    
        
    
    
        
    


    );
}

export default EmployeeDetails;