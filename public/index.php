<?php
$name = "Ben";
$wp = "This is being run on an apache server with WordPress"
echo "This is php"
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Learning PHP</title>
    <script type="text/javascript" src="script.php"></script></script>
    <script src="vendors/angular.min.js" charset="utf-8"></script>
    <script src="client.js" type="text/javascript"></script>
  </head>
  <body>
    <h1>My name is <?php echo $name; ?></h1>
    <h2><?php echo $wp; ?></h2>
  </body>
</html>
