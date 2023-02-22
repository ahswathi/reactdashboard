import React from "react";

function Orderlists() {
  return (
  <div className= "container">
 <div className="row g-3 my-3">
      <h3 className="text-white text-md-start mb-4">
        Order List
       </h3>
      
      <div className="row g-3 my-3">
       <div className="d-flex text-center text-white rounded-3 border-secondary ">
          <div className="filter-option d-flex  pt-2 border rounded-start-3 border-secondary">
              <svg width="22" height="21" className="border-secondary mx-3 mt-2" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M1.63119 0.5H12.3687C12.4657 0.500031 12.5606 0.528268 12.6418 0.58127C12.723 0.634273 12.7871 0.709753 12.8261 0.798516C12.8652 0.887279 12.8776 0.985492 12.8619 1.08119C12.8461 1.17689 12.8029 1.26594 12.7374 1.3375L8.63119 5.85625C8.54573 5.94773 8.49873 6.06857 8.49994 6.19375V9.73125C8.5007 9.81434 8.48048 9.89629 8.44115 9.96949C8.40182 10.0427 8.34465 10.1048 8.27494 10.15L6.27494 11.4812C6.19992 11.5307 6.11297 11.559 6.02323 11.5631C5.9335 11.5673 5.84429 11.5473 5.76499 11.5051C5.68569 11.4629 5.61922 11.4001 5.57258 11.3233C5.52594 11.2465 5.50085 11.1586 5.49994 11.0688V6.19375C5.50114 6.06857 5.45415 5.94773 5.36869 5.85625L1.26244 1.3375C1.19697 1.26594 1.15373 1.17689 1.13798 1.08119C1.12224 0.985492 1.13466 0.887279 1.17374 0.798516C1.21282 0.709753 1.27688 0.634273 1.3581 0.58127C1.43932 0.528268 1.5342 0.500031 1.63119 0.5V0.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
          </div>  
   
           <div className="filter-option d-flex  pt-3 border-end border-bottom border-top border-secondary">
              <p className="text-center px-3  border-secondary "> Filter By </p>
           </div>
            <div className="dropdown  filter-option border-end border-bottom border-top  border-secondary   pt-2 px-2">
       <button className="btn  dropdown-toggle text-white " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         Date
       </button>
          </div>
           <div className="dropdown filter-option border-end  border-bottom border-top border-secondary   pt-2 px-2">
       <button className="btn text-white  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         Order Type
       </button>
       <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
         <li>Filter 1</li>
         <li>Filter 1</li>
         <li>Filter 1</li>
       </ul>
           </div>
            <div className="dropdown border-end  border-bottom border-top  filter-option  border-secondary   pt-2  px-2">
       <button className="btn text-white  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         Order Status
       </button>
       <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
         <li>Filter 1</li>
         <li>Filter 1</li>         
         <li>Filter 1</li>
       </ul>
           </div>
          <div className="d-flex border-end  border-bottom border-top  filter-option  rounded-end-3 border-secondary Pending pt-3  px-3">
         <svg width="26" height="27" viewBox="0 0 16 17" className="px-1 "  fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M4.9873 6.73126H1.9873V3.73126" stroke="#FF8743" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M4.1123 12.3875C4.88131 13.1571 5.86131 13.6814 6.92833 13.894C7.99535 14.1066 9.10145 13.9979 10.1067 13.5818C11.112 13.1656 11.9712 12.4607 12.5757 11.5561C13.1803 10.6515 13.503 9.58799 13.503 8.5C13.503 7.41201 13.1803 6.34847 12.5757 5.4439C11.9712 4.53933 11.112 3.83439 10.1067 3.41824C9.10145 3.00209 7.99535 2.89343 6.92833 3.10601C5.86131 3.31859 4.88131 3.84286 4.1123 4.6125L1.9873 6.73125" stroke="#FF8743" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
       <p className="text-center">Reset Filter</p>
          </div> 
      </div>
      </div>
<div className="row g-3 my-3 mx-1">     
<table className="table table-order-list text-white m-0">
        <thead className="text-center">
          <tr className=" border-secondary ">
            <th className="ID py-3 tablebgstyle"  scope="col">ID</th>
            <th className="py-3 tablebgstyle"  scope="col">Name</th>
            <th className="py-3 tablebgstyle"   scope="col">Address</th>
            <th className="py-3 tablebgstyle"  scope="col">Date</th>
            <th className="py-3 tablebgstyle"  scope="col">Type</th>
            <th className="Status py-3 tablebgstyle"  scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="py-4 border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
            <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary  tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
            <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
            <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className=" border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className="border-secondary tablecol text-center">
            <td className="py-3">00001</td>
            <td className="py-3">Demo Name</td>
            <td className="py-3">Weekly</td>
            <td className="py-3">05 Sep 2022</td>
            <td className="py-3">Santosh</td>
             <td className="Pending py-3"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
          <tr className=" rounded-bottom-3 tablecol text-center">
            <td className="border-bottom-0 py-3 last1 ">00001</td>
            <td className="border-bottom-0 py-3">Demo Name</td>
            <td className="border-bottom-0 py-3">Weekly</td>
            <td className="border-bottom-0 py-3">05 Sep 2022</td>
            <td className="border-bottom-0 py-3">Santosh</td>
             <td className="Pending py-3 border-bottom-0 last2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.2 5.15C4.13826 5.1031 4.08811 5.04263 4.05344 4.97328C4.01876 4.90393 4.00048 4.82754 4 4.75V2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2H11.5C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V4.725C11.9995 4.80254 11.9812 4.87893 11.9466 4.94828C11.9119 5.01763 11.8617 5.0781 11.8 5.125L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 8L4.2 10.85C4.13826 10.8969 4.08811 10.9574 4.05344 11.0267C4.01876 11.0961 4.00048 11.1725 4 11.25V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14H11.5C11.6326 14 11.7598 13.9473 11.8536 13.8536C11.9473 13.7598 12 13.6326 12 13.5V11.275C11.9995 11.1975 11.9812 11.1211 11.9466 11.0517C11.9119 10.9824 11.8617 10.9219 11.8 10.875L8 8Z" stroke="#D48A48" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               Pending</td>
          </tr>
        </tbody>
      </table>        
       </div>
    </div>
  </div>
  );
}

export default Orderlists;