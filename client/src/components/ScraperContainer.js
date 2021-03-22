import React, { useState } from 'react';
import UrlForm from './UrlForm';
import UrlHtmlTable from './UrlHtmlTable';

const ScraperContainer = () => {
  const [userRequest, setUserRequest] = useState({
    urls: [],
    time: 0,
  });

  const handleSubmit = (val) => {
    if (val) {
      setUserRequest({
        urls: val.split(',').map((s) => s.trim()),
        time: new Date().getTime(),
      });
    }
  };

  return (
    <div>
      <UrlForm handleSubmit={handleSubmit} />
      <UrlHtmlTable userRequest={userRequest} />
    </div>
  );
};

export default ScraperContainer;
