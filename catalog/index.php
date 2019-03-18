<?php
    $cssFile = [
        '/css/style.css',
        '/css/catalog.css'
    ];
    
    include($_SERVER['DOCUMENT_ROOT'].'/parts/header.php');
?>
<!-- блок,элементы,модификатор(то что выделено)
элементы __
модификатор _ отдельно -->
<div class="wrapper">
    <header class = "header">
        <div class="logo"> </div>
        <nav class="navigation">
            <a class="navigation__item" href="#">Женщинам</a>
            <a class="navigation__item" href="#">Мужчинам</a>
            <a class="navigation__item" href="#">Детям</a>
            <a class="navigation__item" href="#">Новинки</a>
            <a class="navigation__item" href="#">О нас</a>
        </nav>
        <div class="user-info">
            <div class="user-info__pic"></div>
                <div class="user-info__text">
                    Привет, Том
                    (<span class="text_active">выйти</span>)
                </div>
            
        </div>
        <div class="basket">
            <div class="basket__pic"></div>
            <div class="basket__text">Корзина(3)</div>
        </div>
    </header>

<main>
    <h1 class="main-header">Мужчинам</h1>
    <div class="catalog">
        
    </div>
    <div class="pagination"></div>
</main>


    <h1>Каталог</h1>
    <div class="catalog">

    </div>
</div>

    <script src="/js/catalog.js"></script>



<?php
    include($_SERVER['DOCUMENT_ROOT'].'/parts/footer.php');
?>
