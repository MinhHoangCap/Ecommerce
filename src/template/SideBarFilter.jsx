import React from 'react'

export default function SideBarFilter() {
  return (
    <div className='sidebar'>
        <div className="sidebar__heading">
            <div className="title">
                <div className="icon"></div>
                <div className="name"></div>
            </div>
        </div>
        <div className="category">
            <ul className="categoryList">
                <li className="categoryItem">
                    Living Room
                </li>
            </ul>
        </div>
        <div className="price">
            <ul className="categoryList">
                <li className="categoryItem">
                    Living Room <input type="checkbox" name="" id="" />
                </li>
            </ul>
        </div>
    </div>
  )
}
