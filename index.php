<?php

  $pd_whitelist = array(
    '127.0.0.1',
    '::1',
    'pradadesigners.com'
  );

  $is_pd_dev = in_array($_SERVER["SERVER_NAME"], $pd_whitelist);

  function pd_path_fix () {
    global $is_pd_dev;
    if (!$is_pd_dev) {
      echo 'http://growthlab.studioissa.com/wp-content/growthlab-grid/';
    }
    echo '';
  }
?>

<?php if ($is_pd_dev): ?>
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <link   href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" >
  <style>
    /* For Dev Presentation */
    body {
      background: #00bba8;
    }
  </style>
<?php endif; ?>

<script src="<?php pd_path_fix();?>bower_components/angular/angular.min.js"></script>

<link rel="stylesheet" href="<?php pd_path_fix();?>style.css">


<section ng-app="growthLab">
  <div ng-controller="SlideController">

    <?php if ($is_pd_dev): ?>
      
      <header class="container text-center">
        <h1 style="color:white;">Slice demo</h1>
        <hr>
        <br> 
      </header>

    <?php endif ?>

    <div class="slide-container">
      <div ng-repeat="card in cards">
        <section card-slide width="{{card.width}}" height="{{card.height}}" front="{{card.front}}" back="{{card.back}}" class="{{card.class}}"></section>
      </div>
    </div>    
  </div>
  <br>
  <hr>
  <script src="<?php pd_path_fix();?>script.js"></script>
</section>

<script>
  var pd_path = '<?php pd_path_fix();?>';
</script>

<?php if ($is_pd_dev): ?>
  <img src="img/goal.png" class="img-responsive" style="border: 2px solid #fff;">
  <script src="//localhost:35729/livereload.js"></script>  
<?php endif ?>