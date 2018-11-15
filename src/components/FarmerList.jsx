import React from 'react';
import Goods from './Goods';

var masterFarmerGoods = [
  {
    name: 'Apple Gala',
    price: '1.50',
    kind: 'Fruit'
  },
  {
    name: 'Pineapple',
    price: '1.50',
    kind: 'Fruit'
  },
  {
    name: 'Grapes',
    price: '5.00',
    kind: 'Fruit'
  },
  {
   name: 'Flowers',
   price: '10.00',
   kind: 'Flowers'
  }
    

];

function FarmerList(){
  return (
    <div>
      {masterFarmerGoods.map((goods, index) =>
        <Goods
          name={goods.name}
          price={goods.price}
          kind={goods.kind}
          key={index}/>
      )}
    </div>
    ) 
  }

export default FarmerList;
