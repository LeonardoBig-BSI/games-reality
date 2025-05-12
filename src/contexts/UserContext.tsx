import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";
import { User } from "../interfaces/User";

interface UserContextProps {
    users: User[];
    setUsers: Dispatch<SetStateAction<User[]>>;
}

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [users, setUsers] = useState<User[]>([]);

    return (
        <UserContext.Provider
            value={{ users, setUsers }}
        >
            {children}
        </UserContext.Provider>
    )

}