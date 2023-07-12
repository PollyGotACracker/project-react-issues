type AdProps = {
  aHref: string;
  imgSrc: string;
};

const Ad: React.FC<AdProps> = ({ aHref, imgSrc }) => {
  return (
    <a href={aHref} target="_blank" rel="noopener noreferrer">
      <div>
        <img
          src={`${process.env.REACT_APP_BASE_URL}${imgSrc}`}
          alt="ad_image"
        />
      </div>
    </a>
  );
};

export default Ad;
