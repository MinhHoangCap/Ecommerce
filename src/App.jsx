import React, { Component, useEffect } from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home/Home';
import { Header } from './components/Header/Header';
import Footer from './template/Footer/Footer';
import axios from 'axios';
import ShopPage from "./pages/ShopPage"
import ContactPage from "./pages/ContactPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from 'react'
// import webConfigApi from './API/webConfigApi';

export default function App() {
  const [logo,setLogo] = useState("")
  
  const [webConfig,setWebConfig] = useState({
    logo : ""
  }
  )
  useEffect(()=>{
    async function axiosWebConfig(){
    const webConfigApi = await axios.get("http://localhost/ecommerce/wp-json/acf/v3/options/options");
    console.log(webConfigApi.data.acf.logo);
    setWebConfig({
      logo : webConfigApi.data.acf.logo
      }
    )
  }
  axiosWebConfig()
  }
  ,[])
  
  return (
    <>
        <Header logo={webConfig.logo}/>
        {/* <Home /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </>
  )
}

// export default class App extends Component {
  
//   async componentDidMount(){
//       const  acfOptions = await axios.get("http://localhost/ecommerce/wp-json/acf/v3/options/options");
//       console.log(acfOptions.data);
//       this.setState({
//           logo: acfOptions.data.acf.logo,
//           slogan: acfOptions.data.acf.slogan
//         })
//   }
//   render() {
//     console.log(this.state.logo);
//     return (
//       <>
//         <Header logo={this.state.logo}/>
//         <Home slogan={this.state.slogan}/>
//         <Footer/>
//       </>
//     )
//   }
// }
