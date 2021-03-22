import React, { useState } from 'react';

const UrlForm = ({ handleSubmit }) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
  };

  return (
    <form id="url-form" onSubmit={onSubmit}>
      <div className="form-group">
        <input
          id="url-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
          autoComplete="off"
          placeholder="example.com, www.another.com, https://website.com"
        />
        <small id="url-help" className="form-text text-muted">
          Enter comma separated URLs.
        </small>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UrlForm;
