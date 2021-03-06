import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './forms.css';
import Footer from '../Footer.jsx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';




class Address extends Component {

    constructor(props) {
    super(props);

    this.state = {address: ''};

    this.nextStep = this.nextStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }


  nextStep = (values) =>  { 
        
    let address = document.getElementById('address').value;

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip_code');
    const lp = urlParams.get('lp_request_id')
    const pre = urlParams.get('pre_existing_conditions');
    const time = urlParams.get('coverage_time')
    const income = urlParams.get('household_income');
    const gender = urlParams.get('gender');
    const people = urlParams.get('household_size');
    const weight = urlParams.get('weight');
    const height = urlParams.get('height');

    if(address.length < 4){
        toast.error("😬 Please enter a valid address!");   
        values.preventDefault();

    }
    else{

      values.preventDefault();
      toast.dismiss();
      console.log("success: ", address);


    this.props.setAddress(address);

    this.props.history.push('/name' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&health_insurance_plan=ACA_Plan'  + '&coverage_time=' + time + '&household_income=' + income + '&gender=' + gender + '&pre_existing_conditions=' + pre + '&household_size=' + people + '&weight=' + weight + '&height=' + height + '&address=' + address);
    }
      
  }


    render() {
        return (
            <div>
                   <div className="back bg-white">
                <div className="bg-blue-500 headerText justify-center align-middle text-center">
                    <h2>Get Your Free Health Insurance Quote</h2>
                </div>
                <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
                    <div className="px-4 py-8 sm:px-10">


                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">

                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        83%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                <div style={{ width: "83%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                            </div>
                        </div>


                        <div className="test">
                        <ToastContainer
                        
                             position="top-center"
          autoClose={5000}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={'colored'}
                         />
                            <div className="mt-6">

                                <div>
                                    <div className="relative flex justify-center text-sm leading-5 con">
                                        <span className="px-2 text-black-500 text-3xl bold header">
                                            What Is Your Street Address?
                                        </span>
                                    </div>
                                </div>
                                <form onSubmit={this.nextStep} >
                                    <div className="mt-6">
                                        <div className="w-full flex text-sm leading-5">

                                            <div className="text-sm leading-5 buttonBlockRow">

                                              <input className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " type="text" name="address" placeholder="123 Main Street" id="address" minLength={4}/>
                                             </div>
                                        </div>
                                        <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 nextButton " type="submit">Next</button>

                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>




                </div>


            </div>

                <Footer />
            </div>
        )
    }
}


export default withRouter(Address)