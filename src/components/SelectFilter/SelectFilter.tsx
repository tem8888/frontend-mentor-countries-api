import { Select, SelectWrapper } from './styles';

type Props = {
  value: string;
  handleFilter: (e: string) => void;
};

const SelectFilter = ({ value, handleFilter }: Props) => {
  return (
    <SelectWrapper onClick={() => handleFilter('')} data-testid="reset-region">
      <Select
        name="filter"
        id="filter"
        value={value}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="" disabled>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </Select>
    </SelectWrapper>
  );
};

export default SelectFilter;
