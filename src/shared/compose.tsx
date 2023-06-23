// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const compose =
  (...fns: Array<Function>) =>
  (x: Function) =>
    fns.reduceRight((y, f) => f(y), x);
