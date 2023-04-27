/////////////variables//////////////////
var img=document.getElementsByClassName("slideImg");
var circle=document.getElementsByClassName("circle");
var nextBtn=document.getElementById("next");
var prevBtn=document.getElementById("prev");
var slider=document.getElementsByClassName("slider")[0];
var index=0;
var all=document.getElementById("all");
var furniture=document.getElementById("furniture");
var furnishing=document.getElementById("furnishing");
var decoration=document.getElementById("decoration");
var secName=document.getElementsByClassName("secName");
var allItems=document.getElementsByClassName("sec");
var furnitureItems=document.getElementsByClassName("furniture");
var furnishingItems=document.getElementsByClassName("furnishing");
var decorationItems=document.getElementsByClassName("decoration");
var addToCart=document.getElementsByClassName("btn");
var count=document.getElementById("count");
var chairImg=document.getElementsByClassName('chairImg');
var tableImg=document.getElementsByClassName('tableImg');
var buffetImg=document.getElementsByClassName('buffetImg');
var dinningImg=document.getElementsByClassName('dinningImg');
var poufImg=document.getElementsByClassName('poufImg');
var carpetImg=document.getElementsByClassName('carpetImg');
var curtainImg=document.getElementsByClassName('curtainImg');
var wallpaperImg=document.getElementsByClassName('wallpaperImg');
var mirrorImg=document.getElementsByClassName('mirrorImg');
var lampImg=document.getElementsByClassName('lampImg');
var tableauImg=document.getElementsByClassName('tableauImg');
var clockImg=document.getElementsByClassName('clockImg');
var counter=sessionStorage.getItem('count');
var sec=document.getElementsByClassName("sec");
var chair=document.getElementById("Chair");
var table=document.getElementById("Table");
var buffet=document.getElementById("Buffet");
var dinning=document.getElementById("Dinning");
var pouf=document.getElementById("Pouf");
var carpet=document.getElementById("Carpet");
var curtain=document.getElementById("Curtain");
var wallpaper=document.getElementById("Wallpaper");
var mirror=document.getElementById("Mirror");
var lamp=document.getElementById("Lamp");
var tableau=document.getElementById("Tableau");
var clock=document.getElementById("Clock");
var products=document.getElementsByClassName("products");
count.innerHTML=sessionStorage.getItem('count')||0;
var interv=setInterval(increase,2000);
/////////////Slider//////////////////
function hideImg(){
    img[index].classList.remove("activeSlide");
    circle[index].classList.remove("activeCir");
}
function showImg(){
    img[index].classList.add("activeSlide");
    circle[index].classList.add("activeCir");
}
function increase(){
    hideImg();
    index++;
    if(index==img.length){
        index=0;
    }
    showImg();
}
function decrease(){
    hideImg();
    index--;
    if(index<0){
        index=img.length-1;
    }
    showImg();
}
nextBtn.addEventListener('click',increase)
prevBtn.addEventListener('click',decrease)
slider.addEventListener('mouseenter',function(){
    clearInterval(interv);
})
slider.addEventListener('mouseleave',function(){
    interv=setInterval(increase,2000);
})
/////////////Categories/////////////////
function changeImg(category){
    for(var i=0;i<category.length;i++){
        if(category[i].classList.contains('activeImg')){
            category[i].classList.remove('activeImg')
        }
    }
    var indx=Math.floor(Math.random()*category.length);
    category[indx].classList.add('activeImg')
}
curtain.addEventListener('mouseenter',function(){
    changeImg(curtainImg);
})
carpet.addEventListener('mouseenter',function(){
    changeImg(carpetImg);
})
chair.addEventListener('mouseenter',function(){
    changeImg(chairImg);
})
clock.addEventListener('mouseenter',function(){
    changeImg(clockImg);
})
buffet.addEventListener('mouseenter',function(){
    changeImg(buffetImg);
})
lamp.addEventListener('mouseenter',function(){
    changeImg(lampImg);
})
pouf.addEventListener('mouseenter',function(){
    changeImg(poufImg);
})
dinning.addEventListener('mouseenter',function(){
    changeImg(dinningImg);
})
table.addEventListener('mouseenter',function(){
    changeImg(tableImg);
})
tableau.addEventListener('mouseenter',function(){
    changeImg(tableauImg);
})
wallpaper.addEventListener('mouseenter',function(){
    changeImg(wallpaperImg);
})
mirror.addEventListener('mouseenter',function(){
    changeImg(mirrorImg);
})
//////////////filter Categories/////////////////
function disableAll(){
    for(var i=0;i<secName.length;i++){
        if(secName[i].classList.contains('activeName')){
            secName[i].classList.remove('activeName')
        }
    }
    for(var i=0;i<allItems.length;i++){
        allItems[i].style.display="none";
    }
}
function displayCategory(name,items){
    disableAll();
    name.classList.add("activeName");
    for(var i=0;i<items.length;i++){
        items[i].style.display="block";
} 
}
all.addEventListener('click',function(){
    displayCategory(all,allItems);
})
furniture.addEventListener('click',function(){
    displayCategory(furniture,furnitureItems);
})
furnishing.addEventListener('click',function(){
    displayCategory(furnishing,furnishingItems);
})
decoration.addEventListener('click',function(){
    displayCategory(decoration,decorationItems);
})
/////////////activate Category///////////
function deactivateSec(){
    for (var i=0;i<sec.length;i++){
        if (sec[i].classList.contains('activeSec')){
            sec[i].classList.remove('activeSec');
        }
    }
}
function activateSec(id){
    deactivateSec();
    document.getElementById(id).classList.add('activeSec');
}
/////////////Display Products////////////
function hideAll(){
    for(var i=0;i<products.length;i++){
        if(products[i].classList.contains('activePro')){
            products[i].classList.remove('activePro');
        }
        
    }
}
function showProducts(categoryName){
    hideAll();
    document.getElementsByClassName('third')[0].style.display='block';
    document.getElementById(categoryName).classList.add('activePro');
}
curtain.addEventListener('click',function(){
    showProducts('curtainPro');
    activateSec('Curtain');
})
carpet.addEventListener('click',function(){
    showProducts('carpetPro');
    activateSec('Carpet');
})
chair.addEventListener('click',function(){
    showProducts('chairPro');
    activateSec('Chair');
})
clock.addEventListener('click',function(){
    showProducts('clockPro');
    activateSec('Clock');
})
buffet.addEventListener('click',function(){
    showProducts('buffetPro');
    activateSec('Buffet');
})
lamp.addEventListener('click',function(){
    showProducts('lampPro');
    activateSec('Lamp');
})
pouf.addEventListener('click',function(){
    showProducts('poufPro');
    activateSec('Pouf');
})
dinning.addEventListener('click',function(){
    showProducts('dinningPro');
    activateSec('Dinning');
})
table.addEventListener('click',function(){
    showProducts('tablePro');
    activateSec('Table');
})
tableau.addEventListener('click',function(){
    showProducts('tableauPro');
    activateSec('Tableau');
})
wallpaper.addEventListener('click',function(){
    showProducts('wallpaperPro');
    activateSec('Wallpaper');
})
mirror.addEventListener('click',function(){
    showProducts('mirrorPro');
    activateSec('Mirror');
})
///////////////Counter/////////////////////
for (var i=0;i<addToCart.length;i++){
    addToCart[i].addEventListener('click',function(){
        counter++;
        sessionStorage.setItem('count',counter);
        count.innerHTML=sessionStorage.getItem('count');
    })
    addToCart[i].addEventListener('click',function(e){
        var button=e.target;
        var shopItem=button.parentElement;
        console.log(shopItem)
        var proName=shopItem.getElementsByClassName('desc')[0].innerHTML;
        var proPrice=shopItem.getElementsByClassName('price')[0].innerHTML;
        console.log(proName,proPrice)
    })
} 