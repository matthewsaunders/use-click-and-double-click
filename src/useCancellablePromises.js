import React, { useRef } from "react";

const useCancellablePromises = () => {
  const pendingPromises = useRef([]);

  const appendPendingPromise = (promise) => {
    pendingPromises.current = [...pendingPromises.current, promise];
  }

  const removePendingPromise = (promise) => {
    pendingPromises.current = pendingPromises.current.filter(p => p !== promise);
  }

  const clearPendingPromises = () => {
    pendingPromises.current.map(p => p.cancel());
  }

  return {
    appendPendingPromise,
    removePendingPromise,
    clearPendingPromises,
  }
}

export default useCancellablePromises;
