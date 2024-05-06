import React from 'react';
import Toast from '../Toast';

import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <Toast key={toast.id} id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
