$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
function loadCSS(href) {
    var ss = document.createElement("link");
    ss.rel = "stylesheet";
    ss.href = href;
    document.getElementsByTagName("head")[0].appendChild(ss);
  }
  
  window.onload = function() {
    loadCSS("./assets/bootstrap/bootstrap.min.css");
    loadCSS("./assets/style.css");
  };