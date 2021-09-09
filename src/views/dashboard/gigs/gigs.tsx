import React from 'react'
import Navbar from '../../../component/navbar/navbar'
// import { Logo } from '../../../asset/icon'
import "./gigs.css"

type TabsProps = {
    tabs: {
        tabName: string;
        panelTitle: string;
        panelDesc: string;

    };
};

const Gigs = ({tabs}: TabsProps) => {
    return (
        <div>
            <Navbar/>

            <div className="">
                <h2 className="">Gigs</h2>
                {/* <button className=""></button> */}


            <div className="tabs">
                <div role="tablist" aria-label="Accessible Tabs">
                    <button id="nils" role="tab" aria-selected="true" aria-controls="nils-tabs">
                        All gigs
                    </button>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Gigs
