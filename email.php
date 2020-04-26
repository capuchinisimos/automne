<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
 

//send email
    mail("capuchinisimos@gmail.com", $email, $name);
}
?>