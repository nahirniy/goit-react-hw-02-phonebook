import { ContactItem } from './ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number, visible }) => {
        if (!visible) {
          return null;
        }

        return (
          <ContactItem key={id} id={id} name={name} number={number} deleteContact={deleteContact} />
        );
      })}
    </ul>
  );
};
