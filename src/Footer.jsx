import React, {Component} from 'react';

import Logo from './Assets/qalogo.png';


class Footer extends Component {

    render() {

        return(
          
          <section className="py-20">
          <div className="container mx-auto px-4 pb-10">
            <div className="flex flex-wrap justify-between items-center -mx-4">
              <div className="w-full lg:w-auto px-4">
                <a className="inline-block mb-6 text-gray-900 text-lg font-semibold" href="/" data-config-id="brand">
                  <img className="h-7" src={Logo} alt="" width="auto" />
                </a>
              </div>
          
              
              <div className="w-full lg:w-1/2 px-4">
                
                <div className="flex flex-wrap items-center justify-end">
                <ul className="w-full lg:w-auto inline-flex flex-wrap mb-4 lg:mb-0">
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="https://www.quantumassurance.com/dont-sell-my-info" data-config-id="01_link1">Do Not Sell</a></li>
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium"  href="https://www.quantumassurance.com/privacy-policy" data-config-id="01_link2">Privacy Policy</a></li>
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium"  href="https://www.quantumassurance.com/terms-conditions" data-config-id="01_link3">Terms & Conditions</a></li>
          </ul>
                  <a className="inline-block mr-auto lg:mr-0 py-4 px-8 text-sm text-white font-medium leafing-normal bg-blue-500 hover:bg-blue-300 hover:shadow-lg rounded"  href="tel:8882922361" data-config-id="primary-action">Get Your Free Quote</a>
                </div>
                <p className="mt-6 lg:hidden text-sm text-gray-500" data-config-id="copy">All rights reserved © Quantum Assurance 2021</p>
               

              </div>
            </div>
          </div>
          

          <div className="container mx-auto px-4 pb-10 text-center">
          <p className="hidden lg:block text-sm text-gray-500" data-config-id="copy">All rights reserved © Quantum Assurance 2021</p>

          </div>
        </section>
    
        )
    }
}

export default Footer;
