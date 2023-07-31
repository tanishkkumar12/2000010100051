import React, { useState } from 'react';
import { getAllTrains } from '../apiService';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  
    const fetchTrains = async () => {
      try {
        const response = await getAllTrains();
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching', error);
      }
    };
    fetchTrains();
  

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {/* list of trains */}
      </ul>
    </div>
  );
};

export default AllTrains;