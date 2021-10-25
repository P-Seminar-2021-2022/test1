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

        var video = document.querySelector('.video');
        console.log(video);
        video.addEventListener('click', function() {
            window.location = "https://cybersift.io"
        }, );
    }
});

AFRAME.registerComponent('href', {
    schema: {
        default: ''
    },

    boundClickHandler: undefined,

    clickHandler: function hrefClickHandler() {
        var url = this.data;
        var target = this.el.getAttribute('target');
        console.log('link to ' + url);
        if (url && url[0] === '#') { // in-page anchor
            var ele = document.querySelector(url);
            var cams = document.querySelectorAll('a-camera');
            if (ele && cams) {
                var targetPosition = ele.getAttribute('position');
                console.log('focus camera to position:' +
                    JSON.stringify(targetPosition));
                cams[0].setAttribute('position', targetPosition);
                window.location.hash = url;
            } else {
                console.log('#id or a-camera is not defined');
            }
        } else { // normal hyper link
            if (target) {
                var animation = '';
                var exitAnimation = null;
                console.log('target to ' + target);
                if (target.indexOf('#') >= 0) {
                    var li = target.split('#');
                    target = li[0];
                    animation = li[1];
                    console.log('target to ' + target + ' & animate ' + animation);
                }
                switch (target) {
                    case '_blank':
                        if (animation) {
                            exitAnimation = document.getElementById(animation);
                            exitAnimation.addEventListener('animationend',
                                function animationendHandler() {
                                    exitAnimation.removeEventListener('animationend',
                                        animationendHandler);
                                    window.open(url);
                                });
                            this.el.emit('href');
                        } else {
                            window.open(url);
                        }
                        break;
                    case 'window':
                    default:
                        if (animation) {
                            exitAnimation = document.getElementById(animation);
                            exitAnimation.addEventListener('animationend',
                                function animationendHandler() {
                                    exitAnimation.removeEventListener('animationend',
                                        animationendHandler);
                                    window.location.href = url;
                                });
                            this.el.emit('href');
                        } else {
                            window.location.href = url;
                        }
                        break;
                }
            } else {
                window.location.href = url;
            }
        }
    },

    /**
     * Called once when component is attached. Generally for initial setup.
     */
    init: function() {
        this.boundClickHandler = this.clickHandler.bind(this);
        this.el.addEventListener('click', this.boundClickHandler);
    },

    /**
     * Called when a component is removed (e.g., via removeAttribute).
     * Generally undoes all modifications to the entity.
     */
    remove: function() {
        this.el.removeEventListener('click', this.boundClickHandler);
    }
});