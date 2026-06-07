import ContactSection from "../components/layout/Contact-Section";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/layout/Hero-Section";
import Navbar from "../components/layout/Navbar";
import ProductSection from "../components/layout/Product-Section";

function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ProductSection />
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;
