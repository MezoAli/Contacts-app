import AddContact from "./AddContact";
import ContactsList from "./ContactsList";
import { Routes, Route } from "react-router-dom";

function Home() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ContactsList />} />
				<Route path="/add-contact" element={<AddContact />} />
			</Routes>
		</>
	);
}

export default Home;
