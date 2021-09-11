import React, { useState } from 'react'
import Navbar from '../../../component/navbar/navbar'
import { IconGloba, IconMove, BriefcaseIcon, IconDesign, IconLocation } from '../../../asset/icon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./gigs.css"

// interface IGigs {
//     icon: any;
// }
const Gigs = () => {
    return (
        <div>
            <Navbar/>

            <div className="">
                <h2 className="">Gigs</h2>
                <Tabs>
    <TabList >
      <Tab >All Gigs <span className="gigs-number">3404</span></Tab>
      <Tab >My Gigs</Tab>
      <Tab >Rejected Gigs</Tab>
    </TabList>

    <TabPanel >
      <div className="tab-keyword-wrapper">

     
        <div className="tab-item-container">Freelance </div>
       
        <div className="tab-item-container"> <IconLocation/>Keyword</div>
        <div className="tab-item-container"> <IconMove />Location</div>
        <div className="tab-item-container"> <IconGloba /> Retome Friendly</div>
        <div className="tab-item-container"> Design</div>
        <div className="tab-item-container"><BriefcaseIcon/>Contact</div>

      </div>

      <div className="">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Company</th>
              <th>Date</th>
              <th>Salary($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Designer</td>
              <td>Rocket</td>
              <td>3rd, June 2020</td>
              <td>20,000 - 30,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </TabPanel>
    <TabPanel>
    <div>Any content 2</div>
    </TabPanel>
    <TabPanel >
    <div>Any content 3</div>
    </TabPanel>
  </Tabs>
            </div>
        </div>
    )
}

export default Gigs
