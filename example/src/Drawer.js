import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Docs from "./Docs";

//type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = () =>
    function (event) {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, right: !state.right });
    };

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer(true)}>Docs</Button>
        <Drawer
         
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer(false)}
        >

              <Docs />

        </Drawer>
      </React.Fragment>
    </div>
  );
}
