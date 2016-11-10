var text = "asdpokaspokpasdko<br>dfsaijasiodfjioajsdf<br>asdfokasdfkaosdfkoasdfk<br>asdfjasodfjaosdf";
var code = document.getElementById('code');
var i = 0;

var INPUT_INCREMENT = 10;

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                callback(undefined, rawFile.response);
            } else {
                callback('Couldn\'t load file ' + file);
            }
        }
    };

    rawFile.send(null);
}

readTextFile('assets/hacks/raw/Javascript.txt', function(err, code){
    console.dir(code);

    text = code;
});

window.onkeydown = function (event) {
    if(event['code'] == "Backspace"){
        i -= INPUT_INCREMENT;

        if(i < 1){
            i = 0;
        }
    }else {
        i += INPUT_INCREMENT;
    }

    code.innerHTML = text.substr(0, i).replace(/·/g, '<br>').replace(/ø/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    code.scrollTop = code.scrollHeight;

    console.dir(code.scrollTop + "=" + code.scrollHeight);
};

var global;

var ticks = 0, on = false;
function draw() {
    ticks++;
    if (ticks >= 50) {
        on = !on;
        ticks = 0;
    }

    if (on) {
        code.innerHTML = text.substr(0, i).replace(/·/g, '<br>').replace(/ø/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;') + "|";
    }else{
        code.innerHTML = text.substr(0, i).replace(/·/g, '<br>').replace(/ø/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    }

    global = requestAnimationFrame(draw);
};


global = requestAnimationFrame(draw);