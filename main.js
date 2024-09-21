const canvas = document.querySelector('#workSpace');
const fontColor = document.querySelector('#font-color');
const backgroundColor = document.querySelector('#background-color');
const fontSize = document.querySelector('#font-size')
const downloadBtn = document.querySelector('#download')
const ctx = canvas.getContext('2d');

if(window.innerWidth>=844){
    canvas.width = 800;
    canvas.height = 500;
}else if(window.innerWidth>=620){
    canvas.width = 600;
    canvas.height=600;
}else if(window.innerWidth>=375){
    canvas.width=355
    canvas.height=600
}
ctx.fillStyle=backgroundColor.value;
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle = fontColor.value;
ctx.lineWidth=fontSize.value;
let isDrawing = false;

canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true
    ctx.beginPath();
    ctx.moveTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop)
})

canvas.addEventListener('mousemove',(e)=>{
    if(isDrawing){
        ctx.lineTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop);
        ctx.stroke();
    }
})

canvas.addEventListener('mouseleave',(e)=>{
     isDrawing=false;
     ctx.closePath()
})

canvas.addEventListener('mouseup',(e)=>{
    isDrawing=false;
    ctx.closePath()
})

const bgChange =(e)=>{
    ctx.fillStyle=e;
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

const fontColorChange = (e)=>{
    ctx.strokeStyle = e;
}

const fontSizeChange = (e)=>{
    ctx.lineWidth=e;
}

const clearCanvas =()=>{
 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.fillStyle=backgroundColor.value;
 ctx.fillRect(0,0,canvas.width,canvas.height);
}

const download =()=>{
    const aTag = document.createElement('a');
    aTag.href=canvas.toDataURL("image/jpeg");
    aTag.download=`canvas-${new Date()}.jpeg`;
    aTag.click();
}