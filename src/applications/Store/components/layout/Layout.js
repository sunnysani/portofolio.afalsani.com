// import ActionBar from "../etc/ActionBar";
import CheckUsername from "../etc/CheckUsername";
import classes from "./Layout.module.css";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div>
      <CheckUsername />
      <Navbar />
      {/* <ActionBar> */}
      <div className={classes.content}>{props.children}</div>
      {/* </ActionBar> */}
    </div>
  );
}

export default Layout;
