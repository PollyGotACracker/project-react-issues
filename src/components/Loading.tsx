import { Ref, forwardRef } from "react";
import { styled } from "styled-components";

type LoadingProps = {
  size?: "full" | "inline";
};

const Loading = forwardRef(
  ({ size }: LoadingProps, ref?: Ref<HTMLDivElement>) => {
    return (
      <StyledLoading size={size} ref={ref}>
        {"Loading..."}
      </StyledLoading>
    );
  }
);

const StyledLoading = styled.div<LoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.size === "full" ? "50vh" : "100px")};
  text-align: center;
`;

export default Loading;
