import React, {useState} from "react";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import Home from "./Home";
import DataLayout from "./DataLayout";
import Dashboard from "./Dashboard";
function App() {
    const [user, setUser] = useState(null);
    return (
        <>
            <BrowserRouter>
                {/*<NavBar/>*/}
                <Routes>
                    <Route path={"/"} element={<Login setUser={setUser}/>}/>
                    <Route path={'signup'} element={<Signup/>}/>
                    <Route path={'home'} element={<Home user={user}/>}/>
                    <Route path={'dashboard'} element={<Dashboard />}/>
                    {/*<Route path={'datalayout'} element={<DataLayout />}/>*/}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
