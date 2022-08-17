import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { IFullCountryInfo } from '../../types/apiResponse';
import { BackButton, BackButtonContainer } from './styles';
import { Container } from '../../theme/theme';
import DetailInfo from './DetailInfo/DetailInfo';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const CountryDetail = () => {
  let navigate = useNavigate();
  let { name } = useParams();

  const [country, loading, error] = useFetch<IFullCountryInfo>(
    `https://restcountries.com/v3.1/alpha/${name}`,
  );

  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      <BackButtonContainer>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            style={{ marginRight: '10px' }}
          />
          Back
        </BackButton>
      </BackButtonContainer>
      {!loading ? <DetailInfo country={country} /> : <ProgressBar />}
    </Container>
  );
};

export default CountryDetail;
