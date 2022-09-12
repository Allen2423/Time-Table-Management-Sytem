import React from "react";
import '../App.css';

const Venue=()=>{

    const input_List=[
        {input_Box: "labox", label: "Program Name", name: "Pname", placeholder: "Program Name" },
        {input_Box: "labox", label: "Program Capacity", name: "Pcapacity", placeholder: "Program Capacity" },
        {input_Box: "labox", label: "Year of Study", name: "Pyr", placeholder: "Year of study" },
        {input_Box: "labox", label: "Select Department", name: "Pdepartment", placeholder: "Select Department" }
    ];

    return (
    <div className="form-superContainer">
        <div className="venue-form form-group">
            <p className="venueTitle">Add Program details</p>
                <form className="form-flex">
                    {input_List.map((value)=>{
                        return (
                            <div className={value.input_Box}>
                                <label className="label" >{value.label}</label><br />
                                <input type="text" className="venueInput form-control" name={value.name}   placeholder={value.placeholder} required/><br />
                            </div>
                        );
                    })}
                    <input type="submit" className="venueBtn btn btn-dark" value="Submit"/><br/> <br/>
                </form> 
            </div>
        </div>
    );
    }
export default Venue;