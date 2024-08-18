import React from 'react';
import Footer from './Footer';
import Home from './FooterComp/Home';
import About from './FooterComp/About';
import AddNews from './FooterComp/AddNews';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Notification from './HeaderComp/Notification';
import Profile from './HeaderComp/Profile';
import Register from './Register';


class App extends React.Component {
    render() {
        return (
            <div >
                <div>
                <Header/></div>
                <Footer />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route  path="/about" element={<About />} />
                        <Route path="/addnews" element={<AddNews />} />
                        <Route path="/notification" element={<Notification />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/register" element={<Register/>}/>


                    </Routes>
                </div>
            </div>
        )
    }
}

export default App;
