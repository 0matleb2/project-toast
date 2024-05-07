import React from 'react';
import ToastShelf from '../ToastShelf';
import useKeyDown from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToasts);
  }

  function removeToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  const removeAllToasts = React.useCallback(() => setToasts([]), []);

  useKeyDown('Escape', removeAllToasts);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      <ToastShelf />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
