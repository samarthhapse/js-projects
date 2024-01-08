var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
    // as event takes place it passes default parameter
    // here mouemove passes mouseevent={x,y,...,...,....,...,...}
    console.log(dets)
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})