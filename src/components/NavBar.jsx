export default function NavBar(){
    //useParams to get diningHall 
    return(
        <div id = "navBar">
            <NavButton hall = {"North Dining"}></NavButton>
            <NavButton hall = {"Yahentamitsi"}></NavButton>
            <NavButton hall = {"South Dining"}></NavButton>
        </div>
    )
}

function NavButton({hall}){
    return(
        <button className = "navButton">{hall}</button>
    )
}