import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow/SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

// import ThunbsUpAltOutlinedIcon from '@material-ui/icons/ThunbsUp';

import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const Sidebar = () => {
    return (
        <div className= "sidebar">
        
            <SidebarRow selected Icon = {HomeIcon} title = "Home" />
            <SidebarRow Icon = {WhatshotIcon} title = "Trending" />
            <SidebarRow Icon = {SubscriptionsIcon} title = "Subscriptions" />
          <hr />
          <SidebarRow  Icon = {VideoLibraryIcon} title = "Library" />
          <SidebarRow Icon = {HistoryIcon} title = "History" />
          <SidebarRow Icon = {OndemandVideoIcon} title = "Your Videos" />
          <SidebarRow Icon = {ExpandMoreOutlinedIcon} title = "Show more" />
          <SidebarRow Icon = {WatchLaterIcon} title = "Watch Later" />
        </div>
    )
}

export default Sidebar
