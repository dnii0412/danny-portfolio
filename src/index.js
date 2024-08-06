// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Hero from './components/Hero'
import Stuffs from './components/Stuffs'
import Skills from './components/Skill'

function App(){
    <>
    <Router>
        <Routes>
            <Route exact 
                   path="/"
                   element={<Hero/>}
             />
            <Route exact 
                   path="/"
                   element={<Stuffs/>}
             />
            <Route exact 
                   path="/"
                   element={<Skills/>}
             />
        </Routes>
    </Router>
    </>
}