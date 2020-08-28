import React, { MouseEvent, useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './styles.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../Hooks/StateProvider';
import { actionTypes } from '../../Hooks/StateProvider/reducer';

interface SearchProps {
  hideButtons?: boolean;
}

const Search: React.FC<SearchProps> = ({ hideButtons = false }) => {
  const [_, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const history = useHistory();

  function handleSearch(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (input.length > 0) {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });
      history.push('/search');
    }
  }

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search__micIcon" />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={handleSearch} variant="outlined">
            Pesquisa Google
          </Button>
          <Button variant="outlined">Estou com sorte</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button className="search__buttonsHidden" type="submit" onClick={handleSearch} variant="outlined">
            Pesquisa Google
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">Estou com sorte</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
