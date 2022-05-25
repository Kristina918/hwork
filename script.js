const goods = [
    { title: 'Shirt', price: 150, imgScr: 'img/Shirt.jpg' },
    { title: 'Socks', price: 50 , imgScr: 'img/socks.jpg'},
    { title: 'Jacket', price: 350 , imgScr: 'img/Jacket.jpg'},
    { title: 'Shoes', price: 250 , imgScr: 'img/Shoes.jpg'},
  ];


  class GoodsItem {
    constructor({ title, price, imgScr }) {
      this.imgScr = imgScr;
      this.title = title;
      this.price = price;
    }
    render() {
      return `
      <div class="goods-item">
      <img src="${this.imgScr}" alt="${this.title}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
      </div>
    `;
    }
  }
  class GoodsList {
    items = [];
    fetchGoods() {
      this.items = goods;
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
  goodsList.fetchGoods();
  goodsList.render();
  goodsList.getCount();

  document.querySelector('header').classList ="container";
  document.querySelector('main').classList ="container";
