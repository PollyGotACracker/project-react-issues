import React from "react";
import { Link } from "react-router-dom";
import Ad from "./Ad";

type ListItemProps = {
  item: { id: number };
  id: string | number;
};

type ListProps = {
  data: { id: number }[];
  adAHref: string;
  adImgSrc: string;
};

const ListItem: React.FC<ListItemProps> = ({ item, id }) => {
  return (
    <Link to={`/${id}`}>
      <li>
        {Object.entries(item).map((prop) => {
          const [key, value] = prop;
          return <div key={key}>{value}</div>;
        })}
      </li>
    </Link>
  );
};

const List: React.FC<ListProps> = ({ data, adAHref, adImgSrc }) => {
  const content = data.map((item, index) => (
    <React.Fragment key={index}>
      {index !== 0 && index % 4 === 0 && (
        <Ad key={`ad-${index}`} aHref={adAHref} imgSrc={adImgSrc} />
      )}
      <ListItem key={`item-${item.id}`} id={item.id} item={item} />
    </React.Fragment>
  ));

  return <ul>{content}</ul>;
};

export default List;
