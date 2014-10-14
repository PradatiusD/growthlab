<?php

  $pd_whitelist = array(
    '127.0.0.1',
    '::1',
    '70.40.198.228'
  );

  $is_pd_dev = in_array($_SERVER['REMOTE_ADDR'], $pd_whitelist);

?>

<?php if ($is_pd_dev): ?>
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
  <style>
    /* For Dev Presentation */
    body {
      background: #00bba8;
    }
  </style>
<?php endif; ?>

<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/jquery.transit/jquery.transit.js"></script>

<link rel="stylesheet" href="style.css">


<section ng-app="growthLab">
  <div ng-controller="SlideController">

    <header class="container text-center">
      <h1 style="color:white;">Slice demo</h1>
      <button type="button" class="btn btn-default" ng-click="changeCards()">Change Image Style</button>
      <hr>
      <br> 
    </header>

    <div class="slide-container">
      <div ng-repeat="card in cards">
        <section card-slide width="{{card.width}}" height="{{card.height}}" front="{{card.front}}" back="{{card.back}}" class="{{card.class}}"></section>
      </div>
    </div>    
  </div>
  <br>
  <hr>
  <script src="script.js"></script>
</section>

<?php if ($is_pd_dev): ?>
  <img src="img/goal.png" class="img-responsive">
  <script src="//localhost:35729/livereload.js"></script>  
<?php endif ?>