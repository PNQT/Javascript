const results = [
    { name: 'Bin', count: 1024, color: 'red' },
    { name: 'Box', count: 2048, color: 'blue' },
    { name: 'Jar', count: 3192, color: 'yellow' },
    { name: 'Can', count: 4096, color: 'green' },
    { name: 'Cup', count: 512, color: 'orange' },
    { name: 'Bowl', count: 256, color: 'purple' },
]

   var cx5 = document.getElementById('hinh6').getContext('2d');
   var total = results.reduce((sum, { count }) => sum + count, 0);
   var currentAngle = -0.5 * Math.PI;
    for (var result of results) {
         var sliceAngle = (result.count / total) * 2 * Math.PI;
         cx5.beginPath();
         cx5.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
         currentAngle += sliceAngle;
         cx5.lineTo(100, 100);
         cx5.fillStyle = result.color;
         cx5.fill();
    }

// let cx = document.querySelector("canvas").getContext("2d");
// cx.font = "28px Georgia";
// cx.fillStyle = "fuchsia";
// cx.fillText("I can draw text, too!", 10, 50);
// let cx = document.querySelector("canvas").getContext("2d");
// function branch(length, angle, scale) {
//     cx.fillRect(0, 0, 1, length);
//     if (length < 8) return;
//     cx.save();
//     cx.translate(0, length);
//     cx.rotate(-angle);
//     branch(length * scale, angle, scale);
//     cx.rotate(2 * angle);
//     branch(length * scale, angle, scale);
//     cx.restore();
// }
// cx.translate(300, 0);
// branch(60, 0.5, 0.8);


var cx = document.querySelector("canvas").getContext("2d");
    cx.moveTo(100, 100)
    cx.lineTo(200,100)
    cx.lineTo(250,200)
    cx.lineTo(50,200)
    cx.closePath()
    cx.stroke()

var cx1 = document.querySelector("#hinh2").getContext("2d");
    cx1.moveTo(100, 100);
    cx1.lineTo(200, 200)
    cx1.lineTo(100, 300)
    cx1.lineTo(0  , 200)
    cx1.closePath()
    cx1.fill()

var cx2 = document.querySelector("#hinh3").getContext("2d");
    const truoc = 100
    const sau = 200
    const cah = 20
    let dai = 100
    cx2.moveTo(truoc, dai)
    for (let i = 1; i < 13; i++) {
        if (i %2 === 0) {
            dai += cah
            cx2.lineTo(truoc, dai)
        }
        else {
            dai += cah
            cx2.lineTo(sau, dai)
        }
    }
    cx2.stroke()

    const cx3 = document.querySelector('#hinh4').getContext('2d');
    const centerX = 300;
    const centerY = 190;
    const maxRadius = 120; 
    const angleStep = 0.1; 

    cx3.strokeStyle = "black";
    cx3.lineWidth = 1;

    cx3.beginPath();
    let angle = 0;
    for (let radius = 0; radius <= maxRadius; radius += 0.5) {
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      cx3.lineTo(x, y);
      angle += angleStep;
    }
    cx3.stroke();
  
    

    const canvas = document.querySelector('#hinh5');
    const cx4 = canvas.getContext('2d');

    const X = canvas.width / 2;
    const Y = canvas.height / 2;
    const radius = 100;
    const points = 8;

    cx4.beginPath();
    cx4.moveTo(X + radius, Y);

    for (let i = 0; i < points; i++) {
      const angle2 = ((Math.PI * 2) / points) * (i + 1);
      
      const x2 = X + radius * Math.cos(angle2);
      const y2 = Y + radius * Math.sin(angle2);
      
      cx4.quadraticCurveTo(X, Y, x2, y2);
    }

    cx4.closePath();
    cx4.fillStyle = "gray";
    cx4.fill();