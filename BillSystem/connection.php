<?php
$server="localhost";
$username="root";
$password="";
$dbname="raj";

$conn = mysqli_connect($server,$username,$password,$dbname);

if($conn)
{    
    echo '<script> alert("Connection DONE!") </script>';      
}
else
{    
  echo '<script> alert("Connection FAILED!") </script>';      
}

?>