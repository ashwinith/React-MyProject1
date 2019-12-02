import React from "react";

const Button =(props)=>{
console.log(props.children);
    return(

    <div>
            <div className="col-md-12">
                <div className="card text-white bg-info mb-3">
                    <div className="card-body" >
                        {props.children}
                        <button type="button" className="btn btn-primary" style={{margin:"20px"}}>Read more</button>
                        <button type="button" className="btn btn-primary">View more</button>
                    </div>
                </div>
            </div>        
    </div>  
        
        );
}

export default Button;