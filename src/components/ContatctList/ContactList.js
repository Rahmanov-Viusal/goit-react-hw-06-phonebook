import s from "./ContactList.module.scss";
import { useSelector } from "react-redux";
import { deleteContact } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = [...contacts].filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ul className={s.filterList}>
      {filteredContacts.map(({ id, number, name }) => (
        <li className={s.filterListItem} key={id}>
          <p className={s.text}>
            {name}: <span className={s.span}>{number}</span>
          </p>

          <button
            className={s.btn}
            onClick={() => dispatch(deleteContact(id))}
            type="button"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
