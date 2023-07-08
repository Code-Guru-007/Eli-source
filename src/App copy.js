import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';

import DealCard from './component/DealCard';
import Amazon_DealsData from './dealsdata/Amazon.json'
import BestBuy_DealsData from './dealsdata/BestBuy.json'
import Woot_DealsData from './dealsdata/Woot.json'
import Walmart_DealsData from './dealsdata/Walmart.json'
import Pagination from './component/Pagination'
import { paginate } from './utils/paginate';

const data = {
  "Amazon": Amazon_DealsData,
  "Walmart": Walmart_DealsData,
  "Best Buy": BestBuy_DealsData,
  "Woot": Woot_DealsData,
  "All Company": [...Amazon_DealsData, ...BestBuy_DealsData, ...Woot_DealsData, ...Walmart_DealsData]
}


function App() {
  const [deals, setDeals] = useState(data["All Company"]);
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(deals);


  const paginate_deals = paginate(filteredData, currentPage, pageSize);

  useEffect(() => {
    const filtered_Data = searchText ? deals.filter((deal) => deal["Name"].toLowerCase().includes(searchText.toLowerCase())) : deals;
    setFilteredData(filtered_Data);
    setCount(filtered_Data.length);
  }, [searchText, deals]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePageDecrease = () => {
    setCurrentPage(currentPage - 1);
  }

  const handlePageSize = (event) => {
    setPageSize(event.target.value);
    setCurrentPage(1);
  }

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  }

  const handleCompanyChange = (event) => {
    setDeals(data[event.target.value]);
  }

  return (
    <div>
      

      <section id="featured-deals" className="featured-deals">
        <div className="section-header">
          <h2 className="section-title">Today's Hottest Deals 🔥 </h2>
        </div>
        <div className='flex justify-end w-full'>
          <div>
            <select id="default" onChange={(e) => handleCompanyChange(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option >All Company</option>
              <option >Amazon</option>
              <option >Walmart</option>
              <option >Best Buy</option>
              <option >Woot</option>
            </select>
          </div>
        </div>
        <div className="deal-container">
          {paginate_deals.map((deal, index) => (
            <DealCard
              key={index}
              image={deal.Image}
              title={deal.Name}
              url={deal.Url}
              oprice={deal.Price1}
              cprice={deal.Price2}
            />
          ))}
        </div>
        <div className="flex justify-center">
          {/* <Pagination itemsCount={count} pageSize={pageSize} onPageSize={handlePageSize} onPageChange={handlePageChange} currentPage={currentPage} onPageIncrease={handlePageIncrease} onPageDecrease={handlePageDecrease} /> */}
          <Pagination onPageChange={handlePageChange} totalCount={count} currentPage={currentPage} pageSize={pageSize}/>
        </div>
      </section>


      
    </div>
  );
}

export default App;
