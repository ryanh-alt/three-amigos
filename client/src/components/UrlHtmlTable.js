import React from 'react';
import UrlHtmlRow from './UrlHtmlRow';

const UrlHtmlTable = ({ urls }) => {
  return (
    <table id="url-table" className="table table-striped">
      <thead>
        <tr>
          <th id="url-column">URL</th>
          <th>HTML</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url, index) => (
          <UrlHtmlRow key={index} url={url} />
        ))}
      </tbody>
    </table>
  );
};

export default UrlHtmlTable;
