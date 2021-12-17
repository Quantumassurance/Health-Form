import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';
import LandingPage from './LandingPage';
import HealthPlan from './components/HealthPlan';
import CoverageTime from './components/CoverageTime';
import Income from './components/Income';
import Gender from './components/Gender';
import Month from './components/Month';
import Day from './components/Day';
import Year from './components/Year';
import PreExist from './components/Preexist';
import Household from './components/NumberOfPeople';
import HeightWeight from './components/HeightWeight';
import Address from './components/Address';
import Name from './components/Name';
import EmailPhone from './components/EmailPhone';
import ThankYou from './components/ThankYou';
import Match from './components/Lottie';
class App extends Component {


  state = {

    // For Routes
    route: '/',
    routes: [
      '/',
      '/health-plan',
      '/coverage-time',
      '/income',
      '/gender',
      '/month',
      '/day',
      '/year',
      '/preexist',
      '/household',
      '/height-weight',
      '/address',
      '/name',
      '/email-phone',
      '/match',
      '/thank-you',
    ],

    // For Post 

    postData: {

      lp_campaign_id: '60346718061e5',
      lp_campaign_key: 'vFtQfwWc43mK2yXx9ZqV',
      lp_s4: '12',
      lp_s5: '13',
      landing_page: 'health.quantumassurance.com',
      TCPA_Consent: 'Yes',
      TCPA_Language:
        ' By hitting Get My Free Quote above, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site. I also understand that my agreement to be contacted is not a condition of purchasing any property, goods, or services and that I may call (855) 701-3066 to speak with someone about obtaining an insurance quote.  I acknowledge that I may revoke my consent by emailing “STOP” to <a href="mailto:optout@quotehound.com">optout@quotehound.com.</a> I affirm that I have read and agree to this websites  Privacy Policy  and Terms of Use',
      trusted_form_cert_id: '',
      jornaya_lead_id: '',
      IP_Address: '',
      useragent: navigator.userAgent,

      zip_code: '',
      health_insurance_plan: 'Individual Family',
      coverage_time: '',
      household_income: '',
      gender: '',
      month: '',
      day: '',
      year: '',
      dob: '',
      tobacco_use: 'no',
      additional_insured: 'no',
      household_size: '',
      pre_existing_conditions: '',
      weight: '',
      feet: '',
      inches: '',
      address: '',
      first_name: '',
      last_name: '',
      phone_home: '',
      email_address: '',
      entrance_url: '',
      lp_request_id:'',
      }

  }

  copyValuesToPostData2 = () => {
    var tempArray = {
      zip: this.state.postData.zip_code,
    };
    this.setState({ postData2: tempArray });
    // var MediaAlphaExchange = { 
    // 	"data": {
    // 	   "zip": "",
    // 	},
    // 	"placement_id": "YiPFAJc_r0i9fsZr0uP7vvicsinK3Q",
    // 	"sub_1": "test sub id",
    // 	"type": "ad_unit",
    // 	"version": 17
    //  };
     console.log("SetMA");
//MediaAlphaExchange__load('mediaalpha_placeholder');
    return this.state.postData2;
  };


  // Handle change Route
  changeRoute = () => {
    this.setState({
      route: '',
    });
  };


  render() {
    return (

      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>

            {/* Landing Page */}
            <Route path='/' exact >
              <LandingPage

                setZipCode={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                        jornaya_lead_id: document.getElementById('leadid_token').value,
                      trusted_form_cert_id: document.getElementById('xxTrustedFormToken_0').value,
                      zip_code: v,
                      lp_request_id: document.getElementById('lp').value,

                    },
                  });
                }}

              />
            </Route>

            {/* Step 2 - Health Insurance Plan */}
            <Route path='/health-plan' exact>
              <HealthPlan
                setPlan={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      health_insurance_plan: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/coverage-time' exact>
              <CoverageTime
                setCoverTime={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      coverage_time: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/income' exact>
              <Income

                setIncome={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      household_income: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/gender' exact>
              <Gender
                setGender={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      gender: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/month' exact>
              <Month
                setMonth={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      month: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/day' exact>

              <Day
                setDate={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      day: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/year' exact>

              <Year
                setDOB={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      dob: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/preexist' exact >
              <PreExist
                setTabacco={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      pre_existing_conditions: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/household' exact>
              <Household 
                setSpouse={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      household_size: v,
                    },
                  });
                }}
              />

            </Route>

            <Route path='/height-weight' exact>

              <HeightWeight
                setWeight={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      weight: v,
                    },
                  });
                }}

                setFeet={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      feet: v,
                    },
                  });
                }}

                setInches={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      inches: v,
                    },
                  });
                }}
                
              />
            </Route>

            <Route path='/address' exact>
              <Address

                setAddress={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      address: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path="/name" exact>
              <Name
                setFName={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      first_name: v,
                    },
                  });


                }}

                setLName={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      last_name: v,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/email-phone' exact>
              <EmailPhone
                 email_address={this.state.postData.email_address}
                 phone_home={this.state.postData.phone_home}
 
                 setEmail={(v) => {
                   this.setState({
                     postData: {
                       ...this.state.postData,
                       email_address: v,
                     },
                   });
                 }}
 
                 setPhone={(v) => {
                   this.setState({
                     postData: {
 
                       ...this.state.postData,
                       phone_home: v,
                     },
                   });
                 }}
 
                 setURL={(v) => {
                   this.setState({
                     postData: {
                       ...this.state.postData,
                       entrance_url: v,
                     }
                   })
                 }}
 
 
                 postData={this.state.postData}
              />
            </Route>

            <Route path='/match' component={Match} />

            
            <Route path='/thank-you' exact>
              <ThankYou

                postData2={this.state.postData}
    
              />
            </Route>
          </Switch>
        </div>

      </BrowserRouter>
    )
  }
}

export default App;
