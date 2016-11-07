var text = "asdpokaspokpasdko<br>dfsaijasiodfjioajsdf<br>asdfokasdfkaosdfkoasdfk<br>asdfjasodfjaosdf";
var code = document.getElementById('code');
var i = 0;

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

window.onkeypress = function (event) {
    i++;
    code.innerHTML = text.substr(0, i);
};

var global;

var ticks = 0, on = false;
function draw() {
    ticks++;
    if (ticks >= 50) {
        on = !on;
        ticks = 0;
    }

    console.dir(on);
    if (on) {
        code.innerHTML = text.substr(0, i) + "|";
    }else{
        code.innerHTML = text.substr(0, i);
    }

    global = requestAnimationFrame(draw);
};


global = requestAnimationFrame(draw);