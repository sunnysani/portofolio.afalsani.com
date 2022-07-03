import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import classes from "./Accordion.module.css";

function AccordionItem(heading, subHeading, content) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    console.log(show);
    setShow(!show);
  };

  return (
    <div key={heading} onClick={toggleShow}>
      <div className={classes.heading}>
        <div>
          {heading}
          <div className={classes.subHeading}>{subHeading}</div>
        </div>
        <BsChevronRight />
      </div>
      <div className={`${classes.content} ${show && classes.show}`}>
        {content}
      </div>
    </div>
  );
}

// items = [{heading: 'head', content: 'content'}, ...]
function Accordion({ items }) {
  items = [
    {
      heading: "Heading 1",
      subHeading: "Checkouted at Sat Jul 02 2022 00:28:30",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat mauris id felis gravida fringilla. Phasellus feugiat commodo ligula ac ultrices. Ut magna magna, tincidunt at rutrum eget, porta in urna. Suspendisse sit amet sapien sodales, congue nisi ut, maximus ipsum. Morbi porta, leo nec blandit consequat, tellus augue gravida leo, ut consequat diam felis at sapien. Sed pretium elementum felis, sed porttitor sapien facilisis non. Quisque molestie lectus sed mauris porttitor pharetra. Cras nisl est, sagittis eget justo at, dignissim semper dui. Donec sagittis efficitur pellentesque. Vivamus iaculis pellentesque massa vitae tempor. Morbi fermentum sagittis dignissim. Integer vulputate gravida sollicitudin. Quisque volutpat velit dignissim pretium accumsan. Curabitur nec libero imperdiet, ornare quam suscipit, tincidunt velit. Phasellus vel libero id sapien convallis pharetra in vel dui. Fusce cursus, odio eu commodo elementum, justo tellus tristique sem, sed vestibulum dolor odio ac lacus.",
    },
    {
      heading: "Heading 2",
      subHeading: "Checkouted at Sat Jul 02 2022 00:28:30",
      content:
        "Quisque semper augue vel consequat mattis. Ut scelerisque metus vitae metus aliquet, ut vestibulum nisi accumsan. Fusce eu euismod lorem, in pretium nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In feugiat nisl vel mattis finibus. Ut accumsan pretium mauris id maximus. Vivamus accumsan justo neque, in maximus dui faucibus at.",
    },
  ];
  return (
    <div className={classes.main}>
      {items.map((item) =>
        AccordionItem(item.heading, item.subHeading, item.content)
      )}
    </div>
  );
}

export default Accordion;
