import { createContext,useContext,useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [user,setUser] = useLocation("user",null);
    const navigate = useNavigate()

    const login = async (data) =>{
        setUser(data);
        navigate("/chat")
    }

    const logout = () =>{
        setUser(null)
        navigate("/", {replace: true})

    }
    const value = useMemo(
        () => ({
            user,
            login,
            logout,
        }),
        [user]
    )
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}