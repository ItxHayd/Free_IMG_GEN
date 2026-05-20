import { createContext, useContext, useState} from "react"
import type { ReactNode } from "react"
type RateLimitContextType = {
    isRateLimited: boolean
    setIsRateLimited: React.Dispatch<React.SetStateAction<boolean>>
}

const RateLimitContext = createContext<RateLimitContextType | undefined>(undefined)

type Props = {
    children: ReactNode
}

export const RateLimitProvider = ({ children }: Props) => {

    const [isRateLimited, setIsRateLimited] = useState<boolean>(false)

    return (
        <RateLimitContext.Provider value={{
            isRateLimited,
            setIsRateLimited
        }}>
            {children}
        </RateLimitContext.Provider>
    )
}

export const useRateLimit = () => {
    const context = useContext(RateLimitContext)

    if (!context) {
        throw new Error("useRateLimit must be used within RateLimitProvider")
    }

    return context
}