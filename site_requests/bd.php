<?php
$link = mysqli_connect("localhost", "root", "root", "based"); #подключение к бд

$sql = 'SELECT id, full, adress, date, time, url, actual FROM photos'; #запрос

$result = mysqli_query($link, $sql);

#собирает в массив, возвращает его
while ($row = mysqli_fetch_array($result)) { 
    print($row['id']. "," . $row['full'].
    "," . $row['adress']. "," . $row['date'] . " " . mb_strimwidth($row['time'], 0, 8) . "," . $row['url'] . "," . $row['actual'].";" );
}

function data()
{

header('Content-type: application/json');

$item1 = $_REQUEST[$data];
}
