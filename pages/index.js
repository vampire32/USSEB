import Head from 'next/head';
import Link from 'next/link'
import React from 'react'
import Split from '../Components/Split';
import Furniture from './Furniture';


const Home = () => {
  return (
		<div>
			<Head>
				<title>USS Enterprise An ICT Solution C​ompany</title>
				<meta
					name="description"
					content="USS Enterprises is one of the fastest emerging IT Solution
				 provider serving in IT industry since 2015 with a wide range of our “Products and Services Portfolio."
				/>
				<meta
					property="og:title"
					content="USS Enterprise An ICT Solution C​ompany"
				></meta>
				<meta
					property="og:description"
					content="USS Enterprises is one of the fastest emerging IT Solution
				 provider serving in IT industry since 2015 with a wide range of our “Products and Services Portfolio."
				/>
				<meta property="og:url" content="https://ussseb.com"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:image"
					content="https://mywebsite.net/assets/opengraph/theogimage.jpg"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Split /> */}
			<Split/>
		</div>
	);
}

export default Home
