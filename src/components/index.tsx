/* node modules */
import React from "react";

/* app imports */
import "../styles/style.scss";
import { TEmbedLink, TEmbedTitle } from "../types/index.js";
import useOveralay from "../hooks/use-overalay";
import MainDiv from "./main-div";
import CloseBtn from "./close-button";
import FrameComponent from "./frame-component";

/* types */
type FCProps = {
  embedLink: TEmbedLink,
  embedTitle: TEmbedTitle,
  onCloseFn?: () => void,
};

/* component */
function UIComponent(props: FCProps): React.ReactElement  | null {
  /* hook(s) */
  const { showOverlay, createOverlay, handleOnOverlayClose } = useOveralay(props);

  if (!showOverlay && !createOverlay) {
    return null;
  }
  return (
    <>
      <MainDiv show={(createOverlay && showOverlay) ? true : false}>
        <CloseBtn handleOnClick={handleOnOverlayClose} />
        <FrameComponent {...props} />
      </MainDiv>
    </>
  );
}

/* exports */
const ReactYouTubeOverlay = React.memo(UIComponent);
export { ReactYouTubeOverlay };
