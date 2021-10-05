jQuery(function(){

    //functions
    initMatchHeight();
});

function initMatchHeight(){
    var $opt1 = {
        byRow: false,
        property: 'height',
        target: null,
        remove: false
    };

    var $opt2 = {
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    };
    jQuery('.latest-articles-items .latest-articles-item img').matchHeight($opt2);
}