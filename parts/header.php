<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php foreach($cssFile as $file ): ?>
    <link rel="stylesheet" href="<?=$file?>">
    <?php endforeach;?>
    <title>Document</title>
</head>
<body>