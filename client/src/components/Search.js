export const Search=()=>{
    return(
        <div class="h-400 mt-2 d-flex align-items-center justify-content-center">
            <div class="col-8 col-md-4 col-lg-4 col-xl-4">
                <div class="card-body p-5 text-center">
                <form>
                    <div class="input-group">
                        <input type="search" class="form-control rounded mr-2 " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <input type="submit" class="btn btn-outline-primary mr-2"  value="search" />
                        <input type="reset" class="btn btn-outline-danger"  value="cancel" />
                        {/* <button type="button" class="btn btn-outline-danger">delete</button> */}
                    </div>
                </form>
                </div>
            </div>
        </div>
        
    );
};