jQuery( function() {
    initToggleMobileMenu();
    initSetInitialHeightToMenu();
});

jQuery( window ).on( 'resize', function() {
    initSetInitialHeightToMenu();
});

function initToggleMobileMenu() {
    var header = jQuery( "#main-header" );

    header.find( ".hamburger" ).on( "click", function(e) {
        e.preventDefault();

        if( header.hasClass( "mobile-menu-active" ) ) {
            header.removeClass( "mobile-menu-active" ).addClass( "mobile-menu-exit" );

            jQuery( "body" ).removeClass( "mobile-menu-enabled" );

            setTimeout( function() {
                header.removeClass( "mobile-menu-exit" );
            }, 1000);
        } else {
           header.addClass( "mobile-menu-active" );

           jQuery( "body" ).addClass( "mobile-menu-enabled" );
        }
    });
}

function initSetInitialHeightToMenu() {
    if( jQuery( window ).width() < 1025 ) {
        var ctr = 0.1;
        var header = jQuery( "#main-header" );

        header.find( ".navigation-menu .menu-item" ).each( function() {
            jQuery( this ).css({ height: jQuery( this ).find( "span" ).outerHeight() });
            jQuery( this ).find( "span" ).attr( "style", `--delay: ${ ctr }s`)

            ctr = ctr + 0.1;
        });
    }
}