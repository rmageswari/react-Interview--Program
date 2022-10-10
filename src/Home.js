import React from 'react';

const Home = () => {
  const add = (number) => {
    if (number <= 0) {
      return 0;
    } else {
      console.log('val', number, number + add(number - 1));
      return number + add(number - 1);
    }
  };

  return (
    <div>
      <button type="button" onClick={() => add(3)}>
        Click Me!
      </button>
    </div>
  );
};
export default Home;
