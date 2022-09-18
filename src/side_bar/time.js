import React from "react";
import '../App.css';

const Time=()=>{
    return (
    <div className="form-superContainer ">
        <div className="venue-form form-gorup">
            <p className="venueTitle">Add Time details</p>
                <form className="form-flex">
                    <div className="labox">
                        <label className="label" >Time</label>
                        <input type="text" className="venueInput form-control"  placeholder="Tme Name" required/><br />
                    </div>
                <input type="submit" className="venueBtn btn btn-dark" value="Submit"/><br/><br/> 
            </form> 
        </div>
     </div>
    );
    }
export default Time;

