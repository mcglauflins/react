import React from "react";

//include images into your bundle

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cardcontent from "./cardcontent.jsx";
import Footer from "./footer.jsx";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Cards></Cards>
			<Footer></Footer>
		</div>
	);
};

export default Home;
