import React from "react";
import { cancellablePromise } from "./utils/cancellablePromise";
import useCancellablePromises from "./useCancellablePromises";

const delay = (n) => {
  return new Promise(resolve => setTimeout(resolve, n));
};

const useClickAndDoubleClick = (onClick, onDoubleClick) => {
  console.log('--> matt pkg');
  const promises = useCancellablePromises();

  const handleClick = () => {
    promises.clearPendingPromises();
    const waitForSecondClick = cancellablePromise(delay(300));
    promises.appendPendingPromise(waitForSecondClick);

    return waitForSecondClick.promise.then(() => {
      promises.removePendingPromise(waitForSecondClick);
      onClick();
    }).catch((err) => {
      promises.removePendingPromise(waitForSecondClick);
      if (!err.isCancelled) {
        throw err.error;
      }
    });
  };

  const handleDoubleClick = () => {
    promises.clearPendingPromises();
    onDoubleClick();
  };

  return [handleClick, handleDoubleClick];
}

export default useClickAndDoubleClick;
