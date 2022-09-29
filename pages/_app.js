import '../styles/home.css'
import '../styles/nicepage.css'
import '../styles/landing.css'
import '../styles/About.css'
import '../styles/alliances.css'
import '../styles/services.css'
import '../styles/product.css'
import '../styles/loader.css'
import '../styles/globals.css'
import '../styles/navbar.css'
import React, { useRef, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'
import Loader from '../Components/Loader'
import Floating from '../Components/Floating'




function MyApp({ Component, pageProps }) {
	const [loading, setloading] = useState(false);
	useEffect(() => {
		
		setloading(true);
		setTimeout(() => {
			setloading(false);
		}, 10000);
	}, []);
  return (
		<>
			<Script src="https://cdn.tailwindcss.com" />
			<Script src="https://smtpjs.com/v3/smtp.js" />
			{loading ? (
				<Loader />
			) : (
				<>
					<Component {...pageProps} />
					<Floating />
				</>
			)}
		</>
	);
}

export default MyApp
