import { Ref, forwardRef } from "react";

const Loading = forwardRef((_, ref?: Ref<HTMLDivElement>) => {
  return <div ref={ref}>Loading...</div>;
});

export default Loading;
