
<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/config/config.php');

$page = $_GET['page'];
$count_on_page = 5;

$result_data = [
    'products'=>[],
    'pagination'=>[
        'countPage'=>5,
        'nowPage'=>$page
    ]
];

sleep(2);

$sql_len = "SELECT COUNT(id) as len FROM products";
$count_products = mysqli_fetch_assoc(mysqli_query( $db, $sql_len) )['len'];

$result_data['pagination']['countPage'] = ceil($count_products / $count_on_page);
$num_start_row = ($page - 1) * $count_on_page;

$sql = "SELECT * FROM products WHERE active = 1 limit {$num_start_row},{$count_on_page}";
$result = mysqli_query($db, $sql);

while($row = mysqli_fetch_assoc($result) ){
    
    $result_data['products'][] = $row;    
}
echo json_encode($result_data);
?>
