import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './CommunityDealsLogo.JPG';
import DealCard from './component/DealCard';
import Amazon_DealsData from './dealsdata/Amazon.json'
import BestBuy_DealsData from './dealsdata/BestBuy.json'
import Woot_DealsData from './dealsdata/Woot.json'
import Walmart_DealsData from './dealsdata/Walmart.json'
import Pagination from './component/TestPagination'
import { paginate } from './utils/paginate';

const data = {
  "Amazon" : Amazon_DealsData,
  "Walmart" : Walmart_DealsData,
  "Best Buy" : BestBuy_DealsData,
  "Woot" : Woot_DealsData,
  "All Company" : [...Amazon_DealsData, ...BestBuy_DealsData, ...Woot_DealsData, ...Walmart_DealsData]
}


function App() {
  const [deals, setDeals] = useState(data["All Company"]);
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(deals);


  const paginate_deals = paginate(filteredData, currentPage, pageSize);
  
  useEffect(() => {
    const filtered_Data = searchText ? deals.filter((deal) => deal["Name"].includes(searchText)) : deals;
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
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="d-flex">
          <span className="d-flex align-items-center searchposition">
            <svg height="30" viewBox="0 0 48 48" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
          </span>
          <input type="text" className="searchinput" onChange={(e) => handleSearchChange(e)}  placeholder="Search anything..." />
        </div>
      </header>

      <section id="featured-deals" className="featured-deals">
        <div className="section-header">
          <h2 className="section-title">Today's Hottest Deals 🔥 </h2>
        </div>
        <div className='d-flex justify-content-end'>
          <select className="form-control" onChange={(e) => handleCompanyChange(e)} style={{width:"150px", marginRight:"20px"}}>
            <option>All Company</option>
            <option>Amazon</option>
            <option>Walmart</option>
            <option>Best Buy</option>
            <option>Woot</option>
          </select>
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
        <div className="d-flex justify-content-center">
          {/* <Pagination itemsCount={count} pageSize = {pageSize} onPageSize={handlePageSize} onPageChange={handlePageChange} currentPage ={currentPage} onPageIncrease={handlePageIncrease} onPageDecrease={handlePageDecrease}/> */}
          <Pagination onPageChange={handlePageChange} totalCount={count} currentPage={currentPage} pageSize={pageSize}/>
        </div>
      </section>
      

      <footer className="footer">
        <p className="footer-text">&copy; 2023 Community Deal Alerts. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
