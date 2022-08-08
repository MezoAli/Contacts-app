import ContactItem from "./ContactItem";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function ContactsList() {
	const contacts = useSelector((state) => state.contacts.contactsList);
	const navigate = useNavigate();
	const [search, setSearch] = useState("");

	const redirect = () => {
		navigate("/add-contact");
	};

	return (
		<>
			<div className="search-add-container">
				<input
					type="search"
					className="search-input"
					placeholder="Search For Contact"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<AiOutlineUserAdd className="add-icon" onClick={() => redirect()} />
			</div>
			{contacts && (
				<ol className="contact-list">
					{contacts
						.filter((item) =>
							item.name.toLowerCase().includes(search.toLowerCase())
						)
						.map((contact) => (
							<ContactItem contact={contact} key={contact.name} />
						))}
				</ol>
			)}
		</>
	);
}

export default ContactsList;
