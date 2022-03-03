export const cancellablePromise = (promise) => {
  let isCancelled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (value) => isCancelled ? reject({ isCancelled, value }) : resolve(value),
      (error) => reject({ isCancelled, error }),
    );
  });

  return {
    promise: wrappedPromise,
    cancel: () => isCancelled = true,
  };
}
