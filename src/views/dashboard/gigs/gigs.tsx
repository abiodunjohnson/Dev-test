import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Dropdown from 'react-dropdown';
import Button from '../../../component/button/button'
import Navbar from '../../../component/navbar/navbar'
import Design from '../../../asset/icons/icon-design.svg'
import Remote from '../../../asset/icons/icon-globe.svg'
import Arrow from '../../../asset/icons/icon-arrows.svg'
import Contact from '../../../asset/icons/icon-briefcase.svg'
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import data from "../../../data.json";

import { IconGloba, IconMove, BriefcaseIcon, IconArrow, IconDesign, IconLocation } from '../../../asset/icon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./gigs.css"



const options = [  'Location'
];


const defaultOption = options[0];
const Gigs = () => {
  
  const [radioOptions, setRadioOptions] = useState("basic")
  const [profiles, setProfiles] = useState(data)
  // const [change, setChange] = useState("")
  const history = useHistory()
  
  const onOptionChange = (e:any) => {
console.log(e.target.value)

    setRadioOptions(e.target.value)
  }

  const handleGigRoute = () => {
    history.push('/dashboard/gigs/create_gig')
  }

  return (
    <div>
      <Navbar/>
      <div className="">
        <div className="gig-header">
          <h2 className="">Gigs</h2>
          <div className="gig-tab-contain">
            <div className="">
              <Button 
              border="none"
              color="#2F417E"
              height= "fit-content"
              onClick={handleGigRoute}
              radius = "10px"
              width = "rem"
              padding="8px 16px 8px 16px"
              margin=""
              children = "New gigs &nbsp; +"
              />
            </div>
          </div>
        </div>
        <Tabs className="">           
          <TabList >
            <Tab >All Gigs<span className="gigs-number">3404</span></Tab>
            <Tab >My Gigs<span className="gigs-number-sub">304</span></Tab>
            <Tab >Rejected Gigs<span className="gigs-number-sub">40</span></Tab>
          </TabList>

          <TabPanel >
            <div className="tab-keyword-wrapper">
            <div className="tab-item-container">Freelance </div>
            <div className="tab-item-container"> <IconLocation/>Keyword</div>
            <div className="tab-item-container"> <Dropdown options={options} value={defaultOption} placeholder="Select an option" /></div>
            <div className="tab-item-container"> <img src={Remote} alt="Remote"/> Remote Friendly</div>
            <div className="tab-item-container design-wrapper"><img src={Design} alt="design"/> Design</div>
            <div className="tab-item-container"><img src={Contact} alt="design"/>Contact</div>
            </div>
            <div className="">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Role</th>
                    <th>Company</th>
                    <th>Date</th>
                    <th>Salary($)</th>
                    <th></th>
                  </tr>
                  </thead>
                <tbody>
                  {profiles.map((profile) => (
                    <tr>
                      <td><input className="input-field"  type="checkbox" onChange={onOptionChange}/></td>
                      <td>{profile.role}</td>
                      <td>{profile.company}</td>
                      <td>{profile.date}<img src={Arrow} alt="arrow"/></td>
                      <td>{profile.salary}<img src={Arrow} alt="arrow"/></td>
                      <td><Button 
                        border="none"
                        color="#faebc7"
                        height=""
                        onClick={() => console.log("Delete")}
                        radius = "06px"
                        width = "rem"
                        padding="4px 25px 4px 25px"
                        margin="0px 0px 0px 50px"
                        children = "Delete"
                        />
                      </td>
                    </tr>
                  ))}         
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
            {/* <hr></hr> */}            
      </div>
    </div>
  )
}

export default Gigs
