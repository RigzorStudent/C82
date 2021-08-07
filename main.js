var src_y,src_x;
var widthline=1;
var mouseEvent=""
color="gray"
Canvas=document.getElementById("myCanvas")
ctx=Canvas.getContext("2d")

Canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown (e)
{ mouseEvent="mousedown"
}

Canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup (e)
{ mouseEvent="mouseup"
}

Canvas.addEventListener("mouseLeave",my_mouseleave)
function my_mouseleave (e)
{ mouseEvent="mouseLeave"
}

Canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove (e)
{ dest_x=e.clientX - Canvas.offsetLeft
    dest_y=e.clientY - Canvas.offsetTop
   if(mouseEvent=="mousedown")
   {ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthline
    ctx.arc(dest_x,dest_y,40,0,2*Math.PI)
    ctx.stroke()

   }
   src_x=dest_x
   src_y=dest_y
}

