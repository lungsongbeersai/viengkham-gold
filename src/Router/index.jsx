import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Myapp/home/HomePage';
import ProductGrid from '../Myapp/product/ProductGrid';
import ProductCartory from '../Myapp/product/ProductCartory';
import ProductSingle from '../Myapp/product/ProductSingle';
import ProductList from '../Myapp/product/ProductList';
import PromotionPage from '../Myapp/Promosion/PromotionPage';
import RecomendePage from '../Myapp/Promosion/RecomendePage';
import NewEvennt from '../Myapp/News/NewEvennt';
import NewsDetail from '../Myapp/News/NewsDetail';
import PatternPages from '../Myapp/Pattern/PatternPages';
import ApplyjobPage from '../Myapp/Job/Apply-jobPage'
import RegisterJob from '../Myapp/Job/RegisterJob';
import PricePage from '../Myapp/home/PricePage';

import PolicyShop from '../Myapp/About/Policy-shop';
import AboutPage from '../Myapp/About/AboutPage';
import GiftPages from '../Myapp/gift/giftPages';
import CheckoutPage from '../Myapp/Checkout/CheckoutPage';
import PorfilePage from '../Myapp/Action/PorfilePage';
import EditProfile from '../Myapp/Action/Edit-Profile';
import ReconendeTypePage from '../Myapp/Recomende/ReconendeTypePage';
import Login from '../Myapp/About/Login';
import ItemOrders from '../Myapp/Action/Item-Orders';
import FormBuygold from '../Myapp/Action/Form-Buygold';
function AppContainer() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product' element={<ProductGrid />} />
      <Route path='/pslist' element={<ProductList />} />
      <Route path='/pdc' element={<ProductCartory />} />
      <Route path='/single' element={<ProductSingle />} />
      <Route path='/promotion' element={<PromotionPage />} />
      <Route path='/recomend' element={<RecomendePage />} />
      <Route path='/news' element={<NewEvennt />} />
      <Route path='/nd' element={<NewsDetail />} />
      <Route path='/pattern' element={<PatternPages />} />
      <Route path='/job' element={<ApplyjobPage />} />
      <Route path='/r' element={<RegisterJob />} />
      <Route path='/rtd' element={<ReconendeTypePage />} />



      <Route path='/price' element={<PricePage />} />
      <Route path='/policy' element={<PolicyShop />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/gift' element={<GiftPages/>} />
      <Route path='/ordering' element={<CheckoutPage/>} />
      <Route path='/profile' element={<PorfilePage/>} />
      <Route path='/setting' element={<EditProfile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/order' element={<ItemOrders/>} />
      <Route path='/buy' element={<FormBuygold/>} />
    </Routes>
  )
}

export default AppContainer