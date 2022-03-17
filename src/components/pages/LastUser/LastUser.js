import React from 'react'
import { useState, useEffect } from 'react';

function LastUser() {

    const [lastUser, setLastUser] = useState([]);
    const [isVisit, setIsVisit] = useState(false);

    const lastUserCall = async () => {
       try {
            let res = await fetch("https://kruto.herokuapp.com/api/users")
            let resJson = await res.json()
            let total =  resJson.count
            let resheroku = await fetch(`https://kruto.herokuapp.com/api/users/${total-1}`)
            let  resultado = resheroku.json
            return resultado
      } catch (error) {
      }
    }

    useEffect(async() => {
      const newUser = await lastUserCall()
      setLastUser(newUser)
      setTimeout(() => {
          setIsVisit(true);
      }, 2000)
    }, [])



    return (
        <div>
            <div className="last-user-container">
                <div className="last-user-title">
                    <h1>Ultimo Usuario</h1>
                </div>
                <div className="last-user-main">
                    <div className="last-user-articles">
                        <article className="last-user-main-articles">
                            <img src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1646267292/1643719193361_fugkfr.jpg" alt=""/>
                            <div className="last-user-article-username">
                                <label for="username">Nombre de usuario:</label>
                                <p>Username</p>
                                <p>{LastUser.name}</p> 
                            </div>
                            <div className="last-user-article-email">
                                <label for="email">Email:</label>
                                <p>username@kruto.com</p>
                                <p>{LastUser.email}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastUser