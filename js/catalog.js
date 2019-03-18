class Product{
  //порожд нов обьект теперь доступен через this
  constructor(name, price, imgSrc = null, id, sale){ //в () указ параметр для использов далее
      this.name = name;  
      this.price = price;
      this.imgSrc = imgSrc;    
      this.id = id;
      this.sale = sale;
  }
  //метод показыв эл в котор передаем 
  renderProduct(el){
    let productEl = document.createElement('a');
    productEl.href = `/product/?id=${this.id}`;
    productEl.classList.add('product');

    if(this.sale >0){
        productEl.classList.add('sale');
    }
    //то что в скобках - это условие иф, после ? то знач, если истин, если ложь - то то что после :
    productEl.innerHTML = `
    <div class='product__img' style= 'background-image:url(${(this.imgSrc ==null) ? '/images/no-photo.png' : this.imgSrc })'></div>
    <div class='product__name'>${this.name} </div>     
    <div class='product__price'>${this.price - this.price*this.sale} руб.</div> 
    `;
    el.appendChild(productEl);
  }
}

class Catalog{
    constructor(section){
        //в каталоге созд раздел, щбъекты котолога и пуст массив
        this.section = section;
        this.el = document.querySelector('.catalog');
        this.product= [];
    }
    addProductArray(productArray){
        this.products = productArray;
    }
    render(){
        this.products.forEach((productItem)=>{
            productItem.renderProduct(this.el);
        });
    }
    empty(){
        this.products = [];
        this.el.innerHTML = '';
    }
    //к катал к элем будет добавл класс, в цсс добавл прозрач
    preloadOn(){
        this.el.classList.add('preload');
    }
    preloadOff(){
        this.el.classList.remove('preload');
    }
    // создали файл каталог хендер для обработки аякса (отдать данные)
    //инклюд уанс -подкл единожды
    //инклюд - если файл нет, то предупреждение
    //рекваед - если файл нет, то фатал еррор ничего не будет раб. 
    //Если один код зависит от другого(все важное), то рекваед уанс
    //в джейсоне(каталог_хэндер) не должно быть комментов и посторон инф
    
    renderPagination(configPagination){
        let paginationEl = document.querySelector('.pagination');
       
       paginationEl.innerHTML = '';
        
        for(let i =1; i <= configPagination.countPage; i++){
            let div = document.createElement('div');
            div.classList.add('pagination-item');

            if(configPagination.nowPage==i){
                div.classList.add('active');
            }

            div.innerHTML = i;
            div.setAttribute('data-page', i);

            paginationEl.appendChild(div);

            let that = this;
            div.addEventListener('click', function(){
                that.load(this.getAttribute('data-page') );
            });
        }
    }    

    //лоад принимает значен страниц. по умолч = 1
    load(page = 1){
        this.preloadOn();
        let xhr = new XMLHttpRequest(); //созд перемен аякса
        xhr.open('GET', `/api/catalog_hander.php?section=${this.section}&page=${page}`); //куда пойдет и передаем гет парам в урл
        xhr.send();

        xhr.addEventListener('load',()=>{
            let data = JSON.parse(xhr.responseText);

            console.log(data);
            this.renderPagination(data.pagination);

            this.empty();
            data.products.forEach((product)=>{
                console.log(product);
                let newProduct = new Product(product.name, product.price, product.photo, product.id, product.sale);
                this.products.push(newProduct);
            });
            this.render();
            this.preloadOff();
        });
    }
}

let catalog = new Catalog('man');
//созд объект класса продукт
//catalog.addProductArray([new Product('Кроссовки', 4500, null, 100), new Product('Футб красн', 1200, null, 15)]);
catalog.load();
//

// setTimeout(()=>{
//     //catalog.empty();
//     catalog.preloadOn();
// }, 5000);

// setTimeout(()=>{
//     //catalog.empty();
//     catalog.preloadOff();
// }, 6000);

// let boots = new Product('Кроссовки', 4500); //создаем экземпл класса продукт
// let tShirts = new Product('Футб красн', 1200);
// //у бутс вызываем рендер и передаем туда каталог
// let catalogEl = document.querySelector('.catalog');

// boots.renderProduct(catalogEl);
// tShirts.renderProduct(catalogEl);
// console.dir(boots);