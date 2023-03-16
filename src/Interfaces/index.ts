export interface User {
    username: string;
}

export interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface Message {
    content: string;
    user: User
}
