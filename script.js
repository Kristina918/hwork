const goods = [
    { title: 'Shirt', price: 150, imgScr: 'img/Shirt.jpg' },
    { title: 'Socks', price: 50 , imgScr: 'img/socks.jpg'},
    { title: 'Jacket', price: 350 , imgScr: 'img/Jacket.jpg'},
    { title: 'Shoes', price: 250 , imgScr: 'img/Shoes.jpg'},
  ];


  
  
  const renderGoodsItem = (a,b,c) => {
  
    return `
      <div class="goods-item">
      <img src="${c}" alt="${a}">
        <h3>${a}</h3>
        <p>${b}</p>
      </div>
    `;
  };
  
  const renderGoodsList = (list = []) => {
    let goodsList = list.map(({title,price,imgScr}) => renderGoodsItem(title,price, imgScr));
      debugger
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  
  renderGoodsList(goods);


  document.querySelector('header').classList ="container";
  document.querySelector('main').classList ="container";
