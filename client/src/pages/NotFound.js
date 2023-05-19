import {Link} from "react-router-dom";
export const NotFound =()=>{
    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                  <Link to="/" class="nav-link">Go Home <span class="sr-only"></span></Link>
            </div>
        </div>
    );
};