// styles
import AllLists from '../../components/AllLists/AllLists';
import MagicSuggestIcon from '../../components/MagicButton/MagicButton';
import classes from './styles.module.css';

export default function Lists() {
  return (
    <div className="main-container">
      <AllLists />
      <MagicSuggestIcon />
    </div>
  )
}