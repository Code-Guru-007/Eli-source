import React, { useEffect, useState } from 'react';

import DealCard from '../component/DealCard';
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer';

import Pagination from '../component/Pagination'

import { paginate } from '../utils/paginate';

function Deals({data}) {
  const [deals, setDeals] = useState(data);
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(deals);

  const dealStatus = (window.location.href).includes('deals');

  const paginate_deals = paginate(filteredData, currentPage, pageSize);

  useEffect(() => {
    const filtered_Data = searchText ? deals.filter((deal) => deal["Name"].toLowerCase().includes(searchText.toLowerCase())) : deals;
    setFilteredData(filtered_Data);
    setCount(filtered_Data.length);
  }, [searchText, deals]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <Navbar onSearch={handleSearchChange} search={true}/>
      <section id="featured-deals" className="featured-deals">
        <div className="section-header">
          <h2 className="section-title font-bold">{dealStatus ? "All Deals":"Today's Hottest Deals 🔥 "}</h2>
        </div>
        <div className="grid sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 ">
          {paginate_deals.map((deal, index) => (
            <DealCard
              id={deal.id}
              key={index}
              image={deal.Image}
              title={deal.Name}
              url={deal.Url}
              oprice={deal.Price1}
              cprice={deal.Price2}
              company={deal.Company}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination onPageChange={handlePageChange} totalCount={count} currentPage={currentPage} pageSize={pageSize}/>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Deals;
