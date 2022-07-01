/*==================== SHOW MENU ====================*/
const showMenu = () =>{
    const stake = document.querySelector('.box__button1'),
    unstake = document.querySelector('.box__button2')
    
    // Validate that variables exist
    if(stake && unstake){
        stake.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            alert('Cannot Stake Now. Please try again later')
        })
        unstake.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            alert('Cannot Untake Now. Please try again later')
        })
    }
}
showMenu()


