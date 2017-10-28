var urlstring = '';
var mytop = 0;
var myright = 0;
var myheight = 300;

function expandMenu(){
    document.getElementById("menu").addEventListener("click",function(){
        document.getElementById("controls").style.top = "470px";
    })
}
function changeColor(){
    document.getElementById("color").addEventListener("change",function(){
        var theColor = document.getElementById("color").value;
        document.getElementById("titletext").style.color = theColor;
        document.getElementById("descriptiontext").style.color = theColor;
    })

}
function changeDescription(){
    document.getElementById("description").addEventListener("keyup",function(){
    document.getElementById("descriptiontext").innerHTML = document.getElementById("description").value;
    })    
}
function changeTitle(){
    document.getElementById("title").addEventListener("keyup",function(){
    document.getElementById("titletext").innerHTML = document.getElementById("title").value;
    })    
}
function changeBG(){
    document.getElementById("backgroundimage").addEventListener("keydown",function(ev){
        if (ev.keyCode == 13){
            urlstring = document.getElementById("backgroundimage").value;
            document.getElementById("background").style.backgroundImage = 'url(' + urlstring + ')'
        }
    })
    
}
function moveBG(){
        document.addEventListener("keydown",function(ev){
        if (ev.keyCode == 40){
            mytop += 10
            document.getElementById("background").style.backgroundPositionY = mytop +"px";
        } else if (ev.keyCode == 38){
            mytop -= 10
            document.getElementById("background").style.backgroundPositionY = mytop +"px";
        } else if (ev.keyCode == 39){
            myright += 10
            document.getElementById("background").style.backgroundPositionX = myright +"px";
        } else if(ev.keyCode == 37){
            myright -= 10
            document.getElementById("background").style.backgroundPositionX = myright +"px";
        }
    })
    
}
function increaseheight(){
            document.addEventListener("keydown",function(ev){
        if (ev.keyCode == 187){
            myheight += 10
            document.getElementById("background").style.height = myheight +"px";
        } else if (ev.keyCode == 189){
            myheight -= 10
            document.getElementById("background").style.height = myheight +"px";

}
            })
}
function detectString(){
    document.getElementById("backgroundimage").addEventListener("keyup",function(){
    var urlstring = document.getElementById("backgroundimage").value;
    var t = urlstring.includes("horse");
    var x = urlstring.includes("night");
    var y = urlstring.includes("mountain");
    var epicstring = urlstring.indexOf("epic");
        if (t == true){
    document.getElementById("background").style.backgroundImage = "url('bg1.jpg')" 
    } else if (x == true){
     document.getElementById("background").style.backgroundImage = "url('bg2.jpg')" 
    } else if(y == true){
         document.getElementById("background").style.backgroundImage = "url('bg3.jpg')" 
    }
     if (epicstring >= 0){
        document.getElementById("background").style.backgroundImage = "url('bg4.jpg')" 
    }
    })
}
                                      

expandMenu();
changeBG();
changeTitle();
changeDescription();
changeColor();
moveBG();
increaseheight();
detectString();
