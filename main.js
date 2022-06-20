

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

var sushiContext = document.querySelector('.sushi_context')
var sushiClose = document.querySelector('.close_img_sushi')

var krevetkiContext = document.querySelector('.krevetki_context')
var krevetkiClose = document.querySelector('.close_img_krevetki')

var makiContext = document.querySelector('.maki_context')
var makiClose = document.querySelector('.close_img_maki')

var gunkansContext = document.querySelector('.gunkans_context')
var gunkansClose = document.querySelector('.close_img_gunkans')


sushiWrapper.addEventListener('click', function(){
    sushiContext.classList.toggle('active')
    sushiWrapper.classList.toggle('activated')

    krevetkiContext.classList.remove('active')
    krevetkiWrapper.classList.remove('activated')

    makiContext.classList.remove('active')
    makiWrapper.classList.remove('activated')

    gunkansContext.classList.remove('active')
    gunkansWrapper.classList.remove('activated')

})

sushiClose.addEventListener('click', function(){
    sushiContext.classList.remove('active')
    sushiWrapper.classList.remove('activated')
})



krevetkiWrapper.addEventListener('click', function(){
    krevetkiContext.classList.toggle('active')
    krevetkiWrapper.classList.toggle('activated')

    sushiContext.classList.remove('active')
    sushiWrapper.classList.remove('activated')

    makiContext.classList.remove('active')
    makiWrapper.classList.remove('activated')

    gunkansContext.classList.remove('active')
    gunkansWrapper.classList.remove('activated')

})

krevetkiClose.addEventListener('click', function(){
    krevetkiContext.classList.remove('active')
    krevetkiWrapper.classList.remove('activated')
})




makiWrapper.addEventListener('click', function(){
    makiContext.classList.toggle('active')
    makiWrapper.classList.toggle('activated')

    sushiContext.classList.remove('active')
    sushiWrapper.classList.remove('activated')

    krevetkiContext.classList.remove('active')
    krevetkiWrapper.classList.remove('activated')

    gunkansContext.classList.remove('active')
    gunkansWrapper.classList.remove('activated')

})

makiClose.addEventListener('click', function(){
    makiContext.classList.remove('active')
    makiWrapper.classList.remove('activated')
})




gunkansWrapper.addEventListener('click', function(){
    gunkansContext.classList.toggle('active')
    gunkansWrapper.classList.toggle('activated')

    sushiContext.classList.remove('active')
    sushiWrapper.classList.remove('activated')

    krevetkiContext.classList.remove('active')
    krevetkiWrapper.classList.remove('activated')

    makiContext.classList.remove('active')
    makiWrapper.classList.remove('activated')

})

gunkansClose.addEventListener('click', function(){
    gunkansContext.classList.remove('active')
    gunkansWrapper.classList.remove('activated')
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



.window.onload = setTimeout(function(){
    sushiWrapper.classList.add('animated')
    makiWrapper.classList.add('animated')
    krevetkiWrapper.classList.add('animated')
    gunkansWrapper.classList.add('animated')
    leftsideHeaderH1.classList.add('animated')
}, 270)




