import { Link } from "react-router-dom"
import modelroom from '../Images/model-room.jpg'
import logo from '../Images/logo.png'
import '../App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Login from "./Login";
// import Popup from "./Popup";
import '../login.css';


export function Topbar() {
    return (
        <div className="Topbar">
            <div className = "Logo">
                <Link to="/">
                    <img src={logo} className="App-Logo" alt="logo"/>
                </Link>
            </div>
            <div className="Topbar-content">
                <input type="text" className="Search-content" placeholder="search an apartment building, subleases, or anything housing related..."/>
                <Popup trigger={<button className="Topbar-button"> login </button>} modal nested>
                    {close => (<div className="modal"> {Login()}</div>)}
                </Popup>
            
                <button className="Topbar-button"><Link to = "/favorites" className='text-link'>favorites</Link></button>
                <button className="Topbar-button"><Link to = "/explore" className='text-link'>explore</Link></button>
            </div>
        </div>
    );
}

export default function Welcome() {

    return (
        <div className="App-background">
            <div className="App">
                <Topbar/>
                <div className="Welcome">
                    <img src={modelroom} className="Welcome-background" alt="welcback"/>
                    <div className="Welcome-message">
                        <p className="Welcome-text">Looking for a place to live?</p>
                        <p className="Welcome-text">Check out what’s popular in your area on the explore page</p>
                        <button className="Explore-button"><Link to = "/explore" className='text-link'> E X P L O R E</Link></button>
                    </div>
                </div>
                {/* <div className="Location-bar">
                    <input type="text" className="Location-search" placeholder="Location" />
                    <button className="Location-button">Price</button>
                    <button className="Location-button">Beds</button>
                    <button className="Location-button">Furnished</button>
                </div> */}
            </div>
        </div>
    );
}
