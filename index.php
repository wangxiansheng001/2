<?php
// header('content-type:application/json;charset=utf8');
// $con = mysql_connect("localhost","root","123456");
// if (!$con)
//   {
//      die('Could not connect: ' .mysql_error());
//   }else{

//     mysql_select_db("test", $con) or die("Unable to connect to the MySQL!");
//     // $sq = "INSERT INTO thumb (`name`,`number`) 
//     // VALUES (".$name.", ".$number.")";
// // 获取分页参数
// // $page = 0 ;
// // $pageSize = 3;
 
// // if(!is_null($_GET["page"])) {
// //     $page = $_GET["page"];
// // }
 
// // if(!is_null($_GET["pageSize"])) {
// //     $pageSize = $_GET["pageSize"];
// // }
 
// // 查询数据到数组中
// $result = mysql_query("select name,number from thumb limit 0, 2");
 
// $results = array();
// while ($row = mysql_fetch_assoc($result)) {
//     $results[] = $row;
// }
 
// // 将数组转成json格式
// return json_encode($results);
 
// // 关闭连接
// mysql_free_result($result);
  
// mysql_close($con);
// some code
header("Content-type:text/json;charset=utf-8");//字符编码设置  
$servername = "localhost";  
$username = "root";  
$password = "123456";  
// $dbname = "test";  

// 创建连接  
$con = mysql_connect($servername, $username, $password);  

// 检测连接  

if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("test", $con);
$sql = "SELECT * FROM thumb";  
$result = mysql_query($sql);

 
if (!$result) {
    printf("Error: %s\n", mysqli_error($con));
    exit();
}

$jarr = array();
while ($rows=mysql_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
    array_push($jarr,$rows);
}
// print_r($jarr);//查看数组
// echo "<br/>";
 
// echo '<hr>';

// echo '编码后的json字符串：';
return $str=json_encode($jarr);//将数组进行json编码
// echo '<br>';
// $arr=json_decode($str);//再进行json解码
// echo '解码后的数组：';
// print_r($arr);//打印解码后的数组，数据存储在对象数组中
mysql_close($con);
?>

