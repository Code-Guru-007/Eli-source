/* DealCard.js */
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './DealCard.css';

function DealCard({ id, image, title, url, cprice, oprice, company }) {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/details/${id}`)
  }

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
            <a onClick={() => handleClick()} className="btn hover:cursor-pointer">View Deal</a><br/>
            <img className="w-[150px] h-[50px]" alt={id} src={`/assets/${company}.svg`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealCard;
