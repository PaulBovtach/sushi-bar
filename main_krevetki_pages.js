
/*HEADER---*/

var actionH1 = document.querySelector('.action_h1')
var actionArrow = document.querySelector('.arrow_down_img')

var actionWrapper = document.querySelector('.action_wrapper')


actionWrapper.addEventListener('click', function(){
    console.log('click')
    var actionP1 = document.querySelector('.action_p1')
    var actionP2 = document.querySelector('.action_p2')

    actionArrow.classList.toggle('active')
    actionP1.classList.toggle('active')
    actionP2.classList.toggle('active')
    actionWrapper.classList.toggle('active')


})


var actionH1Mob = document.querySelector('.action_h1_mob')
var actionArrowMob = document.querySelector('.arrow_down_img_mob')

var actionWrapperMob = document.querySelector('.action_wrapper_mob')


actionWrapperMob.addEventListener('click', function(){
    console.log('click')
    var actionP1Mob = document.querySelector('.action_p1_mob')
    var actionP2Mob = document.querySelector('.action_p2_mob')

    actionArrowMob.classList.toggle('active')
    actionP1Mob.classList.toggle('active')
    actionP2Mob.classList.toggle('active')
    actionWrapperMob.classList.toggle('active')


})




/*LEFTSIDE_HEADER---*/
var setsWrapper = document.querySelector('.sets_wrapper_left')
var setH3 = document.querySelector('.set_h3')
setsWrapper.addEventListener('mouseover', function(){
    setH3.classList.add('active')
})
setsWrapper.addEventListener('mouseout', function(){
    setH3.classList.remove('active')
})

var rollWrapper = document.querySelector('.roll_wrapper_left')
var rollH3 = document.querySelector('.roll_h3')
rollWrapper.addEventListener('mouseover', function(){
    rollH3.classList.add('active')
})
rollWrapper.addEventListener('mouseout', function(){
    rollH3.classList.remove('active')
})


var sushiWrapper = document.querySelector('.sushi_wrapper')
var sushiH3 = document.querySelector('.sushi_h3')
var sushiImg = document.querySelector('.sushi_img')


sushiWrapper.addEventListener('mouseover', function(){
    sushiImg.classList.add('active')
    sushiH3.classList.add('active')
})
sushiWrapper.addEventListener('mouseout', function(){
    sushiImg.classList.remove('active')
    sushiH3.classList.remove('active')
})




var krevetkiWrapper = document.querySelector('.krevetki_wrapper')
var krevetkiH3 = document.querySelector('.krevetki_h3')
var krevetkiImg = document.querySelector('.krevetki_img')


krevetkiWrapper.addEventListener('mouseover', function(){
    krevetkiImg.classList.add('active')
    krevetkiH3.classList.add('active')
})
krevetkiWrapper.addEventListener('mouseout', function(){
    krevetkiImg.classList.remove('active')
    krevetkiH3.classList.remove('active')
})



var makiWrapper = document.querySelector('.maki_wrapper')
var makiH3 = document.querySelector('.maki_h3')
var makiImg = document.querySelector('.maki_img')


makiWrapper.addEventListener('mouseover', function(){
    makiImg.classList.add('active')
    makiH3.classList.add('active')
})
makiWrapper.addEventListener('mouseout', function(){
    makiImg.classList.remove('active')
    makiH3.classList.remove('active')
})




var gunkansWrapper = document.querySelector('.gunkans_wrapper')
var gunkansImg = document.querySelector('.gunkans_img')
var gunkansH3 = document.querySelector('.gunkans_h3')


gunkansWrapper.addEventListener('mouseover', function(){
    gunkansImg.classList.add('active')
    gunkansH3.classList.add('active')
})
gunkansWrapper.addEventListener('mouseout', function(){
    gunkansH3.classList.remove('active')
    gunkansImg.classList.remove('active')
})






/*CONTEXT_MENUS---*/

setsWrapper.addEventListener('click', function(){
    console.log('skdmdskm')
})


setsWrapper.addEventListener('click', function(){
    document.location.href = "index.html"
})
rollWrapper.addEventListener('click', function(){
    document.location.href = "index_rolls_pages.html"
})
sushiWrapper.addEventListener('click', function(){
    document.location.href = "index_sushi_pages.html"
})
krevetkiWrapper.addEventListener('click', function(){
    document.location.href = "index_krevetki_pages.html"
})
makiWrapper.addEventListener('click', function(){
    document.location.href = "index_maki_pages.html"
})
gunkansWrapper.addEventListener('click', function(){
    document.location.href = "index_gunkans_pages.html"
})










/*MOBILE*/

var burgerBtn = document.querySelector('.menu_header_h1_mob')

burgerBtn.addEventListener('click', function(){

    var mobileMenu = document.querySelector('.mobile_menu')
    mobileMenu.classList.toggle('active')
    burgerBtn.classList.toggle('active')



    sushiWrapper.classList.toggle('active')
    makiWrapper.classList.toggle('active')
    krevetkiWrapper.classList.toggle('active')
    gunkansWrapper.classList.toggle('active')
    setsWrapper.classList.toggle('active')
    rollWrapper.classList.toggle('active')
})