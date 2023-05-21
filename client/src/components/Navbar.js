import {Link} from "react-router-dom";
import {MdLocalGroceryStore} from 'react-icons/md'

export const Navbar=()=>{
    console.log(process.env.REACT_APP_HOSTED_URL)
    // return (<div>signin page</div>);
   return( 
    <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src={`${process.env.REACT_APP_HOSTED_URL}site-logo.png`} alt="logo" width="40" height="50"/>
            <Link to="#" class="navbar-brand ml-2" >Tatvasoft</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                {/* <li class="nav-item active">
                    <Link to="/" class="nav-link">Home <span class="sr-only"></span></Link>
                </li> */}
                <li class="nav-item">
                    <Link to="/Login" class="nav-link">Login <span class="sr-only"></span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/Signin" class="nav-link">signin <span class="sr-only"></span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/Cart" class="nav-link"><MdLocalGroceryStore/> <span class="sr-only"></span></Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
   )
};