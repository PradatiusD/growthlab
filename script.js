angular.module('growthLab', [])

.directive('cardFlip', function(){

  var flip = function () {
      $(this).toggleClass('flipped');
  };

  return {
    template: function(scope, attrs){
    
      return  '<article class="flipHolder">'+
                '<div class="card">'+
                  '<figure class="front" style=background-image:url('+attrs.front+')></figure>'+
                  '<figure class="back"  style=background-image:url('+attrs.back+') ></figure>'+
                '</div>'+
              '</article>';
    },
    link: function(scope, element, attrs){


      var totalWidth = 303+361+427+367;
      var totalHeight = 388*2;
      var widthHeightStyle ='height:'+attrs.height/totalHeight*100+'%;width:'+attrs.width/totalWidth*100+'%;"';

      var $elem = jQuery(element).find('.card');
      $elem.click(flip);
      jQuery(element).attr('style',widthHeightStyle);
    }
  };
});

function setFlippyCanvas() {
  var $flippyCanvas = jQuery(".flippy-container");
  $flippyCanvas.height($flippyCanvas.width()*(645/1200));
}

jQuery(document).ready(setFlippyCanvas);
jQuery(window).resize(setFlippyCanvas);