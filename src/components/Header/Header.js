import React,{useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css'
import { Link } from "react-router-dom"
const Header = () => {
    
    const [inputSearch,setInputSearch] = useState("")

    return (
        <div className = "header">
            <div className = "header__left">
           
            <MenuIcon/>
            <Link to = "/">
            <img className = "header__logo" 
            src = "https://cdn.worldvectorlogo.com/logos/youtube-2.svg"
            alt = ""
            />
            </Link>
            </div>
            <div className = "header__input">
            <input value = {inputSearch} onChange={e => setInputSearch(e.target.value)} placeholder = "Search.." type = "text" />
           
            <Link to = {`/search/${inputSearch}`}>
              <SearchIcon className = "header__inputButton"/>
              </Link>
            </div>

            <div className = "header__icons">

            <VideoCallIcon className = "header__icon"/>
            <AppsIcon className = "header__icon" />
            <NotificationsIcon className = "header__icon" />
            <Avatar
            src ="https://media-exp1.licdn.com/dms/image/C4E03AQF0bXsUsXKlhw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=Rb41hWK3C-1_iaQRmGCpJOrwxgZYJwQozaT6g-xg3aI"
            alt = ""
            />
            </div>
               
        </div>
    )
}

export default Header
