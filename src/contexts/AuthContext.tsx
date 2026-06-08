import { createContext, use, useState } from "react";

interface User {
	id: string;
	email: string;
	fullname: string;
	username: string;
	role: string;
}

interface AuthContextType {
	user: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, _setUser] = useState<User | null>(null);

	return <AuthContext value={{ user }}>{children}</AuthContext>;
}

export function useAuth() {
	return use(AuthContext);
}
