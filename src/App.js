import React from 'react';

function Food({name, picture}){
  return <div>
    <h3>I like {name}</h3>
    <img src={picture} alt="food"/>
  </div>
}

const foodILike = [
  {
    name : "Kimchi",
    image : "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg"
  },
  {
    name : "Ramen",
    image : "http://www.foodrepublic.com/wp-content/uploads/2016/07/9280131-2.jpg"
  },
  {
    name : "Samgyupsal",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1910-1024x685.jpg"
  },
  {
    name : "chukumi",
    image : "https://3.bp.blogspot.com/-z_PjxY9_V7U/UW3pnJz6b-I/AAAAAAAAANQ/8SOJaFB43iw/s1600/chukumi.jpg"
  },
  {
    name : "Bibimbap",
    image : "http://www.maangchi.com/wp-content/uploads/2008/01/bibimbap-bowl.jpg"
  }
]

function App() {
  return (
    <div> 
        {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/> )}
    </div>
  );
}

export default App;
