import React from 'react'
import { BrowserRouterasRouter as Router, Route, Routes } from 'react-router-dom';

export default function ErrorPage() {
  // const style={{
  //   .alert-warning{
  //   width: 23.5%;
  //   height: 25%;
  //   outline: none;
  //   border-radius: 8px;
  //   background-color: white;
  //   display: flex;
  //   justify-content : center;
  //   align-items: center;
  //   box-shadow: 0 2px 8px 0 rgb(178, 176, 176);
  //   }}

  
  return (
    <>
    <Router>
      <Routes>
        <Route path="*"  element={<ErrorPage/> }/>
      </Routes>
    </Router>
    <div className="alert-secondary" 
    style={{
      color:"darkred",
      // width:"30%",
      // height:"25%",
      display:"flex",
      padding:"50px",
      position:"absolute",
      top:"20%",
      left:"35%",
      border:"1px solid brown"

  }} >
      <h2 className='glyphicon glyphicon-thumbs-up'>ERROR!!! PAGE NOT FOUND!!</h2>
      <a href="#" class="close" data-dismiss="alert">&times;</a> 
    </div>
    
    </>
  )
}
