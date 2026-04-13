<html>
<head> 
    <title>Socios</title>
    <script type="text/javascript" src="../js/biblioteca.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/biblioteca.css">    
</head>
<body>
        <?php
        print_r($_POST);
        $i=0;
        $j=0;
        $titulo_=[];
        $autor_=[];
        $precio_=[];

foreach($_POST as $value){
                if($value!=""){
                    if($i%3==0){
                        $titulo_[$j]=$value;
                    }
                    if($i%3==1){
                        $autor_[$j]=$value;
                    }
                    if($i%3==2){
                        $precio_[$j]=$value;
                    $j++;
                    }
                }
                $i++;
            }
?>
<table>
<tr><th>Nombre</th><th>Autor</th><th>Precio</th></tr>

<?php
    $precioTotal=0;

    for($j=0;$j<count($titulo_);$j++){
    $precioTotal += (float)$precio_[$j];

?>
<tr><td><?=$titulo_[$j];?></td><td><?=$autor_[$j];?></td><td><?=$precio_[$j];?></td></tr>
<?php
}

?>
<tr><td><b>Total</b></td><td><b><?=$precioTotal;?></b></td></tr>

</table>
</body>
</html>