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
  width: 100%;
  list-style: none;
  border-bottom: 1px solid #aaa;

  & > a {
    padding: 10px;
    display: grid;
    row-gap: 5px;
    column-gap: 20%;
    grid-template-rows: auto auto;
    grid-template-columns: 5fr 1fr;
    color: inherit;
    text-decoration: none;
    min-height: 0;
    min-width: 0;
  }
  & > a:hover div:first-child {
    color: red;
  }

  & > a > * {
    word-break: keep-all;
    min-width: 0;
  }
  & > a > div:first-child {
    color: blue;
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.2s ease;
    overflow-wrap: anywhere;
  }
  & > a > div:nth-child(2) {
    font-size: 0.9rem;
  }
  & > a > div:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    grid-column: 2;
    grid-row: 1 / span 2;
  }
`;

export default ListItem;
