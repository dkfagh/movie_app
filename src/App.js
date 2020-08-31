import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image : "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating : 5
  },
  {
    id : 2,
    name : "Ramen",
    image : "http://www.foodrepublic.com/wp-content/uploads/2016/07/9280131-2.jpg",
    rating : 4.9
  },
  {
    id : 3,
    name : "Samgyupsal",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1910-1024x685.jpg",
    rating : 4.8
  },
  {
    id : 4,
    name : "chukumi",
    image : "https://3.bp.blogspot.com/-z_PjxY9_V7U/UW3pnJz6b-I/AAAAAAAAANQ/8SOJaFB43iw/s1600/chukumi.jpg",
    rating : 5.5
  },
  {
    id : 5,
    name : "Bibimbap",
    image : "http://www.maangchi.com/wp-content/uploads/2008/01/bibimbap-bowl.jpg",
    rating : 4.7
  }
];


function Food({name, picture, rating}){
  return <div>
    <h3>I like {name}</h3>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} height='180' width='200' />
  </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
};

function App() {
  return (
    <div> 
        {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} /> )}
    </div>
  );
}

export default App;
