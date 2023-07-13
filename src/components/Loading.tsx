import { Ref, forwardRef } from "react";
import { styled } from "styled-components";

type LoadingProps = {
  visible: boolean;
};

const Loading = forwardRef(
  ({ visible }: LoadingProps, ref?: Ref<HTMLDivElement>) => {
    return (
      <StyledLoading $visible={visible} ref={ref}>
        {visible && "Loading..."}
      </StyledLoading>
    );
  }
);

const StyledLoading = styled.div<{ $visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;

export default Loading;
