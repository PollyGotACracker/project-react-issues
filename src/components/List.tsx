import React from "react";
import ListItem from "./ListItem";
import Ad from "./Ad";
import { IssueItem } from "../services/issue.service";

type ListProps = {
  data: IssueItem[];
};

const A_HREF = "https://www.wanted.co.kr/";
const IMG_SRC = "/images/ad_wanted.webp";

const List: React.FC<ListProps> = ({ data }) => {
  const getList = data.map((item, index) => {
    return (
      <React.Fragment key={item.id}>
        {index !== 0 && index % 4 === 0 && (
          <Ad aHref={A_HREF} imgSrc={IMG_SRC} />
        )}
        <ListItem id={item.id} item={item} />
      </React.Fragment>
    );
  });

  return <>{getList}</>;
};

export default List;
