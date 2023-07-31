import React, { useState } from 'react';

const NumManagementService = () => {
  const [num , setNum] = useState([]);
  const getUniqueNumbers = async(url) =>{
    const all = url.map((url)=>
      fetch (url)
        .then((response) => response.json())
        .then((data) =>data.num)
        .catch((error) =>{
          console.error("Error fetching");
          return [];

        })
  );
  try {
    const response = await Promise.allSettled(all);
    let merged = [];
    response.array.forEach((response) => {
      if (response.status === 'success') {
        merged =merged.concat(response.value);
      }
      
    });
    const uniquenumbers =Array.from(new Set(merged)).sort((a,b) => a.num - b.num);
    setNum(uniquenumbers);
  } catch (error) {
    console.error('Error', error);
  }
};

const testURLs = ['http://20.244.56.144/numbers/primes', 'http://20.244.56.144/numbers/fibo' , 'https://20.244.56.144/numbers/odd','https://20.244.56.144/numbers/rand'];
getUniqueNumbers (testURLs);

return (
  <div>
    <h1>
      Number Management Service System 
    </h1>
    <p>
      Output-
    </p>
    <pre>{JSON.stringify({ num}, null, 2)}</pre>
  </div>

);

};

export default NumManagementService;