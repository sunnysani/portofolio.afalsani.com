import classes from "./Empty.module.css";
import Card from "../ui/Card";

function Empty(props) {
  return (
    <Card>
      <div className={classes.empty}>
        <div className={classes.wobbleHorBottom}>{props.img}</div>
        {props.children}
      </div>
    </Card>
  );
}

export default Empty;
