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
      "back": false,
      "class": "chart-left-empty"
    },
    {
      "width": 361,
      "height": 324,
      "front": "img/financial-management-v2@2x.jpg",
      "back": "img/chart-icon.png",
      "class": "chart-icon"
    },
    {
      "width": 400,
      "height": 367,
      "front": "img/raising-capital-v2@2x.jpg",
      "back":  "img/chevron-up-right-icon.png",
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
      "back": "img/small-square-top.png",
      "class": "small-square-top"
    },
    {
      "width": 155,
      "height": 107,
      "front": false,
      "back": "img/small-square-bottom.png",
      "class": "small-square-bottom"
    },
    {
      "width": 412,
      "height": 388,
      "front": "img/cfo-services-v3@2x.jpg",
      "back": "img/binoculars-icon.png",
      "class": "binoculars"
    },
    {
      "width": 400,
      "height": 301,
      "front": "img/business-modeling-v3@2x.jpg",
      "back": "img/document-icon.png",
      "class": "document"
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

      var totalWidth = 303+361+427+367;
      var totalHeight = 388*2;
      var widthHeightStyle ='height:'+attrs.height/totalHeight*100+'%;width:'+attrs.width/totalWidth*100+'%;"';
      var $card = jQuery(element);

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

(function($){

  function setFlippyCanvas() {
    var $flippyCanvas = $(".slide-container, .home-section-1");
    $flippyCanvas.height($flippyCanvas.width()*(645/1200));
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

