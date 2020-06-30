import React from 'react';

export default function Card(props) {
  return (
    <article className="card">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </article>
  );
}