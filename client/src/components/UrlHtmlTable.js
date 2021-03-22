import React from 'react';
import UrlHtmlRow from './UrlHtmlRow';

const UrlHtmlTable = ({ userRequest }) => {
  return (
    <table id="url-table" className="table table-striped">
      <thead>
        <tr>
          <th id="url-column">URL</th>
          <th>HTML</th>
        </tr>
      </thead>
      <tbody>
        {userRequest.urls.map((url, index) => (
          <UrlHtmlRow key={index + userRequest.time} url={url} />
        ))}
      </tbody>
    </table>
  );
};

export default UrlHtmlTable;
