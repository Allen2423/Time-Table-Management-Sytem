import './App.css';
import Dashboard from './rect'; 
// import ErrorPage from './ErrorPage';
import IndexPage from './landPage';
import TableView from './TimeTableGen';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import './css/bootstrap.min.css';
import Department from './side_bar/department';
import Course from './side_bar/course';
import Lecturer  from './side_bar/lecturer';
import Time from './side_bar/time';
import Program from './side_bar/programs';
import Venue from './side_bar/venue';
import {useState} from 'react';

function App() {
 
  const side_bar_info=[
    // {class: "li fas fa-list", to: "/dashboard",to2: "/time", content:"Dashboard", list1: " ", list2: " "},
    // {class: "li ", class_icon:"icon far fa-clock", to: "/time",  to2: "/dashboard", content: "Time",list1: "Add Time", list2: "View Time"},
    // {class: "li ", class_icon:"icon fas fa-chalkboard-teacher", to: "/lecturer",to2: "/course", content: "Lecturer", list1: "Add Lecturer", list2: "View Lecturer"},
    // {class: "li ", class_icon:"icon fas fa-book", to: "/course",to2: "/dashboard", content: "Course",list1: "Add Course", list2: "View Course"},
    // {class: "li ", class_icon:"icon fas fa-building", to: "/venue", to2: "/department",content: "Venue",list1: "Add Venue", list2: "View Venue"},
    // {class: "li ", class_icon:"icon fas fa-car", to: "/program",to2: "/dashboard", content: "Program",list1: "Add Program", list2: "View Program"},
    // {class: "li ", class_icon:"icon fas fa-building", to: "/department", to2: "/venue",content: "Department",list1: "Add Department", list2: "View Department"},
    // {class: "li fas fa-book", to: "/result",to2: "/dashboard", content: "Time Table"}
  ];
  // <li ><Link className="dropDowon_list" to={value.to2}>{value.list2}</Link></li>
  const [isOpen, SetIsOpen]=useState(false);
  const toggling=()=>SetIsOpen(!isOpen);
  const toggling1=()=>SetIsOpen(!isOpen);
  const toggling2=()=>SetIsOpen(!isOpen);
  const side_bar=(
    <div className="green container-*">
    <div className="side-bar ">
    <span className="BrandName ">TMS</span>
         <ul className="side ">
         <li  ><Link className="li" to="/dashboard"><i className="icon fas fa-list"></i>Dashboard</Link></li>
         
            {/* {side_bar_info.map((value)=>{
              return( */}
                <>
                <li className="li" onClick={toggling} ><span className="icon far fa-clock"></span> Time
                  {isOpen && <ul className="dropDown ">
                  <li ><Link  className="dropDowon_list" to="/time">Add Time</Link></li>
                  <li ><Link  className="dropDowon_list" to="/venue">View Time</Link></li>
                  </ul>}
                </li> 
                <li className="li" onClick={toggling1} ><span className="icon fas fa-chalkboard-teacher"></span> Lecturer
                  {isOpen && <ul className="dropDown ">
                  <li ><Link  className="dropDowon_list" to="/lecturer">Add Lecturer</Link></li>
                  <li ><Link  className="dropDowon_list" to="/venue">View Lecturer</Link></li>
                  </ul>}
                </li> 
                <li className="li" onClick={toggling2} ><span className="icon fas fa-book"></span> Course
                  {isOpen && <ul className="dropDown ">
                  <li ><Link key={Math.random()} className="dropDowon_list" to="/course">Add Course</Link></li>
                  <li ><Link key={Math.random()}  className="dropDowon_list" to="/time">View Course</Link></li>
                  </ul>}
                </li> 
                <li className="li" onClick={toggling} ><span className="icon fas fa-building"></span> Venue
                  {isOpen && <ul className="dropDown ">
                  <li ><Link  className="dropDowon_list" to="/venue">Add Venue</Link></li>
                  <li ><Link  className="dropDowon_list" to="/course">View Venue</Link></li>
                  </ul>}
                </li> 
                <li className="li" onClick={toggling} ><span className="icon fas fa-car"></span> Program
                  {isOpen && <ul className="dropDown ">
                  <li ><Link  className="dropDowon_list" to="/program">Add Program</Link></li>
                  <li ><Link  className="dropDowon_list" to="/venue">View Program</Link></li>
                  </ul>}
                </li> 
                <li className="li" onClick={toggling} ><span className="icon fas fa-building"></span> Department
                  {isOpen && <ul className="dropDown ">
                  <li ><Link  className="dropDowon_list" to="/department">Add Department</Link></li>
                  <li ><Link  className="dropDowon_list" to="/venprogramue">View Department</Link></li>
                  </ul>}
                </li> 
                
                </>
                {/* );
            })} */}
            <li ><Link className="li" to="/result" ><span className=" icon fas fa-table"></span>Time Table</Link></li>
          </ul>
    </div>
    </div>
  );
 
  const  nav_bar=(
      <div className="nav-bar  navbar-expand-lg">
          {/* <span className="BrandName navbar-brand ">TMS</span> */}
          <ul className="nav  navbar-nav ml-auto">
               <li className="liNav nav-item  "><span className=" icon fas fa-user-circle "></span><Link className="Link nav-link" to="/program" >Profile</Link> </li>
              <li className="liNav nav-item "><span className=" icon fa fa-phone-volume "></span><Link className="Link nav-link" to="/result" >Contact</Link></li>
              <li className="liNav nav-item  "><span className=" icon fas fa-clock "></span><Link  className="Link nav-link" to="/">Logout</Link></li>
          </ul>
      </div>
  );
  return (
  <Router>
   {nav_bar}
    {/* <Link to="/dashboard" className="li">Lecturer</Link> */}
    <Routes>
      
      <Route path="/Result" element={<TableView/> }/>
      <Route path="/dashboard" element={<Dashboard/> }/>
      <Route path="/course"  element={<Course/>}/>
      <Route path="/lecturer" element={<Lecturer/> }/>
      <Route path="/department" element={<Department/> }/>
      <Route path="/time" element={<Time/> }/>
      <Route path="/venue" element={<Venue/>}/>
      <Route path="/program" element={<Program/>}/>
    </Routes>
    
    {side_bar}
    <Routes>
    <Route path="/" exact element={<IndexPage/>}/>
    </Routes>
  </Router>
  );
}
export default App;