import React from 'react';
import Toast from '../Toast';

import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, onDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <Toast
            key={toast.id}
            id={toast.id}
            variant={toast.variant}
            onDismiss={onDismiss}
          >
            {toast.message}
          </Toast>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
