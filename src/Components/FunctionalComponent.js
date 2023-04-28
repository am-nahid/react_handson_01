import React, {Component} from "react";

export default class FunctionalCompo extends Component{
    render(){
        return(
            
                        <div className="container1">
                <h1>This is created using functional Component</h1>
                <p className="para1">This is done using external CSS</p>
                <p style={{color:"red"}}>This is done using inline CSS</p>
            </div>
          
        )
    }
}

