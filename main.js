window.onload = function() {
    document.getElementById('movY1').addEventListener("click", function() {
        var p = document.querySelector('.box').object3D;
        p.position.y = parseInt(p.position.y) + 1;
    })

    document.getElementById('rotY45').addEventListener("click", function() {
        var p = document.querySelector('.box').object3D;
        console.log(p.rotation.y);
        p.rotation.y = (parseInt(p.rotation.y) + 45) % 360;
    })
};