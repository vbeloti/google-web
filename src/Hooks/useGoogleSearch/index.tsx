import { useState, useEffect } from 'react';
import API_KEY from '../../config/search';

const CONTEXT_KEY = 'd6eca79650003b91f';

interface DataProps {
  searchInformation: {
    formattedTotalResults: string;
    formattedSearchTime: string;
  };

  items: ItemProps[];
}

interface ItemProps {
  title: string;
  link: string;
  displayLink: string;
  snippet: string;
  pagemap: CseProps
}

interface CseProps {
  cse_image: SrcProps[];
}

interface SrcProps {
  src: string;
}

const useGoogleSearch = (term: string) => {
  const [data, setData] = useState<DataProps>({} as DataProps);

  useEffect(() => {
    if (!term) return;
    const fetchData = async () => {
      const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch(console.error);
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
