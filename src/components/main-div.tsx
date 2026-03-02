/* node modules */
import React from "react";
type FCProps = React.PropsWithChildren & { show: boolean };

/* component */
function MainDiv(props: FCProps): React.ReactElement {
  /* props - destruct */
  const { children, show } = props;
  if (show) {
    return (
      <div className="videoPlayerOverlay">
        { children }
      </div>
    );
  } else {
    return (
      <div className="videoPlayerOverlay hiddenTransform" />
    );
  }
}

/* exports */
export default MainDiv;
