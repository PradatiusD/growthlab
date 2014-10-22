angular.module('growthLab', [])

.factory('slideService', function() {
  return {};
})

.controller('SlideController', ['$scope', 'slideService', function($scope, slideService){

  $scope.cards = [
    {
      "width": 318,
      "height": 330,
      "front": false,
      "back": false,
      "class": "chart-left-empty"
    },
    {
      "width": 94,
      "height": 112,
      "front": false,
      "back": false,
      "class": "chart-left-empty-small"
    },
    {
      "width": 156,
      "height": 112,
      "front": false,
      "back": "img/chart-left-subdued.png",
      "class": "chart-left-subdued"
    },
    {
      "width": 378,
      "height": 329,
      "front": "img/financial-management-v2@2x.jpg",
      "back": "img/chart-icon.png",
      "class": "chart-icon"
    },
    {
      "width": 414,
      "height": 378,
      "front": "img/raising-capital-v2@2x.jpg",
      "back":  "img/chevron-up-right-icon.png",
      "class": "chevron-up-right"
    },
    {
      "width": 281,
      "height": 227,
      "front": false,
      "back":  "img/chevron-right-subdued.png",
      "class": "chevron-right-subdued"
    },
    {
      "width": 281,
      "height": 190,
      "front": false,
      "back":  false,
      "class": "chevron-right-empty"
    },
    {
      "width": 245,
      "height": 126,
       "front": false,
      "back": "img/welcome-left-subdued.png",
      "class": "welcome-left-subdued"
    },
    {
      "width": 687,
      "height": 480,
       "front": false,
      "back": "img/welcome-text.png",
      "class": "welcome-text"
    },
    {
      "width": 166,
      "height": 158,
      "front": false,
      "back": "img/small-square-top.png",
      "class": "small-square-top"
    },
    {
      "width": 166,
      "height": 113,
      "front": false,
      "back": "img/small-square-bottom.png",
      "class": "small-square-bottom"
    },
    {
      "width": 438,
      "height": 405,
      "front": "img/cfo-services-v3@2x.jpg",
      "back": "img/binoculars-icon.png",
      "class": "binoculars"
    },
    {
      "width": 413,
      "height": 307,
      "front": "img/business-modeling-v3@2x.jpg",
      "back": "img/document-icon.png",
      "class": "document"
    },
    {
      "width": 283,
      "height": 161,
      "front": false,
      "back": "img/document-right-bar.png",
      "class": "document-right-bar"
    }
  ].map(function(card){
    card.front = pd_path.concat(card.front);
    card.back  = pd_path.concat(card.back);
    return card;
  });

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

      var totalWidth = 2046;
      var totalHeight = 804;
      var widthHeightStyle ='height:'+attrs.height/totalHeight*100+'%;width:'+attrs.width/totalWidth*100+'%;"';
      var $card = jQuery(element);

      if (scope.card.front) {
        $card.hover(
          function(){
            var $this = jQuery(this);
            $this.find('figure').toggleClass('hovered');

          },function(){
            var $this = jQuery(this);
            $this.find('figure').toggleClass('hovered');
          });
      }

      $card.attr('style',widthHeightStyle);
    }
  };
}]);

(function($){

  function setFlippyCanvas() {
    var $flippyCanvas = $(".slide-container, .home-section-1");
    $flippyCanvas.height($flippyCanvas.width()*(804/2046));
  }

  $(document).ready(setFlippyCanvas);
  $(window).resize(setFlippyCanvas);


  // If a touch device randomly animate this
  // By triggering hover event

  function is_touch_device() {
    return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
  }
 
  if (is_touch_device()){

    $(document).ready(function(){

      var flipCardClasses = ['document', 'binoculars', 'chart-icon', 'chevron-up-right'];

      var $cards = $('.slide-container').find('section').filter(function(index) {
        return $.inArray($(this).attr('class'), flipCardClasses) > -1;
      });

      var lastNumber = null;

      setInterval(function(){

        var cardNumber = Math.ceil(Math.random()*$cards.length)-1;
        var $selectedCard;

        if (lastNumber === cardNumber) {
          cardNumber++;
          cardNumber = cardNumber % $cards.length;
        }

        $selectedCard = $cards.eq(cardNumber);

        $selectedCard.trigger('mouseenter');
        setTimeout(function(){
          $selectedCard.trigger('mouseleave');
        },4000);

        lastNumber = cardNumber;
      },4000);

    });
  }


})(jQuery);

