import { BorderLink } from './styles';

type Props = {
  borders?: {
    name: {
      common: string;
    };
    cca3: string;
  }[];
};

const BordersList: React.FC<Props> = ({ borders = [] }: Props) => {
  return (
    <>
      {borders.map((border) => {
        return (
          <BorderLink to={`/country/${border.cca3.toLowerCase()}`}>
            {border.name.common}
          </BorderLink>
        );
      })}
    </>
  );
};

export default BordersList;
