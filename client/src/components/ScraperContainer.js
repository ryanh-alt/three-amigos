import React, { useState } from 'react';
import UrlForm from './UrlForm';
import UrlHtmlTable from './UrlHtmlTable';

const ScraperContainer = () => {
  const [urls, setUrls] = useState([]);

  const handleSubmit = (val) => {
    if (val) {
      setUrls(val.split(',').map((s) => s.trim()));
    }
  };

  return (
    <div>
      <UrlForm handleSubmit={handleSubmit} />
      <UrlHtmlTable urls={urls} />
    </div>
  );
};

export default ScraperContainer;
