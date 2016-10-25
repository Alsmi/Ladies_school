<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
// ----------------------------конфигурация-------------------------- // 

$from="ladiesschool.ua@gmail.com";  // e-mail админа 

$headers = "From: ".$from."\n";

$adminemail="ladiesschool.ua@gmail.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://wwc.com.ua/pay.html";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 

$tel_number=$_POST['tel_number'];

$age=$_POST['age']; 

$parent_name=$_POST['parent_name'];

$parent_number=$_POST['parent_number']; 
 
$email=$_POST['email'];

$pay_sum=$_POST['pay_sum'];
 
  
 
// Проверяем валидность e-mail 
 
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
 
 { 
 
  echo 
"<center>Вернитесь <a 
href='javascript:history.back(1)'><B>назад</B></a>, пожалуйста. Вы 
указали неверные данные!"; 
 
  } 
 
 else 
 
 { 
 
 
$msg=" 
 
 
ФИО участницы: $name
 
 
Контактный телефон участницы: $tel_number

Возраст участницы: $age

ФИО одного из родителей: $parent_name 

Контактный телефон родителя: $parent_number
 
Email родителя: $email

Выбранный абонемент: $pay_sum грн.
 
 
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name", "$msg", "$headers"); 
 
  
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Сообщение от $name"); 
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f); 
 
  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 1000); 
//--></script> 
 
<center>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на страницу оплаты...</center>";  
exit; 
 
 } 
 
?>