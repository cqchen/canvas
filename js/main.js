window.onload = function map() {
    const canvas = document.getElementById('myCanvas')
    // const pic = document.getElementById('pic')
    // const text = document.getElementsByClassName('text')

    const btn = document.getElementsByClassName('btn'),
          name = document.getElementById('name');
    
    canvas.width = '1000';
    canvas.height = '500';
    
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.textAlign='center';
        ctx.textBaseline='middle';
        ctx.font = "200px microsoft yahei";
        ctx.fillStyle = "#aaa";

        const context = new context(ctx,name);

        function start(){
            context._begin();
        }
        
        
        // let rad = 0,
        //     rad_add = Math.PI/180;
        
        /* 路径函数 */
        // let rectangle = new Path2D();
        // ctx.strokeStyle='red';
        // ctx.beginPath();
        // ctx.translate(500, 250);
        // ctx.moveTo(getX1(rad), getY1(rad));

        // function heart(){
        //     rad += rad_add;
        //     X = getX1(rad);
        //     Y = getY1(rad);
        //     ctx.drawImage(pic,X,Y,25,25);
        //     if (rad > (2*Math.PI)){ //绘制完整的心型线后取消间歇调用 
        //         clearInterval(intervalId);
        //     }
        // }
        // intervalId = setInterval(heart,50);  //设置间歇调用，间隔为100ms
        
        // ctx.stroke();
        
        
        /* 画圆 */
        // ctx.arc(150,75,50,0,Math.PI*2,true);
        // ctx.moveTo(185, 75);
        // ctx.arc(150,75,35,0,Math.PI,false);
        // ctx.moveTo(140,55);
        // ctx.arc(135,55,5,0,Math.PI*2,true);
        // ctx.moveTo(170,55);
        // ctx.arc(165,55,5,0,Math.PI*2,true);

        /* 画弧形 */
        // ctx.arcTo(150, 130, 105, 130, 50);

        /* 画矩形 */
        // rectangle.rect(10,35,50,50);

        /* lineCap =（butt,round,square）线末端样式 */
        /* lineJoin = (round,bevel,miter) , 线连接处样式 */
        /* 线性渐变createLinearGradient(x1, y1, x2, y2) */
        /* 径向渐变createRadialGradient(x1, y1, r1, x2, y2, r2) */

        /* 描边 */
        // ctx.stroke(rectangle);
        /* 填充 */
        // ctx.fillStyle = 'orange';

    }
}

function getX(t){
    return 100 * Math.sin(4*t)*Math.cos(t);
}

function getY(t){
    return 100 * Math.sin(4*t)*Math.sin(t);
}

function getX1(t){  //获取心型线的X坐标
    return 15*(16*Math.pow(Math.sin(t),3))
}

function getY1(t){  //获取心型线的Y坐标
    return -15*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))
}
