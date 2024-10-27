// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const InterestsPage = () => {
//     const [interests, setInterests] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchInterests = async () => {
//             try {
//                 const res = await axios.get('/api/interests', {
//                     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//                 });
//                 setInterests(res.data);
//             } catch (err) {
//                 console.error('Failed to fetch interests:', err);
//             }
//         };
//         fetchInterests();
//     }, []);
//     console.log(interests);
    

//     const resetInterests = async () => {
//         navigate('/protected');
//     };

//     return (
//       <div className=" mt-16 pt-[100px] min-h-screen bg-gray-100 flex justify-center overflow-auto">
//           <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//               <h2 className="text-2xl font-bold mb-4 text-center">Your Selected Interests</h2>
//               <ul className="space-y-2 mb-6">
//                   {interests.map((interest) => (
//                       <li key={interest._id} className="text-gray-700">
//                           {interest.name}
//                       </li>
//                   ))}
//               </ul>

//               <button 
//                   onClick={resetInterests} 
//                   className="w-full bg-red-500 text-white p-2 rounded"
//               >
//                   Reset Interests
//               </button>
//           </div>
//       </div>
//   );
// };

// export default InterestsPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InterestsPage = () => {
    const [interests, setInterests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInterests = async () => {
            try {
                const res = await axios.get('/api/interests', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setInterests(res.data);
            } catch (err) {
                console.error('Failed to fetch interests:', err);
            }
        };
        fetchInterests();
    }, []);
    console.log(interests);

    const resetInterests = async () => {
        navigate('/protected');
    };

    return (
        <div className="mt-16 flex items-center justify-center min-h-screen bg-gray-100 overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md max-h-[75vh] ">
                <h2 className="text-xl font-bold mb-2 text-center">Your Selected Interests</h2>
                <ul className="space-y-3 mb-6">
                    {interests.map((interest) => (
                        <li key={interest._id} className="text-gray-700">
                            {interest.name}
                        </li>
                    ))}
                </ul>

                <button 
                    onClick={resetInterests} 
                    className="w-full bg-red-500 text-white p-2 rounded"
                >
                    Reset Interests
                </button>
            </div>
        </div>
    );
};

export default InterestsPage;
