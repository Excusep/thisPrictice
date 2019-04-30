window.onload = function () {
  var c = document.getElementById('myCanvas')
  // 创建context对象
  var ctx = c.getContext('2d')
  ctx.fillStyle = '#ff0000'

  // 参数 x,y方向 宽高
  ctx.fillRect(175,75,175,75)

  // 定义线条开始
  ctx.moveTo(0,0)

  // 定义线条的结束方向
  ctx.lineTo(500,500)

  // 绘制已定义的路径
  ctx.stroke()

  // 起始一条路径或重置当前路径
  ctx.beginPath()

  // 画弧形或者圆 arc(x,y,r,起始角,结束角,顺时针false逆时针true)
  ctx.arc(250,250,40,0,2*Math.PI)
  ctx.stroke()
  ctx.font = '36px Arial'

  // 添加文本 参数(文本，起始x,起始y,允许最大宽)
  ctx.fillText('HELLO WORLD',150,500,200)
  
  // 空心字
  ctx.strokeText('hello world',150,36,200)

  // 创建渐变
  var grd=ctx.createLinearGradient(0,0,200,0);
  grd.addColorStop(0,"red");
  grd.addColorStop(1,"white");
  
  // 填充渐变
  ctx.fillStyle=grd;
  ctx.fillRect(10,10,150,80);
  console.log(ctx)
}