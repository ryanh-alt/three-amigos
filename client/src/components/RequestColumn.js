import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const RequestColumn = ({ request, children }) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    let mounted = true;

    setResponse(null);
    request()
      .then((data) => mounted && setResponse({ data }))
      .catch(() => mounted && setResponse({ error: 'Something went wrong.' }));

    return () => {
      mounted = false;
    };
  }, [request]);

  const renderData = () => {
    return response.data ? (
      children(response.data)
    ) : (
      <p className="text-danger">{response.error}</p>
    );
  };

  return response === null ? <LoadingSpinner /> : renderData();
};

export default RequestColumn;
