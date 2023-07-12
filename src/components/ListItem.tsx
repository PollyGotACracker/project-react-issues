import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { IssueItem } from "../services/issue.service";

type ListItemProps = {
  item: IssueItem;
};

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <StyledLi>
      <Link to={`/issue/${item.id}`}>
        <div>{`#${item.id} ${item.title}`}</div>
        <div>{`작성자: ${item.user}, 작성일: ${item.created_at}`}</div>
        <div>{`코멘트: ${item.comments}`}</div>
      </Link>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #aaa;

  & > a {
    display: grid;
    row-gap: 5px;
    column-gap: 20px;
    grid-template-columns: 6fr 1fr;
    color: inherit;
    text-decoration: none;
  }
  & > a:hover div:first-child {
    color: red;
  }

  & > a > div:first-child {
    color: blue;
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  & > a > div:nth-child(2) {
    font-size: 0.9rem;
  }
  & > a > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-column: 2;
    grid-row: 1 / span 2;
    word-break: keep-all;
  }
`;

export default ListItem;
