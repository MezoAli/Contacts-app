import { useDispatch } from "react-redux";
import { contactsActions } from "../redux/contactSlice";

function ContactItem({ contact }) {
	const dispatch = useDispatch();
	return (
		<>
			<li className="contact-list-item">
				<div
					className="contact-avatar"
					style={{
						backgroundImage: `url(${contact.avatarURL})`,
					}}
				></div>
				<div className="contact-details">
					<p>{contact.name}</p>
					<p>{contact.handle}</p>
				</div>
				<button
					className="contact-remove"
					onClick={() => dispatch(contactsActions.removeContact(contact.name))}
				>
					Remove
				</button>
			</li>
		</>
	);
}

export default ContactItem;
