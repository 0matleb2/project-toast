import React, { useEffect } from 'react';
import ToastShelf from '../ToastShelf';

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

  function removeAllToasts() {
    setToasts([]);
  }

  useEffect(() => {
    function handleEscapePressed(event) {
      if (event.key === 'Escape') {
        removeAllToasts();
      }
    }

    document.addEventListener('keydown', handleEscapePressed);

    return () => {
      document.removeEventListener('keydown', handleEscapePressed);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      <ToastShelf />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
