import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import Button from '../../../component/button/button'
import Navbar from '../../../component/navbar/navbar'
import Design from '../../../asset/icons/icon-design.svg'
import Remote from '../../../asset/icons/icon-globe.svg'
import Arrow from '../../../asset/icons/icon-arrows.svg'
import Contact from '../../../asset/icons/icon-briefcase.svg'
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import { IconGloba, IconMove, BriefcaseIcon, IconArrow, IconDesign, IconLocation } from '../../../asset/icon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./gigs.css"



const options = [  'Location'
];


const defaultOption = options[0];
const Gigs = () => {
  const [tags, setTags] = React.useState(["Add tag"])
  // const [tags, setTags] = React.useState(props.tags);
  // const removeTags = indexToRemove => {
	// 	setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	// };
  // const addTags = event => {
	// 	if (event.target.value !== "") {
	// 		setTags([...tags, event.target.value]);
	// 		props.selectedTags([...tags, event.target.value]);
	// 		event.target.value = "";
	// 	}
	// };

    return (
        <div>
            <Navbar/>

            <div className="">
              <div className="gig-header">
                <h2 className="">Gigs</h2>
                <div className="hide">
                <Button 
        border="none"
        color="#2F417E"
        height= "fit-content"
        onClick={() => console.log("Delete")}
        radius = "10px"
        width = "rem"
        padding="8px 16px 8px 16px"
        margin=""
        children = "New gigs &nbsp; +"
      />
      </div>
                </div>
                <Tabs className="hide">

                
    <TabList >
      <Tab >All Gigs <span className="gigs-number">3404</span></Tab>
      <Tab >My Gigs <span className="gigs-number-sub">304</span></Tab>
      <Tab >Rejected Gigs <span className="gigs-number-sub">40</span></Tab>
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
              <th>Role</th>
              <th>Company</th>
              <th>Date</th>
              <th>Salary($)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Designer</td>
              <td>Rocket</td>
              <td>3rd, June 2020<img src={Arrow} alt="arrow"/></td>
              <td>20,000 - 30,000<img src={Arrow} alt="arrow"/></td>
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
      /></td>
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
            
            <hr></hr>
            <div className="">

              <h4>New gig</h4>

              <div className="newgig-wrapper">
                <div className="data-wrapper">
               
             <div className="inner-wrapper"> 
                 <input className="input-field" value="Basic Data" type="radio"  />
                    <label htmlFor="company" className="label-text">Basic Data</label>
              </div>
                   
              <div className="inner-wrapper"> 
                    <input className="input-field" type="radio"  />
                    <label htmlFor="company" className="label-text">Renumeration</label>
              </div>
                </div>
                <div className="data-wrapper">
                <form className="from-wrap">
                 
                  <div className="first-inner-wrapper">
                  <div className="inner-wrapper">
                    <label htmlFor="role">Role</label>
                    
                    <input type="text" id="role"  />
                    </div>
                  
                  <div className="inner-wrapper">
                    <label htmlFor="company">Company</label>
                    <input className="input-field" type="text" id="company"  />
                    </div>
                   </div>

                    <div className="inner-wrapper">
                   
                    <input className="input-field" placeholder="Address" type="text"   />
                    </div>
                    <div className="tags-input">
                      <h5 className="tag-header">Add tag</h5>
                    <ReactTagInput 
                     tags={tags} 
                     onChange={(newTags) => setTags(newTags)}
                     placeholder="Add more tags"
                     maxTags={10}
                    />
                    <ul className="tag-list">
                      <p className="suggest-tag-header">Suggested tags:</p>
                      <div className="tag-item-wrapper">
                        <li className="tag-item">full time</li>
                        <li className="tag-item">contract</li>
                        <li className="tag-item">freelance</li>
                      </div>
                      
                    </ul>
		
		</div>
      </form>
                </div>
            
              </div>
            </div>
            </div>
        </div>
    )
}

export default Gigs
