<?php
$number = array(1, 5, -3, -8, 12, 55, -78, 58, 5, 5);
$i = 0;
$a = 5;
$element;
$newtab = [];

while ($i < count($number)) {
  $element = $number[$i];
  if ($number[$i] == $a)
  $newtab[] = $number[$i];
$i++;
};
print_r($newtab);
?>
