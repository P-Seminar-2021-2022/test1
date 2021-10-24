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

    var p = document.querySelector('.box').object3D;
    console.log(p);
};

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