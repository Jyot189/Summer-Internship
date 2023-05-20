import {Link} from "react-router-dom";
export const Login =()=>{
    return (
        <div class="h-400 mt-4 d-flex align-items-center justify-content-center">
            <div class="col-8 col-md-4 col-lg-4 col-xl-4">
            <div class="card-body p-5 text-center">

            <h2 class="fw-bold mb-2 text-uppercase align-items-center">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>
		{/* <div class="row p-2"> */}
        <form>
            <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">Email address</label>
            </div>

            
            <div class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Password</label>
            </div>

            
            <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
                </div>

                <div class="col">
                
                <a href="#!">Forgot password?</a>
                </div>
            </div>

            <input class="btn btn-primary btn-block mb-4" type="submit" value="Sign in" />
            
            <div class="text-center">
                <p>Not a member?<Link to="/Signin" class="nav-link">Register <span class="sr-only"></span></Link></p>
                <p>or sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
                </button>
            </div>
        </form>
        </div>
        </div>
        </div>
    // </div>
    );
    
    // <div>
    //     <button onClick={}></button>
    // </div>
};