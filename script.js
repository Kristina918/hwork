const goods = [
    { title: 'Shirt', price: 150, imgScr: 'img/Shirt.jpg' },
    { title: 'Socks', price: 50 , imgScr: 'img/socks.jpg'},
    { title: 'Jacket', price: 350 , imgScr: 'img/Jacket.jpg'},
    { title: 'Shoes', price: 250 , imgScr: 'img/Shoes.jpg'},
  ];
  const GET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
  const GET_BASKET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json'
  
  function service(url, callback) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
      callback(JSON.parse(xhr.response))
    }
  }

  class GoodsItem {
    constructor({  product_name, price }) {
      this.product_name = product_name;
      this.price = price;
    }
    render() {
      return `
      <div class="goods-item">
        <h3>${this.product_name}</h3>
        <p>${this.price}</p>
      </div>
    `;
    }
  }
  class GoodsList {
    items = [];
    fetchGoods(callback) {
      service(GET_GOODS_ITEMS, (data) => {
        this.items = data;
        callback()
      });
    }
    getCount(){
      return this.items.reduce((number, { price }) => {
        return number + price;
      }, 0)

    }
    render() {
      const goods = this.items.map(item => {
        const goodItem = new GoodsItem(item);
        return goodItem.render()
      }).join('');
    
      document.querySelector('.goods-list').innerHTML = goods;
    }
  }
  
  const goodsList = new GoodsList();
  goodsList.fetchGoods(() => {
    goodsList.render();
  });
  goodsList.getCount();

  document.querySelector('header').classList ="container";
  document.querySelector('main').classList ="container";
