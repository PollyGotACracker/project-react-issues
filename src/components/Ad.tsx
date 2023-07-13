import { styled } from "styled-components";

type AdProps = {
  aHref: string;
  imgSrc: string;
};

const Ad: React.FC<AdProps> = ({ aHref, imgSrc }) => {
  return (
    <a href={aHref} target="_blank" rel="noopener noreferrer">
      <StyledAd>
        <img src={`${process.env.PUBLIC_URL}${imgSrc}`} alt="ad_image" />
      </StyledAd>
    </a>
  );
};

const StyledAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 59px;
`;

export default Ad;
