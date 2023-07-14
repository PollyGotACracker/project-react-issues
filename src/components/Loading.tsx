import { styled } from "styled-components";

type LoadingProps = {
  visible: boolean;
};

const Loading = ({ visible }: LoadingProps) => {
  return (
    <StyledLoading $visible={visible}>{visible && "Loading..."}</StyledLoading>
  );
};

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
