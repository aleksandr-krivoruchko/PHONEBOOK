import { Label, Input } from '../Form/FormStyle.styled';
import { useDispatch } from 'react-redux';
import { filter } from '../../redux/contacts/contactsReducer';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <Label>
      Знайдіть контакти за іменем
      <Input onChange={e => dispatch(filter(e.target.value))} type="text" />
    </Label>
  );
}
