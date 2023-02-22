import React from "react";

function Pricing() {
  return (
    <div class= "container mx-5">
   
    <div class="pricing-fluid text-center   mt-4">
        <h3 class="text-white text-md-start  mx-2 ">
          Pricing
        </h3>
        <div class="row">
          <div class="cols rounded-3 my-2 mx-3 py-4" style={{width: "340px",background:"#273142"}}>
            <li> <h4 class=" text-white">Basic</h4></li>
            <li> <p class="    text-white-50">Monthly Charge</p></li>
              <li> <h4 class="    text-info pb-5">$14.99</h4> </li>
              <li> <p class="    text-white">Free Setup</p></li>
              <li> <p class="    text-white">Bandwidth Limit 10GB</p></li>
              <li> <p class="    text-white">20 User Connections</p></li>
              <li> <p class="    text-white-50">Analytic Report</p></li>
              <li> <p class="    text-white-50">Public API Access</p></li>
              <li> <p class="    text-white-50">Plugin Integration</p></li>
              <li> <p class="    text-white-50 pb-5">Custom Content Management</p></li>
              <li> <button type="button" class="btn btn-outline-primary btn-lg rounded-pill mb-3">
                Get Started
            </button></li>
            <li> <a class="text-white">Start Your 30 Days Free Trail</a>        </li>
          </div>
         
          <div class="cols rounded-3 my-2 mx-3 py-4"  style={{width: "340px",background:"#273142"}}>
            <li> <h4 class=" text-white">Standard</h4></li>
            <li> <p class="    text-white-50">Monthly Charge</p></li>
              <li> <h4 class="    text-info pb-5">$49.99</h4> </li>
              <li> <p class="    text-white">Free Setup</p></li>
              <li> <p class="    text-white">Bandwidth Limit 10GB</p></li>
              <li> <p class="    text-white">20 User Connections</p></li>
              <li> <p class="    text-white-50">Analytic Report</p></li>
              <li> <p class="    text-white-50">Public API Access</p></li>
              <li> <p class="    text-white-50">Plugin Integration</p></li>
              <li> <p class="    text-white-50 pb-5">Custom Content Management</p></li>
              <li> <button type="button" class="btn btn-outline-primary btn-lg rounded-pill mb-3">
                Get Started
            </button></li>
            <li> <a class="text-white">Start Your 30 Days Free Trail</a>        </li>
          </div>
          <div class="cols rounded-3 my-2 mx-3 py-4"  style={{width: "340px",background:"#273142"}} >
            <li> <h4 class=" text-white">Premium</h4></li>
            <li> <p class="    text-white-50">Monthly Charge</p></li>
              <li> <h4 class="    text-info pb-5">$89.99</h4> </li>
              <li> <p class="    text-white">Free Setup</p></li>
              <li> <p class="    text-white">Bandwidth Limit 10GB</p></li>
              <li> <p class="    text-white">20 User Connections</p></li>
              <li> <p class="    text-white-50">Analytic Report</p></li>
              <li> <p class="    text-white-50">Public API Access</p></li>
              <li> <p class="    text-white-50">Plugin Integration</p></li>
              <li> <p class="    text-white-50 pb-5">Custom Content Management</p></li>
              <li> <button type="button" class="btn btn-primary btn-lg rounded-pill mb-3">
                Get Started
            </button></li>
            <li> <a class="text-white">Start Your 30 Days Free Trail</a>        </li>
          </div>
        </div>                    
      </div>
      </div>
  );
}

export default Pricing;