import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PieChart from "../Components/Piechart";
import PieChart2 from "../Components/Piechart2";
import PieChart3 from "../Components/Piechart3";

function Dashboard() {
  return (
    <div className= "container">
      <div className="carousel-fluid px-4" id="products">
        <div className="row g-3 my-2"> 
            <ul className="nav nav-pills d-flex border-0 ms-4  text-white-50" id="pills-tab" role="tablist">
                <li className="nav-item " role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" 
                  role="tab" aria-controls="pills-home" aria-selected="true">Dashboard 1</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button"
                   role="tab" aria-controls="pills-profile" aria-selected="false">Dashboard 2</button>
                </li>
            </ul>
            
        <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active px-3 w-100" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row g-3 my-2" >
                  <div className="col-sm-4 col-md-6">
                    <div className="user-fluid cont-col text-white p-3 shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <p className="fs-8">Total Users</p>
                            <h3 className="fs-2">40,324</h3>
                           <div className="d-flex counts">
                            <i className="fas fa-solid fa-arrow-up pe-1"></i>
                            <h6 className=" fs-8">+234</h6>
                            </div>
                        </div>
                        <i className="fas fa-user-friends fs-2 primary-text rounded-3 secondary-bg p-2"></i>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-6">
                    <div className="user-fluid cont-col text-white p-3 shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <p className="fs-8">Total Users</p>
                            <h3 className="fs-2">40,324</h3>
                           <div className="d-flex counts">
                            <i className="fas fa-solid fa-arrow-up pe-1"></i>
                            <h6 className=" fs-8">+234</h6>
                            </div>
                        </div>
                        <i className="fas fa-user-friends fs-2 primary-text rounded-3 secondary-bg p-2"></i>
                    </div>
                </div>

                  <div className="col-sm-4 col-md-6">
                    <div className="user-fluid cont-col text-white p-3 shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <p className="fs-8">Total Users</p>
                            <h3 className="fs-2">40,324</h3>
                           <div className="d-flex counts">
                            <i className="fas fa-solid fa-arrow-up pe-1"></i>
                            <h6 className=" fs-8">+234</h6>
                            </div>
                        </div>
                        <i className="fas fa-user-friends fs-2 primary-text rounded-3 secondary-bg p-2"></i>
                    </div>
                </div>

                  <div className="col-sm-4 col-md-6">
                      <div className="user-fluid cont-col text-white p-3 shadow-sm d-flex justify-content-around align-items-center rounded">
                          <div>
                              <p className="fs-8">Total Users</p>
                              <h3 className="fs-2">40,324</h3>
                             <div className="d-flex counts">
                              <i className="fas fa-solid fa-arrow-up pe-1"></i>
                              <h6 className=" fs-8">+234</h6>
                              </div>
                          </div>
                          <i className="fas fa-user-friends fs-2 primary-text rounded-3 secondary-bg p-2"></i>
                      </div>
                  </div>
                  </div>         

              <div className="container-cols Salescol rounded-3 my-4 myChart px-4 py-3 mb-3 " >
                <h3 className="text-white py-3">Sales Details</h3>
                <div className="row pb-3">
               <PieChart2/>
                  </div>
              </div>
      
              <div className="table-fluid tablecol table-responsive   table-responsive-lg  table-responsive-xl  table-responsive-md  
                table-responsive-sm rounded-3 py-4 px-4 mt-4 ">
                  <h3 className="text-white">Sales Details</h3>
                    <table className="table text-white align-middle mb-0 caption-top">
                     
                      <thead className="thead text-white">
                        <tr className=" rounded-3 border-1">
                          <th className="border-bottom-0">Product Name</th>
                          <th className="border-bottom-0">Location</th>
                          <th className="border-bottom-0">Date - Time</th>
                          <th className="border-bottom-0">Piece</th>
                          <th className="border-bottom-0">Amount</th>
                          <th className="border-bottom-0">Status</th>
                        </tr>
                      </thead>
                      
                      <tbody>
                        <tr className="border-secondary">
                          <td>
                            <div className="d-flex align-items-center">
                              <i className="fa-solid fa-circle fa-3x text-white"></i>
                              <div className="ms-3">
                                <p className="row-color mb-0">Apple watch</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="row-color mb-0">Address comes</p>
                          </td>
                          <td>
                              <p className="row-color mb-0">24th Jun ‘22</p> 
                              <p className="row-color mb-0">12:32 PM</p>
                          </td>
                          <td> <p className="row-color mb-0">435</p></td>
                          <td> <p className="row-color mb-0">$54,323</p></td>
                          <td>
                            <button type="button" className="btn status-button btn-sm rounded-pill text-white">
                              Delivered
                            </button>
                          </td>
                        </tr>
                       
                        <tr className="border-secondary">
                          <td className="mx-2">
                            <div className="d-flex align-items-center">
                              <i className="fa-solid fa-circle fa-3x text-white"></i>
                              <div className="ms-3">
                                <p className="row-color mb-0">Apple watch</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="row-color mb-0">Address comes</p>
                          </td>
                          <td>
                              <p className="row-color mb-0">24th Jun ‘22</p> 
                              <p className="row-color mb-0">12:32 PM</p>
                          </td>
                          <td> <p className="row-color mb-0">435</p></td>
                          <td> <p className="row-color mb-0 ">$54,323</p></td>
                          <td>
                            <button type="button" className="btn btn-sm rounded-pill text-white">
                              Delivered
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  
                </div>
      </div>      

            
             

      <div className="tab-pane fade w-100" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="container-cols Salescol rounded-3 my-4 myChart px-4 py-3">
                  <h3 className="text-white py-3">Sales Details</h3>
                  <div className="row pb-3" style={{width:"100%"}}>
                     <PieChart3/>
                  </div>
                  </div>

              <div className="container-cols  mt-4">
                <div className="row mx-2">
                  <div className="cols col-sm-12 col-md-12 col-lg-5  col-12   p-4 text-white  rounded-3 m-2 ">
                    <h5 className="pb-1">   Customers </h5>
                      <div className="row py-2">
                        <div className="containerdoughnutChart d-flex justify-content-center">
                              <CircularProgressbar value={30} /> 
                       </div>
                      </div>
                  </div>
                  
                  <div className="cols col-sm-12 col-md-12 col-lg-5  col-12   p-4  text-white  rounded-3 m-2 ">
                  <h5 className="pb-2">  Featured Product </h5>
                    <section>
                      <div className="  d-flex justify-content-center">
                        <div id="carouselExampleControls" className="carousel col-md-8  slide pb-2" data-bs-ride="carousel">
                          <div className="carousel-inner rounded-pill">
                            <div className="carousel-item active ">
                              <img src="images.jpg" className="d-block w-100"   alt="..."/>
                            </div>
                            <div className="carousel-item">
                              <img src="images.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                              <img src="images.jpg" className="d-block w-100" alt="..."/>
                            </div>
                         
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                          
                          </div>
                        <div className=" text-center">
                          <p className="mb-0   text-white">Bose HeadPhones</p> 
                          <p className="mb-0  Pending">$34.33</p>
                        </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="cols col-sm-12 col-md-12 col-lg-5  col-12  p-4 text-white rounded-3 m-2 ">
                    <h5 className="pb-1">Sales Analytics</h5>
                    <section className="mt-4">
                      <div className="row justify-content-center">
                         <PieChart/>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
      </div>
           </div>
        </div>
      </div>
    </div>  
  );
}

export default Dashboard;