import React from 'react';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import AddNews from './AddNews';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div >
                <Header/>
                <Footer />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/addnews" element={<AddNews />} />

                    </Routes>
                </div>
            </div>
        )
    }
}

export default App;
