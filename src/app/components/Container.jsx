import Navbar from "./Navbar";

export default function Container({children}){
    return(
        <>
            <Navbar/>
            {children}
        </>
    )
}