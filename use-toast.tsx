import { createContext, useContext, useState, ReactNode } from "react";

type Toast = {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
};

type ToastContextType = {
  toast: (toast: Toast) => void;
  toasts: Toast[];
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function toast(newToast: Toast) {
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
  }

  return (
    <ToastContext.Provider value={{ toast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
