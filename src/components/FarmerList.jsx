import React from 'react';
import Goods from './Goods';

var masterFarmerGoods = [
  {
    season: 'Fall',
    name: 'Apple Gala',
    price: '1.50',
    location: 'Federal Way',
    kind: 'Fruit'
  },
  {
    season: 'Summer',
    name: 'Pineapple',
    price: '1.50',
    location: 'Kent',
    kind: 'Fruit'
  },
  {
    season: 'Fall',
    name: 'Grapes',
    price: '5.00',
    location: 'Federal Way',
    kind: 'Fruit'
  },
  {
   season: 'Spring', 
   name: 'Flowers',
   price: '10.00',
   location: 'Seattle',
   kind: 'Flowers'
  }
    

];

function FarmerList(){
  return (
    <div>
      {masterFarmerGoods.map((goods, index) =>
        <Goods  season={goods.season}
          name={goods.name}
          price={goods.price}
          location={goods.location}
          kind={goods.kind}
          key={index}/>
      )}
    </div>
    ) 
  }

export default FarmerList;
