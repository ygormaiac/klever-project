import { useEffect, useState } from 'react';

export default function useFetchApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'http://localhost:3001/criptos';
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
    }
    fetchAPI();
  }, [])
  return { data, setData }
}