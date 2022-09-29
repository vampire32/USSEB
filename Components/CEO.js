import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const CEO = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
  return (
		<section
			className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-align-left-xs u-clearfix u-section-12"
			id="carousel_064e"
			data-aos="fade-in"
		>
			<div className="u-clearfix u-sheet u-sheet-1" data-aos="zoom-in">
				<div className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-container-style u-group u-palette-1-base u-radius-11 u-shape-round u-group-1">
					<div className="u-container-layout"></div>
				</div>
				<h2 className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-custom-font u-font-montserrat u-text u-text-1">
					A Message From CEO
				</h2>
				<p className="u-align-justify u-text u-text-2">
					After spending the past 5 years in USS Enterprises, I feel very
					privileged to be writing this message as the{" "}
					<b>
						<i>Chief Executive Officer (CEO)</i>
					</b>
					. We began our journey in 2014, and have spent the past 5 years in
					continuous hard work to build our brand, which has now become
					synonymous by the grace of Allah S.W.T with our commitment, dedication
					&amp; integration to serving our clients as a technology business
					partner. &nbsp; We have earned the trust and respect of government
					clients for one simple reason—we have great people. They are
					professionals in their fields. They carry a strong service attitude to
					all they do. They take pride and ownership in the jobs they do. We
					bring passion, pride and experience together.
				</p>
				<div
					className="u-align-center-sm u-align-center-xs u-image u-image-circle u-image-1"
					alt=""
					data-image-width="853"
					data-image-height="1280"
				></div>
				<p className="u-align-justify u-text u-text-3">
					We have only one objective: To ensure our client’s mission objectives
					are achieved with the highest level of capability and assurance. Our
					clients come to us with confidence that we have the expertise to
					fulfill their order with the next level of performance. &nbsp; Looking
					ahead, we are still focused on accelerating the execution of our
					growth strategy in the corporate sector too, while continuing to build
					on the strength of our brand. I am Incredibly excited about this
					journey and truly believe the best of USS Enterprises is yet to come.
				</p>
			</div>
		</section>
	);
}

export default CEO