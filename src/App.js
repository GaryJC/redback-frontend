import React, {useEffect, useState, useContext} from "react";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import ApiTest from "./ApiTest";

const UserContext = React.createContext(null);
function App() {
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    useEffect(() => {
        // console.log(JSON.parse(sessionStorage.getItem('user')))
        setUser(JSON.parse(sessionStorage.getItem('user')))
    }, [])

    return (
        <>
            <UserContext.Provider value={{user}}>
                <BrowserRouter>
                    {/*<NavBar/>*/}
                    <Routes>
                        <Route path={"/"} element={<Login setUser={setUser}/>}/>
                        <Route path={'signup'} element={<Signup/>}/>
                        <Route path={'home'} element={<Home user={user}/>}/>
                        <Route path={'dashboard'} element={<Dashboard user={user}/>}/>
                        <Route path={'apitest'} element={<ApiTest user={user}/>}/>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}

export {App, UserContext};
