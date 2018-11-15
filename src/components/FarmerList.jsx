import React from 'react';
import Goods from './Goods';
import * as typesAPI from '../service/fakeTypeService';

const masterFarmerGoods = [
  {
    name: 'Apple Gala',
    type: { _id: '1', type: 'Fruits' },
    price: '1.50',
  },
  {
    name: 'Pineapple',
    type: { _id: '1', type: 'Fruits' },
    price: '1.50',
  },
  {
    name: 'Lettuce',  
    type: { _id: '2', type: 'Veggies' },
    price: '5.00',
  },
  {
   name: 'Beef',
   type: { _id: '3', type: 'Meat' },
   price: '10.00',
  
  },
  {
   name: 'Pork',
   type: { _id: '3', type: 'Meat' },
   price: '5.00',
  
  },
   {
     name: 'Chicken',
     type: { _id: '3', type: 'Meat' },
     price: '3.00',
   }

];

export function getGoods() {
  return masterFarmerGoods;
}

export function getGoodsId(id) {
  return masterFarmerGoods.find(g => g._id === id);
}


export function saveGoods(goods) {
  let goodsInDb = goods.find(g => g._id === good._id) || {};
  goodsInDb.type = good.type;
  goodsInDb.type = typesAPI.types.find(g => g._id === good.typeId);
  goodsInDb.price = good.price;

  if (!goodsInDb._id) {
    goodsInDb._id = Date.now();
    goods.push(goodsInDb);
  }

  return movieInDb;
}

export function deleteGoods(id) {
  let goodsInDb = goods.find(g => g._id === id);
  goods.splice(goods.indexOf(goodsInDb), 1);
  return goodsInDb;
}

function FarmerList(){
  return (
    <div>
      {masterFarmerGoods.map((goods, index) =>
        <Goods
          name={goods.name}
          price={goods.price}
          key={index}/>
      )}
    </div>
    ) 
  }

export default FarmerList;
