import React from 'react'
import { HomeIcon, BriefcaseIconFill, CompanyIcon, AccountIcon } from '../../asset/icon';
import Logo from '../../asset/icons/logo.svg'
import {Route} from 'react-router'
import SidebarItem from '../../component/sidebar/sidebar';
import Summary from './summary/summary';
import Gigs from './gigs/gigs';
import Company from './company/company';
import Account from './account/account';
import CreateGig from './gigs/create_gig/create_gig'
import './dashboard.css'


const Dashboard = () => {
    return(
    <>
    <div className="dashboard">
        <div className="dashboard-sidebar">
            <div className="dashboard-sidebar-logo">
            <img src={Logo} alt="Logo" />
            </div>
            <div className="dashboard-sidebar-menu">
            <SidebarItem icon={<HomeIcon/>} title={"Dashboard"} navigationTo={"/dashboard"}/>
            <SidebarItem icon={<BriefcaseIconFill/>} title={"Gigs"} navigationTo={"/dashboard/gigs"}/>
            <SidebarItem icon={<CompanyIcon/>} title={"Company"} navigationTo={"/dashboard/company"} />
            <SidebarItem icon={<AccountIcon/>} title={"Account"} navigationTo={"/dashboard/account"}/>
            </div>
        </div>
        <div className="dashboard-content">
            <Route path="/dashboard" exact component={Summary} />
            <Route path="/dashboard/gigs" exact component={Gigs} />
            <Route path="/dashboard/gigs/create_gig" exact component={CreateGig} />
            <Route path="/dashboard/company" exact component={Company} />
            <Route path="/dashboard/account" exact component={Account} />
        </div>
    </div>
    </>
    )
}

export default Dashboard;