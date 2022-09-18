import React from "react";
import '../App.css';

const Lecturer=()=>{

    const input_List=[
        {input_Box: "labox", label: "lecturer Name", name: "Lname", placeholder: "Lecturer Name" },
        {input_Box: "labox", label: "Select Department", name: "Ldepartment", placeholder: "Select Department" }
    ];

    return(
    <div className="form-superContainer">
        <div className="venue-form form-group ">
            <p className="venueTitle">Add lecturers details</p>
                <form className="form-flex">
                    {input_List.map((value)=>{
                         return (
                             <div className={value.input_Box}>
                                 <label className="label" >{value.label}</label><br />
                                 <input type="text" className="venueInput form-control" name={value.name}   placeholder={value.placeholder} required/><br />
                             </div>
                         );
                     })}
                    <input type="submit" className="venueBtn btn btn-light" value="Submit"/><br/><br/>
                </form> 
            </div>
        </div>
    );
    }
export default Lecturer;