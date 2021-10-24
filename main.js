window.onload = function() {
    document.getElementById('movY1').addEventListener("click", function() {
        var p = document.querySelector('.box').object3D;
        p.position.y = "3";
    })
};