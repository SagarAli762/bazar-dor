import { IUser } from "@/types/user.type";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
interface IAuthContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}
export const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
});
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const sharedData = { user, setUser };
  return (
    <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
