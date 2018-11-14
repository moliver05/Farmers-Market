
import React from 'react';

function NewGoods(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Pair Names'/>

        <input
          type='text'
          id='location'
          placeholder='Location'/>

        <input
          id='price'
          placeholder='How Much.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewGoods;