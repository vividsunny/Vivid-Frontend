import $ from 'jquery';
import "masonry-layout/dist/masonry.pkgd.js";
import "imagesloaded/imagesloaded.pkgd.js";
import AOS from 'aos';



  // or simply just AOS.init();
  AOS.init({
    // initialise with other settings
    duration : 2000,
    once: true
  });

(function( $ ) {

    $(function () {
        
        const Masonry = require('masonry-layout')
        const imgloaded = require('imagesloaded')
        const elem = document.querySelector('.grid')
        var imgLoad = imgloaded( elem )
            function onAlways() {
                const msnry = new Masonry( elem, {
                    columnWidth: '.grid-sizer',
                    itemSelector: '.grid-item',
                    percentPosition: true
                })
        }
        if (elem) {
            imgLoad.on( 'always', onAlways )
        }

    });
    
})( $ );