angular.module('growthLab', [])

.factory('slideService', function() {
  return {};
})

.controller('SlideController', ['$scope', 'slideService', function($scope, slideService){

  $scope.cards = [
    {
      "width": 303,
      "height": 324,
      "front": "img/teal-bg.png",
      "back": "http://placekitten.com/303/324",
      "class": "chart-left-empty"
    },
    {
      "width": 361,
      "height": 324,
      "front": "img/chart-icon-flat.png",
      "back": "http://placekitten.com/361/324",
      "class": "chart-icon"
    },
    {
      "width": 400,
      "height": 367,
      "front": "img/chevron-up-right-icon-flat.png",
      "back": "http://placekitten.com/400/367",
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
      "front": "img/teal-bg.png",
      "back": "http://placekitten.com/155/146",
      "class": "small-square-top"
    },
    {
      "width": 155,
      "height": 107,
      "front": "img/teal-bg.png",
      "back": "http://placekitten.com/155/107",
      "class": "small-square-bottom"
    },
    {
      "width": 410,
      "height": 388,
      "front": "img/binoculars-icon-flat.png",
      "back": "http://placekitten.com/410/388",
      "class": "binoculars"
    },
    {
      "width": 400,
      "height": 301,
      "front": "img/document-icon-flat.png",
      "back": "img/cat-happy.jpg",
      "class": "document"
    }
  ];

}])

.directive('cardSlide', ['slideService', function(slideService){

  return {
    template: function(scope, attrs){
  
      return  '<article class="flipHolder">'+
                '<div class="card" ng-style="{transitionDuration:speed}">'+
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

      jQuery(element)
        .hover(
          function(){
            var $this = jQuery(this);
            $this.find('.slice-right').transition({
              'translate': '100%, 100%'
            }, 600, 'ease-out');
            $this.find('.slice-left').transition({
              'translate': '-100%, -100%'
            }, 500, 'ease-out');

            $this.find('.back').toggleClass('hovered');

          },function(){
            var $this = jQuery(this);

            $this.find('.slice-right').transition({
              'translate': '0, 0'
            }, 600, 'ease-out');
            $this.find('.slice-left').transition({
              'translate': '-0, -0'
            }, 500, 'ease-out');
            $this.find('.back').toggleClass('hovered');

          })
        .attr('style',widthHeightStyle)
        .find('.card').addClass('animate');
    }
  };
}]);

function setFlippyCanvas() {
  var $flippyCanvas = jQuery(".slide-container");
  $flippyCanvas.height($flippyCanvas.width()*(645/1200));
}

jQuery(document).ready(setFlippyCanvas);
jQuery(window).resize(setFlippyCanvas);