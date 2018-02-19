(function() {

    window.onload = function() {
        Particles.init({
            selector: '.background',
            maxParticles: 100,
            connectParticles: true,
            minDistance: 50,
            sizeVariations: 4
        });
    };
})();
