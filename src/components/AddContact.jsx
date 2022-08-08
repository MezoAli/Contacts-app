import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactsActions } from "../redux/contactSlice";
import { useDispatch } from "react-redux";

function AddContact() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [handle, setHandle] = useState("");
	const dispatch = useDispatch();

	const handleAddContact = (e) => {
		e.preventDefault();
		dispatch(contactsActions.addContact({ name, handle }));
		navigate("/");
	};
	return (
		<>
			<form className="form-input" onSubmit={(e) => handleAddContact(e)}>
				<input
					type="text"
					placeholder="EnterName"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="email"
					placeholder="EnterHandle"
					value={handle}
					onChange={(e) => setHandle(e.target.value)}
				/>
				<button type="submit">Add Contact</button>
			</form>
		</>
	);
}

export default AddContact;
