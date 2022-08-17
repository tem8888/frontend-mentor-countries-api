import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IconContainer, Input, Label } from './styles';

type Props = {
  value: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFilter = ({ value, handleSearch }: Props) => {
  return (
    <>
      <Label>
        <IconContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
        </IconContainer>
        <Input
          value={value}
          onChange={handleSearch}
          autoComplete="off"
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
        />
        <span className="screen-reader-text">Search for a country</span>
      </Label>
    </>
  );
};

export default InputFilter;
