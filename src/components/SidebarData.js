import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarData = [
    {
        title:'Home',
        path:'/home',
        icon: <FontAwesomeIcon icon={['fas', 'house']}/>,
        cName:'nav-text'
    },

    {
        title:'Task',
        path:'/',
        icon: <FontAwesomeIcon icon={['fas', 'briefcase']}/>,
        cName:'nav-text'
    }
]