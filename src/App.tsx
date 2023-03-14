import { createContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { User, UserContextType } from "../Interfaces"
import Home from "./components/Home"

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => { }
})

const fakeUser = { username: "Mike" }

const App = () => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        setUser(fakeUser)
    }, [])

    return (
        <div>
            <UserContext.Provider value={{ user, setUser }}>
                {/* <Nav />  */}
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </UserContext.Provider>
        </div>
    )
}

export default App
