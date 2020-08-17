import React from 'react'
import './SidebarRow.css'
const SidebarRow = ({selected,Icon,title}) => {
    return (
        <div className = {`sidebarrow ${selected && "selected"}`}>
     <Icon className="sidebarrow__icon" />   
     <p className = "sidebarrow__title"> {title}
     </p>           
        </div>
    )
}

export default SidebarRow
