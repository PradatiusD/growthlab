angular.module('growthLab', [])

.controller('FlippyController', ['$scope', function($scope){
  
  $scope.cards = [
    {
      "width": 303,
      "height": 324,
      "front": "img/chart-left-empty.png",
      "back": "img/cat-happy.jpg",
      "class": "chart-left-empty"
    },
    {
      "width": 303,
      "height": 324,
      "front": "img/chart-left-empty.png",
      "back": "img/cat-happy.jpg",
      "class": "chart-left-empty"
    },
    {
      "width": 361,
      "height": 324,
      "front": "img/chart-icon.png",
      "back": "img/cat-happy.jpg",
      "class": "chart-icon"
    },
    {
      "width": 400,
      "height": 367,
      "front": "img/chevron-up-right-icon.png",
      "back": "img/cat-happy.jpg",
      "class": "chevron-up-right"
    },
    {
      "width": 653,
      "height": 454,
      "front": "img/welcome-text.png",
      "back": "img/cat-happy.jpg",
      "class": "welcome-text"
    },
    {
      "width": 155,
      "height": 146,
      "front": "img/small-square-top.png",
      "back": "img/cat-happy.jpg",
      "class": "small-square-top"
    },
    {
      "width": 155,
      "height": 107,
      "front": "img/small-square-bottom.png",
      "back": "img/cat-happy.jpg",
      "class": "small-square-bottom"
    },
    {
      "width": 410,
      "height": 388,
      "front": "img/binoculars-icon.png",
      "back": "img/cat-happy.jpg",
      "class": "binoculars"
    },
    {
      "width": 400,
      "height": 301,
      "front": "img/document-icon.png",
      "back": "img/cat-happy.jpg",
      "class": "document"
    }
  ];

}])

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