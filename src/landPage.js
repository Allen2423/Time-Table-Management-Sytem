import React, { useState } from 'react';
import './App.css';
import {  Link } from 'react-router-dom';
import TableView from './TimeTableGen';

const IndexPage=(props)=>{
    const [display ,setDisplay]=useState('');

    // const nav_bar=(
    //     <div className="nav-bar">
    //         <span className="BrandName">TMS</span>
    //         <ul className="nav">
    //             <li><a href="#">Profile</a></li>
    //             <li><a href="#">LogIn</a></li>
    //             <li><a href="#">Contact</a></li>
    //         </ul>
    //     </div>
    // ); 
    const adminForm=(
        <div className="logIn_box" onMouseLeave={()=>setDisplay('')}>
        <span className="log_title">Login Form</span>
        <form className="logIn_Form">
            <label className="log_Form">User Name</label>
            <input type="text" className="log_input" name="userName" placeholder="User Name" required/><br />
            <label className="log_Form">Password</label>
            <input type="password" className="log_input" name="password" placeholder="Password" required/><br />
            <input type="submit" className="venueBtn btn btn-dark" value="Login"/><br /><br />
            <span className="forgotP">Forget Password</span><br />
        </form>
    </div>
        );

        // const SetDisplay=()=>{
        //     display=adminForm;
        // };
   
    return(
        <div className="indexContainer container-*">
                
            <div className="indexImg">
                <div className="img_content">
                    <h1>Time Table Management System</h1>
                    <h6>Manage Your Instituitional Time with us</h6>
                    <h5>We Simplify Work</h5>
                </div>
            </div>
            <div className="logIn" onClick={()=>setDisplay(adminForm)} >LogIn</div>
           {display}
            
            <div className="box-btn">
                <div className="btns">
                    <button className="btn_input btn " type="button"><Link className="btn_link" to="/dashboard">TimeTable</Link></button>
                </div>
            </div>
            <div className="indexfooter">
                <p className="para">What can we learn from the brains of London taxicab drivers?
This is the question neuroscientist Eleanor Maguire of University
College London posed as she considered the vast  
                </p>
                <p className="para">To earn their licenses, applicants traveled
by moped through a specific section of the city—a 10-kilometer
radius of Charing Cross station—for three to four years,
                </p>
                <p className="para">
What can we learn from the brains of London taxicab drivers?
This is the question neuroscientist Eleanor Maguire of University
College London posed as she considered the vast 

                </p>
                <p className="para">Asynchronous circuit is not synchronized by 
                    a clock signal; the outputs of the circuit change directly in 
                    response to changes in Inputs. Even after this intense study, only about
50 percent of applicants pass the series of licensing exams.
                </p>
               
            </div>
            <div className="trial">
                <p className="para">To earn their licenses, applicants traveled
by moped through a specific section of the city—a 10-kilometer
radius of Charing Cross station—for three to four years,
                </p> 
                <p className="para">To earn their licenses, applicants traveled
by moped through a specific section of the city—a 10-kilometer
radius of Charing Cross station—for three to four years,
                </p>   
            </div>
            {/* <div className="trial2">
                dgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </div> */}
            {/* {nav_bar} */}
        </div>
       
    );

}

export default IndexPage;