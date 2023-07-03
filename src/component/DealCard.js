/* DealCard.js */
import React from 'react';
import './DealCard.css';
import AmazonLogo from '../assets/Amazon.svg'
import BestBuyLogo from '../assets/Best_Buy.svg'
import WalmartLogo from '../assets/Walmart.svg'
import WootLogo from '../assets/Woot.svg'

function DealCard({ image, title, url, cprice, oprice }) {



  return (
    <div className="deal-card">
      <img className="deal-image" src={image} alt={title} />
      <div className="deal-content">
        <h3 className="deal-title">{title}</h3>
        <div className="d-flex justify-content-center" style={{height:"30px"}}>
          <p className="cprice" style={{marginRight:"20px"}}>{cprice}</p>
          <p className="oprice">{oprice}</p>
        </div>
        <div>
          <a href={url} className="btn">View Deal</a><br/>
          <img style={{width:"120px", height:"50px"}} src="http://localhost:3000/assets/Best_Buy.svg" />
        </div>
      </div>
    </div>
  );
}

export default DealCard;
