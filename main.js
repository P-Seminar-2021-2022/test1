//buttons
window.onload = function() {

    document.getElementById('reset').addEventListener("click", function() {
        var p = document.querySelector('.box').object3D;
        p.position.y = 0.5;
        p.rotation.y = 0;
        console.log(p.position.y);
    })

    document.getElementById('movY1').addEventListener("click", function() {
        var p = document.querySelector('.box').object3D;
        p.position.y = parseInt(p.position.y) + 1;
        console.log(p.position.y);
    })

    document.getElementById('rotY45').addEventListener("click", function() {
        var p = document.querySelector('.box').object3D;
        console.log(p.rotation.y);
        p.rotation.y = (parseInt(p.rotation.y) + 45) % 360;
    })

    document.getElementById('movX1').addEventListener("click", function() {
        var p = document.querySelector('.model').object3D;
        p.position.x = parseInt(p.position.x) + 1;
        console.log(p);
    })

};

//hide elements when marker lost, show them when marker found
var marker = document.querySelector('a-marker');
console.log(marker);
marker.addEventListener("markerFound", (e) => {

    var p = document.querySelector('.box').object3D;
    p.visible = "true";
});
marker.addEventListener("markerLost", (e) => {
    a
    var p = document.querySelector('.box').object3D;
    p.visible = "false";
});

//toggle video when marker lost/found
AFRAME.registerComponent('videohandler', {
    init: function() {
        var marker = this.el;
        this.vid = document.querySelector("#vid");

        marker.addEventListener('markerFound', function() {
            this.toggle = true;
            this.vid.play();
        }.bind(this));

        marker.addEventListener('markerLost', function() {
            this.toggle = false;
            this.vid.pause();
        }.bind(this));
    },
});

AFRAME.registerComponent('artoolkit', {
    init: function() {
        var sceneEl = document.querySelector('a-scene').querySelector('a-assets');

        var video = document.getElementsByClassName('video');
        video[0].addEventListener('click', function() {
            alert('click')
        }, false);
    }
});