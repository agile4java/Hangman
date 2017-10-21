var missedCount;
var interval = 7;
var arcInterval = 50;

function drawHangman() {

    canvas = document.getElementById("hanger");
    ctx = canvas.getContext("2d");
    missedCount++;

    if (missedCount === 1) {
        ctx.moveTo(25, 350);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var dx = 150;
        var dy = 0;
        var i = 1;
        var id = setInterval(drawLine, interval);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.lineTo((25 + (dx * (.01 * i))), 350);
                ctx.stroke();
                i++;
            }

        }
    }
    if (missedCount === 2) {
        var sx = 100;
        var sy = 350;
        var dx = 0;
        var dy = -300;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var i = 1;
        var id = setInterval(drawLine, interval);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.lineTo((sx + (dx * (.01 * i))), (sy + (dy * (.01 * i))));
                ctx.stroke();
                i++;
            }

        }
    }
    if (missedCount === 3) {
        var sx = 97.5;
        var sy = 50;
        var dx = 107.5;
        var dy = 0;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var i = 1;
        var id = setInterval(drawLine, interval);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.lineTo((sx + (dx * (.01 * i))), (sy + (dy * (.01 * i))));
                ctx.stroke();
                i++;
            }

        }
    }
    if (missedCount === 4) {
        var sx = 200;
        var sy = 50;
        var dx = 0;
        var dy = 50;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var i = 1;
        var id = setInterval(drawLine, interval / 2);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.lineTo((sx + (dx * (.01 * i))), (sy + (dy * (.01 * i))));
                ctx.stroke();
                i++;
            }

        }
    }
    if (missedCount === 5) {
        var sx = 200;
        var sy = 125;
        var dx = 0;
        var dy = 50;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var i = 1;
        var id = setInterval(drawLine, interval);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.beginPath();
                ctx.arc(sx, sy, 25, 0, (2 * Math.PI * (0.1 * i)));
                ctx.stroke();
                // ctx.lineTo((sx + (dx * (.01 * i))), (sy + (dy * (.01 * i))));

                i++;
            }

        }
    }
    if (missedCount === 6) {
        var sx = 200;
        var sy = 150;
        var dx = 0;
        var dy = 50;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var i = 1;
        var id = setInterval(drawLine, interval);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.lineTo((sx + (dx * (.01 * i))), (sy + (dy * (.01 * i))));
                ctx.stroke();
                i++;
            }

        }
    }
    if (missedCount === 7) {
        var sx = 200;
        var sy = 200;
        var dx = -25;
        var dy = 50;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var i = 1;
        var id = setInterval(drawLine, interval);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.lineTo((sx + (dx * (.01 * i))), (sy + (dy * (.01 * i))));
                ctx.stroke();
                i++;
            }

        }
    }
    if (missedCount === 8) {
        var sx = 200;
        var sy = 200;
        var dx = 25;
        var dy = 50;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var i = 1;
        var id = setInterval(drawLine, interval);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.lineTo((sx + (dx * (.01 * i))), (sy + (dy * (.01 * i))));
                ctx.stroke();
                i++;
            }

        }
    }
    if (missedCount === 9) {
        var sx = 200;
        var sy = 185;
        var dx = -35;
        var dy = -20;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var i = 1;
        var id = setInterval(drawLine, interval);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.lineTo((sx + (dx * (.01 * i))), (sy + (dy * (.01 * i))));
                ctx.stroke();
                i++;
            }

        }
    }
    if (missedCount === 10) {
        var sx = 200;
        var sy = 185;
        var dx = 35;
        var dy = -20;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var i = 1;
        var id = setInterval(drawLine, interval);

        function drawLine() {
            if (i === 100) {
                clearInterval(id);
            } else {
                ctx.lineTo((sx + (dx * (.01 * i))), (sy + (dy * (.01 * i))));
                ctx.stroke();
                i++;
            }

        }
        setTimeout(endAnimation, 1000);


    }
}

function endAnimation() {
    showWord(curWordArray);
    var alphabetBlock = document.getElementById("alphabetBlock");
    while(alphabetBlock.hasChildNodes()){
        alphabetBlock.removeChild(alphabetBlock.firstChild);
    }
    canvas = document.getElementById("hanger");
    ctx = canvas.getContext("2d");

    var xRotation = 200;
    var yRotation = 100;
    var maxAngle = 20;
    var curAngle = 1;
    var increment = 1;
    var id = setInterval(swingInWind, 50);
    var triggerModal = 0;

    function swingInWind() {
        if (curAngle >= maxAngle || (-1 * curAngle) >= maxAngle) {
            increment = increment * (-1);
            triggerModal++;
            console.log("triggerModal = " + triggerModal);
            if(triggerModal === 2){
                console.log("inside triggerModal curly braces if");
                showModal(id);
            }
        }
        ctx.clearRect(0, 0, 400, 300);
        //--------------------------------------------------------------------------
        //Gallows

        ctx.moveTo(25, 350);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";
        var dx = 150;
        var dy = 0;

        ctx.lineTo((25 + dx) , 350);
        ctx.stroke();

        var sx = 100;
        var sy = 350;
        dx = 0;
        dy = -300;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";

        ctx.lineTo((sx + dx), (sy + dy));
        ctx.stroke();

        sx = 97.5;
        sy = 50;
        dx = 107.5;
        dy = 0;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";

        ctx.lineTo((sx + dx), (sy + dy));
        ctx.stroke();

        sx = 200;
        sy = 50;
        dx = 0;
        dy = 50;
        ctx.moveTo(sx, sy);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000000";

        ctx.lineTo((sx + dx), (sy + dy));
        ctx.stroke();

        //--------------------------------------------------------------------------------------
            ctx.beginPath();
            ctx.save();
            ctx.translate(xRotation, yRotation);
            ctx.rotate(curAngle * Math.PI / 180);
            ctx.translate(-xRotation, -yRotation);
            //drawHead
            var sx = 200;
            var sy = 125;
            var dx = 0;
            var dy = 50;

            ctx.lineWidth = 5;
            ctx.strokeStyle = "#000000";


            ctx.arc(sx, sy, 25, 0, (2 * Math.PI));


            //drawBody
            for (i = 0; i < 5; i++) {
                //torso
                if (i === 0) {
                    sx = 200;
                    sy = 150;
                    dx = 0;
                    dy = 50;

                }
                //left leg
                if (i === 1) {
                    sx = 200;
                    sy = 200;
                    dx = -25;
                    dy = 50;
                }
                //right leg
                if (i === 2) {
                    sx = 200;
                    sy = 200;
                    dx = 25;
                    dy = 50;
                }
                //left arm
                if (i === 3) {
                    sx = 200;
                    sy = 185;
                    dx = -35;
                    dy = -20;
                }
                //right arm
                if (i === 4) {
                    sx = 200;
                    sy = 185;
                    dx = 35;
                    dy = -20;
                }
                ctx.moveTo(sx, sy);
                ctx.lineTo((sx + dx),(sy + dy));



            }
        ctx.stroke();
        ctx.restore();
        curAngle += increment;

    }
}