import css from './ContactItem.module.css';

export const ContactItem = props => {
  const { id, name, number, deleteContact } = props;

  return (
    <li className={css.item}>
      {name}: {number}
      <button type="button" className={css.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
