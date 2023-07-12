import { styled } from "styled-components";

type AdProps = {
  aHref: string;
  imgSrc: string;
};

const Ad: React.FC<AdProps> = ({ aHref, imgSrc }) => {
  return (
    <a href={aHref} target="_blank" rel="noopener noreferrer">
      <StyledAd>
        <img
          src={`${process.env.REACT_APP_BASE_URL}${imgSrc}`}
          alt="ad_image"
        />
      </StyledAd>
    </a>
  );
};

const StyledAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default Ad;
