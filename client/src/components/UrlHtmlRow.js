import React from 'react';
import ScraperAPI from '../utils/ScraperAPI';
import RequestColumn from './RequestColumn';

const UrlHtmlRow = ({ url }) => {
  const renderHtml = (html) => {
    return (
      <textarea
        className="form-control html-textarea"
        value={html}
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
      <td>
        <RequestColumn request={() => ScraperAPI.getHtml(url)}>
          {renderHtml}
        </RequestColumn>
      </td>
    </tr>
  );
};

export default UrlHtmlRow;
