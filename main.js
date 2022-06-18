

/*HEADER---*/

var actionH1 = document.querySelector('.action_h1')
var actionArrow = document.querySelector('.arrow_down_img')




actionArrow.addEventListener('click', function(){
    var actionWrapper = document.querySelector('.action_wrapper')
    var actionP1 = document.querySelector('.action_p1')
    var actionP2 = document.querySelector('.action_p2')

    actionArrow.classList.toggle('active')
    actionP1.classList.toggle('active')
    actionP2.classList.toggle('active')
    actionWrapper.classList.toggle('active')


})




/*LEFTSIDE_HEADER---*/