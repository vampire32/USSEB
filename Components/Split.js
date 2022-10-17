import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Fur from '../styles/images/furback.jpg'
import ICT from "../styles/images/splitbg.png";

const Split = () => {
  return (
		<div >
			<div className="row">
				<div className="split-pane col-md-6 uiux-side">
					<div>
						<div className="text-content">
							<h2 className="bold">Visit</h2>
							<h1 className="text-[30px]">
								USS Enterprises ICT and Consultancy Company
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
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Split