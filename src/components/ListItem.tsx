import { Link } from "react-router-dom";

type ListItemProps = {
  item: { id: number };
  id: string | number;
};

const ListItem: React.FC<ListItemProps> = ({ item, id }) => {
  return (
    <li>
      <Link to={`/issue/${id}`}>
        {Object.entries(item).map((prop) => {
          const [key, value] = prop;
          return <div key={key}>{value}</div>;
        })}
      </Link>
    </li>
  );
};

export default ListItem;
