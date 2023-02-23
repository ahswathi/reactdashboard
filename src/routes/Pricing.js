import React from "react";

function Pricing() {
  return (
    <div className= "container">
 <div className="row g-3 my-3 mx-5">
      <h3 className="text-white text-md-start mb-4">
        Pricing
       </h3>
        <div className="row">
          <div className="cols Pricing rounded-3 my-2 mx-3 py-4" style={{width: "340px",background:"#273142"}}>
            <li> <h4 className=" text-white">Basic</h4></li>
            <li> <p className="    text-white-50">Monthly Charge</p></li>
              <li> <h4 className="    text-info pb-5">$14.99</h4> </li>
              <li> <p className="    text-white">Free Setup</p></li>
              <li> <p className="    text-white">Bandwidth Limit 10GB</p></li>
              <li> <p className="    text-white">20 User Connections</p></li>
              <li> <p className="    text-white-50">Analytic Report</p></li>
              <li> <p className="    text-white-50">Public API Access</p></li>
              <li> <p className="    text-white-50">Plugin Integration</p></li>
              <li> <p className="    text-white-50 pb-5">Custom Content Management</p></li>
              <li> <button type="button" className="btn btn-outline-primary btn-lg rounded-pill mb-3">
                Get Started
            </button></li>
            <li> <a className="text-white">Start Your 30 Days Free Trail</a>        </li>
          </div>
         
          <div className="cols  Pricing rounded-3 my-2 mx-3 py-4"  style={{width: "340px",background:"#273142"}}>
            <li> <h4 className=" text-white">Standard</h4></li>
            <li> <p className="    text-white-50">Monthly Charge</p></li>
              <li> <h4 className="    text-info pb-5">$49.99</h4> </li>
              <li> <p className="    text-white">Free Setup</p></li>
              <li> <p className="    text-white">Bandwidth Limit 10GB</p></li>
              <li> <p className="    text-white">20 User Connections</p></li>
              <li> <p className="    text-white-50">Analytic Report</p></li>
              <li> <p className="    text-white-50">Public API Access</p></li>
              <li> <p className="    text-white-50">Plugin Integration</p></li>
              <li> <p className="    text-white-50 pb-5">Custom Content Management</p></li>
              <li> <button type="button" className="btn btn-outline-primary btn-lg rounded-pill mb-3">
                Get Started
            </button></li>
            <li> <a className="text-white">Start Your 30 Days Free Trail</a>        </li>
          </div>
          <div className="cols Pricing   rounded-3 my-2 mx-3 py-4"  style={{width: "340px",background:"#273142"}} >
            <li> <h4 className=" text-white">Premium</h4></li>
            <li> <p className="    text-white-50">Monthly Charge</p></li>
              <li> <h4 className="    text-info pb-5">$89.99</h4> </li>
              <li> <p className="    text-white">Free Setup</p></li>
              <li> <p className="    text-white">Bandwidth Limit 10GB</p></li>
              <li> <p className="    text-white">20 User Connections</p></li>
              <li> <p className="    text-white-50">Analytic Report</p></li>
              <li> <p className="    text-white-50">Public API Access</p></li>
              <li> <p className="    text-white-50">Plugin Integration</p></li>
              <li> <p className="    text-white-50 pb-5">Custom Content Management</p></li>
              <li> <button type="button" className="btn btn-primary btn-lg rounded-pill mb-3">
                Get Started
            </button></li>
            <li> <a className="text-white">Start Your 30 Days Free Trail</a>        </li>
          </div>
        </div>                    
      </div>
      </div>
  );
}

export default Pricing;