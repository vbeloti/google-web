import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import useGoogleSearch from '../../Hooks/useGoogleSearch';
import { useStateValue } from '../../Hooks/StateProvider';
import googleLogo from '../../assets/img/google.png';

import response from './response';
import Search from '../../components/Search';

const SearchPage: React.FC = () => {
  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term);
  // const data = response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src={googleLogo}
            alt="Google logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">Todos</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/all">Notícias</Link>
              </div>

              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/all">Imagens</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/all">shopping</Link>
              </div>

              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/all">maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/all">mais</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/all">Configurações</Link>
              </div>

              <div className="searchPage__option">
                <Link to="/all">Ferramentas</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            Aproximadamente
            {' '}
            {data?.searchInformation?.formattedTotalResults}
            {' '}
            resultados (
            {data?.searchInformation?.formattedSearchTime}
            {' '}
            segundos)
          </p>

          {data && data.items && data?.items.map((item) => (
            <div key={item.title} className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                <img
                  className="searchPage__resultImage"
                  src={item?.pagemap?.cse_image[0]?.src}
                  alt={item.title}
                />
                )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searcPage__resultSnipper">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
