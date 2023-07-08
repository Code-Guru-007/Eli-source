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
        <div className="flex justify-center mt-[10px]" style={{height:"30px"}}>
          <p className="text-green-600 font-bold" style={{marginRight:"20px"}}>{cprice}</p>
          <p className="line-through text-red-600 font-bold">{oprice}</p>
        </div>
        <div className='flex justify-center'>
          <div>
            <a href={url} className="btn">View Deal</a><br/>
            <img className="w-[150px] h-[50px]" src={AmazonLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealCard;
