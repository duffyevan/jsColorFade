var r = 2;
    var g = 252;
    var b = 128;
    var dr = 1;
    var dg = 2;
    var db = -1;
    setInterval(frame, 30);

    
    function frame(){
        r+=dr;
        g+=dg;
        b+=db;

        if (r == 254 || r == 0){
            dr *= -1;
            r += dr;
        }
        if (g == 254 || g == 0){
            dg *= -1;
            g += dg;
        }
        if (b == 254 || b == 0){
            db *= -1;
            b += db;
        }
        //document.write(r);
        document.getElementById("animate").style = "background-color: rgb(" + r + ", " + g + ", " + b + ");"
    }
