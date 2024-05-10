import ActorsPage from "../../components/ActorsPage/ActorsPage";
import { useParams } from "react-router-dom";
import MagicSuggestIcon from "../../components/MagicButton/MagicButton";

const Actor = () => {
  const { id } = useParams();
  return (
    <div className="main-container">
      <ActorsPage id={id} />
      <MagicSuggestIcon />
    </div>
  );
};

export default Actor;
