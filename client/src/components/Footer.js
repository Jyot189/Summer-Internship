export const Footer =()=>{
    return (
        <>
            <footer class="bg-light fixed-bottom text-center text-lg-start">
                <div class="text-center p-3">
                <img src={`${process.env.REACT_APP_HOSTED_URL}site-logo.png`} alt="logo" width="40" height="40"/>
                    © 2023 Copyright:
                </div>
            </footer>
            
        </>
    );
};
