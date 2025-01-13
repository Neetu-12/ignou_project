import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulate checking authentication status (e.g., from localStorage or API)
    useEffect(() => {
        const loggedUser = localStorage.getItem('token');
        if (loggedUser) {
        console.log(loggedUser,'loggedUser');
            setUser(loggedUser);
        }
        setLoading(false);
    }, []);

    // Login function
    const login = (userData) => {
        setUser(userData);
        // localStorage.setItem('user', JSON.stringify(userData)); // Save user in localStorage
    };

    // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    // Auth context value
    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};



// import React, { useContext } from 'react';
// import { AuthContext } from './context/AuthContext';

// const Dashboard = () => {
//     const { user, login, logout, isAuthenticated } = useContext(AuthContext);

//     const handleLogin = () => {
//         const dummyUser = { id: 1, name: 'John Doe', email: 'john@example.com' };
//         login(dummyUser);
//     };

//     const handleLogout = () => {
//         logout();
//     };

//     return (
//         <div>
//             <h1>Dashboard</h1>
//             {isAuthenticated ? (
//                 <>
//                     <p>Welcome, {user.name}</p>
//                     <button onClick={handleLogout}>Logout</button>
//                 </>
//             ) : (
//                 <>
//                     <p>Please log in</p>
//                     <button onClick={handleLogin}>Login</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Dashboard;
