import React, { useState, useContext } from "react";

const userContext = React.createContext();

const UserProvider = ({ children }) => {
  const data = ProfileData();
  const [profileuserData, setProfileuserData] = useState(data);
  return (
    <userContext.Provider value={{ profileuserData, setProfileuserData }}>
      {children}
    </userContext.Provider>
  );

  function ProfileData() {
    return {
      id: 3,
      photo:
        "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
      name: "Sunder Pitchai",
      email: "sundar@gmail.com",
      mobile: "96734579498",
      about:
        "Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Born in Madras, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering."
    };
  }
};

export const useGlobalContext = () => {
  return useContext(userContext);
};

export { userContext, UserProvider };
