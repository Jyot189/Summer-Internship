import {Link} from "react-router-dom";
export const Navbar=()=>{
    // return (<div>signin page</div>);
   return( 
    <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="#" class="navbar-brand" >Tatvasoft</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to="/" class="nav-link">Home <span class="sr-only"></span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/Login" class="nav-link">Login <span class="sr-only"></span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/Signin" class="nav-link">signin <span class="sr-only"></span></Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
   )
};