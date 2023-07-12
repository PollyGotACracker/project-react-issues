import { styled } from "styled-components";

const Error = () => {
  return (
    <StyledError>
      <h1>404 Not Found</h1>
    </StyledError>
  );
};

const StyledError = styled.main`
  width: 100%;
  text-align: center;
`;

export default Error;
