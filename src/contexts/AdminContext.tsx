import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

interface AdminContextType {
  authed: boolean;
  showPrompt: boolean;
  login: (input: string) => boolean;
  logout: () => void;
  setShowPrompt: (show: boolean) => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem("admin") === "true",
  );
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        e.preventDefault();
        setShowPrompt(true);
      }
      if (e.key === "Escape") setShowPrompt(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const login = useCallback((input: string) => {
    if (input === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin", "true");
      setAuthed(true);
      setShowPrompt(false);
      return true;
    }
    setShowPrompt(false);
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem("admin");
    setAuthed(false);
  }, []);

  const value = useMemo(
    () => ({ authed, showPrompt, login, logout, setShowPrompt }),
    [authed, showPrompt, login, logout],
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used inside <AdminProvider>");
  return ctx;
}
