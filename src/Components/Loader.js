import gif from "./Rounded blocks.gif";
import Styles from "./Cards.module.css";
export default function Loader() {
  return (
    <div className={Styles.loader}>
      <img src={gif} />
      {/* <div>Loading...</div> */}
      {/* Loading.... */}
    </div>
  );
}
