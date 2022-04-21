import React, {useState} from "react";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";

function App() {
    const [user, setUser] = useState(null);
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<Login setUser={setUser}/>}/>
                    <Route path={'signup'} element={<Signup/>}/>
                    <Route path={'dashboard'} element={<Dashboard user={user}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
