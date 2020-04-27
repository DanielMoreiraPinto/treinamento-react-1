import * as React from 'react';
import '../App.css';

export default function TodoItem(texto) {
  return(
    <div>
      <p class="text"> &diams; {texto} </p>
    </div>
  );
}