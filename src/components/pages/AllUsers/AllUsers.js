import React from 'react'

function AllUsers(props) {
    return (
        <div>
            <div className="all-users-container">
                <div className="all-users-title">
                    <h1>Usuarios</h1>
                </div>
                <div className="all-users-main">
                    <div className="all-users-articles">
                        <article className="all-users-main-articles">
                            <img src={props.avatar} alt=""/> 
                            <div className="all-users-article-username">
                                <label for="username">Nombre de usuario:</label>
                                <p>Username</p>
                                <p>{props.username}</p>
                            </div>
                            <div className="all-users-article-email">
                                <label for="email">Email:</label>
                                <p>{props.email}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUsers