import React from 'react'
import Navbar from '../../../component/navbar/navbar'
// import { Logo } from '../../../asset/icon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import "./gigs.css"


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
      <div>Any content 1</div>
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
