import React, { useEffect } from 'react'
import {isMobile} from 'react-device-detect';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'
import './index.css'

import Deals from './pages/Deals'
import MobileDeals from './pages/MobileDeals'
import About from './pages/About'
import Details from './pages/Details';
import Categories from './pages/Categories';
import Contact from './pages/Contact';

import Amazon_DealsData from './dealsdata/Amazon.json'
import BestBuy_DealsData from './dealsdata/BestBuy.json'
import Woot_DealsData from './dealsdata/Woot.json'
import Walmart_DealsData from './dealsdata/Walmart.json'


const alldata = {
  "All Company": [...Amazon_DealsData, ...BestBuy_DealsData, ...Woot_DealsData, ...Walmart_DealsData]
}


function App() {
 const hotdata = alldata["All Company"].filter((data) => data["Price1"].includes("$259.99"))

  useEffect(() => {
    
  });


  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={isMobile ===true ? <MobileDeals data={hotdata}/>: <Deals data={hotdata} /> } />
        <Route path="/deals" element={isMobile ===true ? <MobileDeals data={alldata["All Company"]}/>: <Deals data={alldata["All Company"]} /> } />
        <Route path="/deals/details/:id" element={<Details datas={alldata["All Company"]}/>}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/categories/:mtype/:subtype' element={isMobile ===true ? <MobileDeals data={alldata["All Company"]}/>: <Deals data={alldata["All Company"]} /> }/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
