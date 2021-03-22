import React, { useState, useEffect } from 'react';
import ScraperAPI from '../utils/ScraperAPI';
import LoadingSpinner from './LoadingSpinner';

const initialState = { html: '', error: '' };

const UrlHtmlRow = ({ url }) => {
  const [request, setRequest] = useState(initialState);

  useEffect(() => {
    let mounted = true;
    setRequest(initialState);

    ScraperAPI.getHtml(url)
      .then((html) => mounted && setRequest({ html }))
      .catch(() => mounted && setRequest({ error: 'Something went wrong.' }));

    return () => {
      mounted = false;
    };
  }, [url]);

  const isLoading = () => {
    return !request.html && !request.error;
  };

  const renderHtml = () => {
    return request.error ? (
      <span className="text-danger">{request.error}</span>
    ) : (
      <textarea
        className="form-control html-textarea "
        value={request.html}
        rows="6"
        readOnly
      />
    );
  };

  return (
    <tr>
      <td>
        <p>{url}</p>
      </td>
      <td>{isLoading() ? <LoadingSpinner /> : renderHtml()}</td>
    </tr>
  );
};

export default UrlHtmlRow;
