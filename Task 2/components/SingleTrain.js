import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from '../apiService';

const SingleTrain = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);


    const fetchSingleTrain = async () => {
      try {
        const response = await getSingleTrain(trainNumber);
        setTrain(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchSingleTrain();
    [trainNumber];

  return (
    <div>
      <h2>Single Train Details</h2>
      {train ? (
        <div>
          {/* Display */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrain;