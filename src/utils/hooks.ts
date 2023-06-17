import {useState} from 'react';

interface fetchProps {
  url: string;
  method: string;
  params: object;
}

export const useFetch = ({url, method = 'POST', params}: fetchProps) => {
  const [result, setResult] = useState<any>(null);
  fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then(response => response.json())
    .then(res => setResult(res))
    .catch(err => {
      console.error(err);
    });
  return {
    result,
  };
};
