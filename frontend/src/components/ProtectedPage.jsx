// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ProtectedPage = () => {
//     const [categories, setCategories] = useState([]);
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [page, setPage] = useState(1);
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const res = await axios.get(`/api/categories?page=${page}`, {
//                     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//                 });
//                 setCategories(res.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };
//         fetchCategories();
//     }, [page]);

//     const handleSelect = (category) => {
//         setSelectedCategories((prevSelected) => {
//             if (prevSelected.includes(category._id)) {
//                 return prevSelected.filter(id => id !== category._id);
//             } else {
//                 return [...prevSelected, category._id];
//             }
//         });
//     };

//     const saveInterests = async () => {
//         try {
//             await axios.post('/api/interests', { categoryIds: selectedCategories }, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//             });
//             setMessage("Interests saved successfully!");
//             // Navigate to the InterestsPage after saving
//             navigate('/interests');
//         } catch (err) {
//             setMessage("Failed to save interests. Please try again.");
//             console.error(err);
//         }
//     };

//     return (
//         <div className=" mt-16 flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//                 <h2 className="text-2xl font-bold mb-2 text-center">Please mark your interests!</h2>
//                 <p className="text-center text-gray-500 mb-6">We will keep you notified.</p>
                
//                 <h3 className="text-lg font-semibold mb-4">My saved interests!</h3>
//                 <ul className="space-y-3">
//                     {categories.map((category) => (
//                         <li key={category._id} className="flex items-center">
//                             <input 
//                                 type="checkbox" 
//                                 checked={selectedCategories.includes(category._id)}
//                                 onChange={() => handleSelect(category)} 
//                                 className="mr-3 w-4 h-4"
//                             />
//                             <span className="text-gray-700">{category.name}</span>
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Save Interests Button */}
//                 <button 
//                     onClick={saveInterests} 
//                     className="mt-6 w-full bg-black text-white p-2 rounded"
//                 >
//                     Save Interests
//                 </button>

//                 {/* Display success or error message */}
//                 {message && <p className="text-center text-green-500 mt-4">{message}</p>}

//                 {/* Pagination */}
//                 <div className="flex justify-center mt-6 space-x-2 text-gray-600">
//                     <button 
//                         onClick={() => setPage(page - 1)} 
//                         disabled={page === 1} 
//                         className="px-2"
//                     >
//                         &lt;&lt;
//                     </button>
//                     {Array.from({ length: 7 }, (_, i) => (
//                         <button 
//                             key={i} 
//                             onClick={() => setPage(i + 1)} 
//                             className={`px-2 ${page === i + 1 ? 'font-bold text-black' : 'text-gray-600'}`}
//                         >
//                             {i + 1}
//                         </button>
//                     ))}
//                     <button 
//                         onClick={() => setPage(page + 1)} 
//                         className="px-2"
//                     >
//                         &gt;&gt;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProtectedPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ProtectedPage = () => {
//     const [categories, setCategories] = useState([]);
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [page, setPage] = useState(1);
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const res = await axios.get(`/api/categories?page=${page}`, {
//                     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//                 });
//                 setCategories(res.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };
//         fetchCategories();
//     }, [page]);

//     const handleSelect = (category) => {
//         setSelectedCategories((prevSelected) => {
//             if (prevSelected.includes(category._id)) {
//                 return prevSelected.filter(id => id !== category._id);
//             } else {
//                 return [...prevSelected, category._id];
//             }
//         });
//     };

//     const saveInterests = async () => {
//         try {
//             await axios.post('/api/interests', { categoryIds: selectedCategories }, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//             });
//             setMessage("Interests saved successfully!");
//             navigate('/interests');
//         } catch (err) {
//             setMessage("Failed to save interests. Please try again.");
//             console.error(err);
//         }
//     };

//     return (
//         <div className="mt-16 flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md max-h-[75vh] overflow-y-auto">
//                 <h2 className="text-xl font-bold mb-2 text-center">Please mark your interests!</h2>
//                 <p className="text-center text-gray-500 mb-4">We will keep you notified.</p>
                
//                 <h3 className="text-lg font-semibold mb-4">My saved interests!</h3>
//                 <ul className="space-y-3">
//                     {categories.map((category) => (
//                         <li key={category._id} className="flex items-center">
//                             <input 
//                                 type="checkbox" 
//                                 checked={selectedCategories.includes(category._id)}
//                                 onChange={() => handleSelect(category)} 
//                                 className="mr-3 w-4 h-4"
//                             />
//                             <span className="text-gray-700">{category.name}</span>
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Save Interests Button */}
//                 <button 
//                     onClick={saveInterests} 
//                     className="mt-6 w-full bg-black text-white p-2 rounded"
//                 >
//                     Save Interests
//                 </button>

//                 {/* Display success or error message */}
//                 {message && <p className="text-center text-green-500 mt-4">{message}</p>}

//                 {/* Pagination */}
//                 <div className="flex justify-center mt-4 space-x-2 text-gray-600">
//                     <button 
//                         onClick={() => setPage(page - 1)} 
//                         disabled={page === 1} 
//                         className="px-2"
//                     >
//                         &lt;&lt;
//                     </button>
//                     {Array.from({ length: 7 }, (_, i) => (
//                         <button 
//                             key={i} 
//                             onClick={() => setPage(i + 1)} 
//                             className={`px-2 ${page === i + 1 ? 'font-bold text-black' : 'text-gray-600'}`}
//                         >
//                             {i + 1}
//                         </button>
//                     ))}
//                     <button 
//                         onClick={() => setPage(page + 1)} 
//                         className="px-2"
//                     >
//                         &gt;&gt;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProtectedPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`/api/categories?page=${page}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setCategories(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCategories();
    }, [page]);

    const handleSelect = (category) => {
        setSelectedCategories((prevSelected) => {
            if (prevSelected.includes(category._id)) {
                return prevSelected.filter(id => id !== category._id);
            } else {
                return [...prevSelected, category._id];
            }
        });
    };

    const saveInterests = async () => {
        try {
            await axios.post('/api/interests', { categoryIds: selectedCategories }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setMessage("Interests saved successfully!");
            navigate('/interests');
        } catch (err) {
            setMessage("Failed to save interests. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="mt-16 flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md max-h-[75vh] ">
                <h2 className="text-xl font-bold mb-2 text-center">Please mark your interests!</h2>
                <p className="text-center text-gray-500 mb-4">We will keep you notified.</p>
                
                <h3 className="text-lg font-semibold mb-4">My saved interests!</h3>
                <ul className="space-y-3">
                    {categories.map((category) => (
                        <li key={category._id} className="flex items-center">
                            <input 
                                type="checkbox" 
                                checked={selectedCategories.includes(category._id)}
                                onChange={() => handleSelect(category)} 
                                className="mr-3 w-4 h-4"
                            />
                            <span className="text-gray-700">{category.name}</span>
                        </li>
                    ))}
                </ul>

                <button 
                    onClick={saveInterests} 
                    className="mt-6 w-full bg-black text-white p-2 rounded"
                >
                    Save Interests
                </button>

                {message && <p className="text-center text-green-500 mt-4">{message}</p>}

                <div className="flex justify-center mt-4 space-x-2 text-gray-600">
                    <button 
                        onClick={() => setPage(page - 1)} 
                        disabled={page === 1} 
                        className="px-2"
                    >
                        &lt;&lt;
                    </button>
                    {Array.from({ length: 7 }, (_, i) => (
                        <button 
                            key={i} 
                            onClick={() => setPage(i + 1)} 
                            className={`px-2 ${page === i + 1 ? 'font-bold text-black' : 'text-gray-600'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button 
                        onClick={() => setPage(page + 1)} 
                        className="px-2"
                    >
                        &gt;&gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProtectedPage;


