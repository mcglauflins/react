import React from "react";

//include images into your bundle
import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
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
