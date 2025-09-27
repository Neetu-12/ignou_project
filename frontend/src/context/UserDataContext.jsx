
import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserDataContext = (props) => {
    const [items, setItems] = useState([])
    return <UserContext.Provider value={{ items, setItems }}>{props.children}</UserContext.Provider>
};





// import React, { createContext, useContext } from 'react';
// const UserContext = createContext();
// const App = () => {
//   const user = { name: 'Alice' };
//   return (
//     <UserContext.Provider value={user}>
//       <Child />
//     </UserContext.Provider>
//   );
// };
// const Child = () => {
//   const user = useContext(UserContext);
//   return <div>Hello, {user.name}!</div>;
// };

