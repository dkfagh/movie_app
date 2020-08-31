import React from 'react';

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image : "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg"
  },
  {
    id : 2,
    name : "Ramen",
    image : "http://www.foodrepublic.com/wp-content/uploads/2016/07/9280131-2.jpg"
  },
  {
    id : 3,
    name : "Samgyupsal",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1910-1024x685.jpg"
  },
  {
    id : 4,
    name : "chukumi",
    image : "https://3.bp.blogspot.com/-z_PjxY9_V7U/UW3pnJz6b-I/AAAAAAAAANQ/8SOJaFB43iw/s1600/chukumi.jpg"
  },
  {
    id : 5,
    name : "Bibimbap",
    image : "http://www.maangchi.com/wp-content/uploads/2008/01/bibimbap-bowl.jpg"
  }
];


function Food({name, picture}){
  return <div>
    <h3>I like {name}</h3>
    <img src={picture} alt={name} height='180' width='200' />
  </div>
}


function App() {
  return (
    <div> 
        {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image}/> )}
    </div>
  );
}

export default App;
