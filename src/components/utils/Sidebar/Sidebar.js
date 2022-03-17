import React from 'react'
import { Link } from 'react-router-dom'


function SideBar() {
    return (
        <React.Fragment>
            <div className="sidebar-container">
                <h2 className="sidebar-title">Options</h2>
                <div className="sidebar-line"></div>
                <ul className="sidebar-list">
                    <div className="sidebar-square">
                        <Link to="/products">
                            <li className="sidebar-option sidebar-op1">
                                <i class="fas fa-store"></i>
                                <p>Products</p>
                            </li>
                        </Link>
                    </div>
                    <div className="sidebar-square">
                        <Link to="/users">
                            <li className="sidebar-option sidebar-op2">
                                <i class="fas fa-user"></i>
                                <p>Users</p>
                            </li>
                        </Link>
                    </div>
                    <div className="sidebar-square">
                        <Link to="/lastProduct">
                            <li className="sidebar-option sidebar-op3">
                                <i class="fas fa-tag"></i>
                                <p>New Products</p>
                            </li>
                        </Link>
                    </div>
                    <div className="sidebar-square">
                        <Link to="/lastUser">
                            <li className="sidebar-option sidebar-op4">
                                <i class="fas fa-user-clock"></i>
                                <p>New Users</p>
                            </li>
                        </Link>
                    </div>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default SideBar