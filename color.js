var header=document.querySelector("h1")
header.style.color='green'
function getRandomcolor(){
    var letters="0123456789ABCDEF";
    var color="#";
    for(for i=0;i<6;i++){
        color+=letters[Math.floor(math.random()*16)];
    }
    function changerHeadercolor()
    colorInput=getRandomcolor()
    header.style.color=getRandomcolor();
    
}
setInterval("changeHeadercolor()",500);