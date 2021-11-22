import React from "react";
import * as FaIcons from "react-icons/fa"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Paint',
        path: '/paint',
        icon: <FaIcons.FaPaintBrush/>,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <FaIcons.FaPeopleCarry/>,
        cName: 'nav-text'
    },
]