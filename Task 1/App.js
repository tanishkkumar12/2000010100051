import React, { useState } from 'react';

const NumManagementService = () => {
  const [num, setNum] = useState([]);

  const getUniqueNumbers = async (urls) => {
    const all = urls.map((url) =>
      fetch(url)
        .then((response) => response.json())
        .then((data) => data.numbers)
        .catch((error) => {
          console.error('Error fetching', error);
          return [];
        })
    );

    try {
      const responses = await Promise.allSettled(all);
      let merged = [];
      responses.forEach((response) => {
        if (response.status === 'fulfilled') {
          merged = merged.concat(response.value);
        }
      });
      const uniqueNumbers = Array.from(new Set(merged)).sort((a, b) => a-b);
      setNum(uniqueNumbers);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const testURLs = [
    'http://20.244.56.144/numbers/primes',
    'http://20.244.56.144/numbers/fibo',
    'http://20.244.56.144/numbers/odd',
    'http://20.244.56.144/numbers/rand',
  ];


  getUniqueNumbers(testURLs);

  return (
    <div>
      <h1>Number Management Service System</h1>
      <p>Output-</p>
      <pre>{JSON.stringify({ num }, null, 2)}</pre>
    </div>
  );
};

export default NumManagementService;