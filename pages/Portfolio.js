import React from 'react'
import ProductPortfolio from '../Components/ProductPortfolio'
import BG from "../styles/images/matebook-x-pro-2021-removebg-preview.png";
import Head from "next/head";

const ENDUSINGComputing = () => {
  return (
		<div>
				
			<Head>
				<title>Core Product</title>
				<meta name="description" content="We have a large collection of our core product portfolio include multinational companies products." />
				<meta property="og:title" content="Contact Us"></meta>
				<meta property="og:description" content="We have a large collection of our core product portfolio include multinational companies products." />
				<meta property="og:url" content="https://usseb.com"></meta>
				<meta property="og:type" content="website"></meta>	
				<meta property="og:image" content="https://mywebsite.net/assets/opengraph/theogimage.jpg"/>
				
				<link rel="icon" href="/favicon.ico" />
			
				
			</Head>
			
			<ProductPortfolio
				TopName="Product Portfolio"
				TopDesc="We have a large collection of our core product portfolio include multinational companies products."
				ProductName="Core Product"
				ProductDesc="Product Collection USS Enterprise"
				BrandName="ACER"
				BrandName2="LENOVO"
				BrandName3="DELL EMC"
				BrandName4="CISCO"
				BrandName5="HP"
				BrandName6="HUAWEI"
				BrandList1="Desktops & Laptops"
				BrandList12="Tablets & AIO PCs,"
				BrandList13=" Multimedia Projectors & Servers"
				BrandList14=" Workstations & Gaming Machines"
				BrandList2="Desktops, Notebooks & Thin Clients,"
				BrandList21="Zero Clients & VDI Solutions"
				BrandList22="Rugged Notebooks & Rugged Tablets"
				BrandList23="Workstations & Tower/Rack/Blade Servers"
				BrandList24="NAS/SAN/Hybrid Storages & Tape Libraries"
				BrandList25=" Converged/Hyper Converged Infrastructure"
				BrandList26="Backup & Archiving Solutions"
				BrandList3="Desktops &  Laptops"
				BrandList31="AIO PC's"
				BrandList32="Printers, Scanners"
				BrandList33="AIO Printers & Toners, "
				BrandList34="Workstations, Servers"
				BrandList35="Storages &  Racks"
				BrandList4="Desktops & Laptops"
				BrandList41="AIO PCs"
				BrandList42="Workstations & Servers "
				BrandList5="Network Switches"
				BrandList51="Access Points"
				BrandList52="IP Phones"
				BrandList53="Routers"
				BrandList6="Routers & Switches"
				BrandList61="Access Points, IP Phones"
				BrandList62=" Firewalls  & CCTV Surveillance "
				BrandList63="Tablets, Servers & Campus Solutions"
				BrandList64="Enterprise Networking & Cloud Computing"
				BrandList65=" Big data storage solutions"
				CompanyName="SANGFOR"
				CompanyName2="MICROSOFT"
				CompanyName3="SOPHOS"
				ServiceList1="Network Security solutions"
				ServiceList12=" Microsoft Windows Desktop"
				ServiceList13="End point security solutions"
				ServiceList14="Network Optimization"
				ServiceList2="Network Security solutions"
				ServiceList21=" Microsoft Windows Desktop"
				ServiceList22="End point security solutions"
				ServiceList23="Network Optimization"
				ServiceList3="Network Security solutions"
				ServiceList31=" Microsoft Windows Desktop"
				ServiceList32="End point security solutions"
				ServiceList33="Network Optimization"
				BG={BG}
			/>
		</div>
	);
}

export default ENDUSINGComputing