import Head from 'next/head';
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
		<div className="row">
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

			<div className="split-pane col-md-6 uiux-side">
				<div>
					<div className="text-content">
						<h2 className="bold">Vist</h2>
						<h1 className="text-[30px]">
							USS Enterprise ICT and Consultancy Company
						</h1>
					</div>
					<a className="button">
						<Link href="/UssEnterprisesICT">Show the Site</Link>
					</a>
				</div>
			</div>
			<div className="split-pane col-md-6 frontend-side">
				<div>
					<div className="text-content">
						<h2 className="bold">Visit</h2>
						<h1 className="text-[30px]">USS Furniture</h1>
					</div>
					<a className="button">
						<Link href="/Furniture">Show The Site</Link>
					</a>
				</div>
			</div>
			<div id="split-pane-or">
				<div>
					<img
						className="imgg"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74452/bcr-white.png"
					/>
				</div>
			</div>
		</div>
	);
}

export default index
