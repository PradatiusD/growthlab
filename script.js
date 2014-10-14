angular.module('growthLab', [])

.factory('slideService', function() {
  return {};
})

.controller('SlideController', ['$scope', 'slideService', function($scope, slideService){

  $scope.cards = [
    {
      "width": 303,
      "height": 324,
      "front": "img/investor.jpg",
      "back": "img/teal-bg.png",
      "class": "chart-left-empty"
    },
    {
      "width": 361,
      "height": 324,
      "front": "img/investor.jpg",
      "back": "img/chart-icon-flat.png",
      "class": "chart-icon"
    },
    {
      "width": 400,
      "height": 367,
      "front": "img/traffic.jpg",
      "back":  "img/chevron-up-right-icon-flat.png",
      "class": "chevron-up-right"
    },
    {
      "width": 653,
      "height": 454,
      "front": "img/traffic.jpg",
      "back": "img/welcome-text.png",
      "class": "welcome-text"
    },
    {
      "width": 155,
      "height": 146,
      "front": "img/investor.jpg",
      "back": "img/teal-bg.png",
      "class": "small-square-top"
    },
    {
      "width": 155,
      "height": 107,
      "front": "img/laptop.jpg",
      "back": "img/teal-bg.png",
      "class": "small-square-bottom"
    },
    {
      "width": 410,
      "height": 388,
      "front": "img/closeup.jpg",
      "back": "img/binoculars-icon-flat.png",
      "class": "binoculars"
    },
    {
      "width": 400,
      "height": 301,
      "front": "img/laptop.jpg",
      "back": "img/document-icon-flat.png",
      "class": "document"
    }
  ];

}])

.directive('cardSlide', ['slideService', function(slideService){

  return {
    template: function(scope, attrs){
  
      return  '<article class="flipHolder">'+
                '<div class="card">'+
                  '<figure class="front slice-right" style="background-image:url('+attrs.front+')"></figure>'+
                  '<figure class="front slice-left" style="background-image:url('+attrs.front+')"></figure>'+
                  '<figure class="back"  style="background-image:url('+attrs.back+')" ></figure>'+
                '</div>'+
              '</article>';
    },
    link: function(scope, element, attrs){

      var totalWidth = 303+361+427+367;
      var totalHeight = 388*2;
      var widthHeightStyle ='height:'+attrs.height/totalHeight*100+'%;width:'+attrs.width/totalWidth*100+'%;"';
      $card = jQuery(element);

      if (scope.card.class != 'welcome-text') {
        $card.hover(
          function(){
            var $this = jQuery(this);

            $this.find('.slice-right').transition({
              'translate': '0, 0',
              'delay': 300,
              'duration': 400,
              'easing': 'ease-out'
            });

            $this.find('.slice-left').transition({
              'translate': '-0, -0',
              'duration': 600,
              'easing':'ease-out'
            });

            $this.find('.back').toggleClass('hovered');

          },function(){
            var $this = jQuery(this);

            $this.find('.slice-right').transition({
              'translate': '100%, -100%',
              'duration': 600,
              'easing': 'ease-in'
            });

            $this.find('.slice-left').transition({
              'translate': '-100%, 100%',
              'duration': 600,
              'easing': 'ease-in'
            });

            $this.find('.back').toggleClass('hovered');

          });
      }
        $card.attr('style',widthHeightStyle);
    }
  };
}]);

function setFlippyCanvas() {
  var $flippyCanvas = jQuery(".slide-container");
  $flippyCanvas.height($flippyCanvas.width()*(645/1200));
}

jQuery(document).ready(setFlippyCanvas);
jQuery(window).resize(setFlippyCanvas);