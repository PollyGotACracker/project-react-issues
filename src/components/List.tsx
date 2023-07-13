import React from "react";
import ListItem from "./ListItem";
import Ad from "./Ad";
import { IssueItem } from "../services/issue.service";
import { styled } from "styled-components";

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
        <ListItem item={item} />
      </React.Fragment>
    );
  });

  return <StyledUl>{getList}</StyledUl>;
};

const StyledUl = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  margin: 40px;
  margin-left: calc(10vw * 0.5);
  margin-right: calc(10vw * 0.5);
`;

export default List;
