/* node modules */
import { useState, useEffect } from 'react';
import { TEmbedLink, TEmbedTitle } from '../types';

/* types */
type TInput = {
  embedLink: TEmbedLink;
  embedTitle: TEmbedTitle;
  onCloseFn?: () => void;
};

/* hook */
function useOveralay(props: TInput) {
  /* props - destruct */
  const { embedLink, embedTitle, onCloseFn } = props;

  /* local state */
  const [createOverlay, setCreateOverlay] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  /* event: on close */
  function handleOnOverlayClose() {
    setShowOverlay(() => false);
    setTimeout(() => {
      setCreateOverlay(() => false);
      /* execute if present */
      if (onCloseFn && typeof onCloseFn === 'function') {
        onCloseFn();
      }
    }, 250);
  }

  /* set: overlay status */
  useEffect(() => {
    setCreateOverlay(() => {
      return embedLink.length > 0 && embedTitle.length > 0 ? true : false;
    });
  }, [embedLink, embedTitle]);

  /* set: show state */
  useEffect(() => {
    if (createOverlay) {
      setTimeout(() => {
        setShowOverlay(() => true);
      }, 120);
    }
  }, [createOverlay]);

  return {
    createOverlay,
    showOverlay,
    handleOnOverlayClose,
  };
}

/* exports */
export default useOveralay;
