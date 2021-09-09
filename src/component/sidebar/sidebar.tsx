import React from "react";
import {useHistory, useRouteMatch} from "react-router"
import './sidebar.css';

interface ISidebarItem {
    icon: any;
    title: string;
    navigationTo?: string;
}

const SidebarItem: React.FC<ISidebarItem> = ({icon, title, navigationTo}) => {
const history = useHistory();
const isMatchingRoute = useRouteMatch({path: navigationTo});

    const handleNavigation = () => {
        navigationTo && history.push(navigationTo)
    }

    const condition = isMatchingRoute?.isExact
    return (
        <div className={`sidebar-item${condition? "__active" : ""}`} onClick={handleNavigation}>
            <span className="sidebar-item-content">
                <span className="sidebar-item-text"> <span className="menu-icon">{icon}</span> <span>{title}</span></span>
            </span>
        </div>
    )
};

export default SidebarItem;