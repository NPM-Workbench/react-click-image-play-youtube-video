/* node modules */
import React from "react";
import { TEmbedLink, TEmbedTitle } from "../types/index.js";

/* types */
type FCProps = {embedLink: TEmbedLink, embedTitle: TEmbedTitle};

/* component */
function FrameComponent(props: FCProps): React.ReactElement {
  /* props - destruct */
  const { embedLink, embedTitle } = props;
  const frameAllowed = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  return (
    <iframe
      src={`${embedLink}?autoplay=1&mute=0&rel=0`}
      title={embedTitle}
      allow={frameAllowed}
      allowFullScreen
    />
  );
}

/* exports */
export default FrameComponent;
