angular.module('growthLab', [])

.factory('slideService', function() {
  return {};
})

.controller('SlideController', ['$scope', 'slideService', function($scope, slideService){

  $scope.cards = [
    {
      "width": 303,
      "height": 324,
      "front": false,
      "back": "img/teal-bg.png",
      "class": "chart-left-empty"
    },
    {
      "width": 361,
      "height": 324,
      "front": "img/financial-management@2x.jpg",
      "back": "img/chart-icon-flat.png",
      "class": "chart-icon"
    },
    {
      "width": 400,
      "height": 367,
      "front": "img/raising-capital@2x.jpg",
      "back":  "img/chevron-up-right-icon-flat.png",
      "class": "chevron-up-right"
    },
    {
      "width": 653,
      "height": 457,
       "front": false,
      "back": "img/welcome-text.png",
      "class": "welcome-text"
    },
    {
      "width": 155,
      "height": 150,
      "front": false,
      "back": "img/teal-bg.png",
      "class": "small-square-top"
    },
    {
      "width": 155,
      "height": 107,
      "front": false,
      "back": "img/teal-bg.png",
      "class": "small-square-bottom"
    },
    {
      "width": 412,
      "height": 388,
      "front": "img/cfo-services@2x.jpg",
      "back": "img/binoculars-icon-flat.png",
      "class": "binoculars"
    },
    {
      "width": 400,
      "height": 301,
      "front": "img/business-modeling@2x.jpg",
      "back": "img/document-icon-flat.png",
      "class": "document"
    }
  ].map(function(card){
    card.front = pd_path.concat(card.front);
    card.back  = pd_path.concat(card.back);
    return card;
  });

  var isSimpleDesign = true;

  $scope.changeCards = function () {
    
    if (isSimpleDesign) {

      $scope.cards = $scope.cards.map(function(card) {
        card.back = card.back.replace('-flat.png', '.png');
        if (card.back == "img/teal-bg.png") {
          card.back = "img/"+ card.class + ".png";
        }
        return card;
      });

      isSimpleDesign = false;


    } else {

      $scope.cards = $scope.cards.map(function(card) {

        if (card.class === "small-square-bottom" || card.class === "small-square-top" || card.class === "chart-left-empty") {
          card.back = "img/teal-bg.png";
        } else if (card.class !== "welcome-text") {
          card.back = card.back.replace('.png','-flat.png');
        }
        
        return card;
      });

      isSimpleDesign = true;
    }
  };

}])

.directive('cardSlide', ['slideService', function(slideService){

  return {
    template: function(scope, attrs){

      return  '<article class="sliceHolder">'+
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

      function isMoving($obj) {
        return $obj.find('.slice-right').queue().length > 1;
      }

      if (scope.card.front) {
        $card.hover(
          function(){
            var $this = jQuery(this);

            if (!isMoving($this)) {
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
            }

            $this.find('.back').toggleClass('hovered');

          },function(){
            var $this = jQuery(this);

            if (!isMoving($this)) {
              
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

            }

            $this.find('.back').toggleClass('hovered');

          });
      }
        $card.attr('style',widthHeightStyle);
    }
  };
}]);

function setFlippyCanvas() {
  var $flippyCanvas = jQuery(".slide-container, .home-section-1");
  $flippyCanvas.height($flippyCanvas.width()*(645/1200));
}

jQuery(document).ready(setFlippyCanvas);
jQuery(window).resize(setFlippyCanvas);