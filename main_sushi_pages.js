

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












/*ANIMATIONS*/

var logo = document.querySelector('.logo_header')
var headerH1 = document.querySelector('.header_h1')
var phonesHeader = document.querySelector('.phones_header')
var locationWrapper = document.querySelector('.location_wrapper')
var actionWrapper = document.querySelector('.action_wrapper')
var leftsideHeaderH1 = document.querySelector('.leftside_header_h1')

window.onload = setTimeout(function(){
    logo.classList.add('animated')
    headerH1.classList.add('animated')
    phonesHeader.classList.add('animated')
    locationWrapper.classList.add('animated')
    actionWrapper.classList.add('animated')
},270)



window.onload = setTimeout(function(){
    sushiWrapper.classList.add('animated')
    makiWrapper.classList.add('animated')
    krevetkiWrapper.classList.add('animated')
    gunkansWrapper.classList.add('animated')
    setsWrapper.classList.add('animated')
    rollWrapper.classList.add('animated')
    leftsideHeaderH1.classList.add('animated')
}, 270)


