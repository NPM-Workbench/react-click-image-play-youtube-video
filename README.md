![banner-1](https://github.com/user-attachments/assets/3d06b4fb-ca9a-4743-843b-62488ed024e5)

# React Click Image Play YouTube Video

📺 A lightweight React component package that lets users click a preview image (or any other element like a button) and play a YouTube video inside an overlay. It provides a clean close interaction, simple props and is designed to be easy to drop into modern React projects.

### 📦 Installation

```console
npm install react-click-image-play-youtube-video
```

### 📘 Features

1. Click-to-open YouTube video overlay experience
2. Smooth overlay show/hide behavior with close interaction
3. Simple API with `embedLink`, `embedTitle`, and optional `onCloseFn`
4. React + TypeScript ready with typed component props
5. Lightweight package footprint with minimal runtime dependencies
6. Unit testing is implemented with Jest and React Testing Library to test core components and overlay behavior

### 🔤 Example Usage

Note: Always pass `embedLink` in this format: `https://www.youtube.com/embed/<video-id>`.

1. Basic Usage

```jsx
/* node modules */
import { useState } from 'react';
import { ReactYouTubeOverlay } from 'react-click-image-play-youtube-video';

/* component */
function App() {
  /* local state */
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpenOverlay(true)}>
        Play YouTube Video
      </button>

      {openOverlay && (
        <ReactYouTubeOverlay
          embedLink="https://www.youtube.com/embed/dQw4w9WgXcQ"
          embedTitle="Sample YouTube Video"
          onCloseFn={() => setOpenOverlay(false)}
        />
      )}
    </>
  );
}

/* exports */
export default App;
```

2. Open Overlay from an Image Click

```jsx
/* node modules */
import { useState } from 'react';
import { ReactYouTubeOverlay } from 'react-click-image-play-youtube-video';

/* component */
function VideoPreview() {
  /* local state */
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <>
      <img
        src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        alt="Open video"
        style={{ width: 320, cursor: 'pointer' }}
        onClick={() => setOpenOverlay(true)}
      />

      {openOverlay && (
        <ReactYouTubeOverlay
          embedLink="https://www.youtube.com/embed/dQw4w9WgXcQ"
          embedTitle="Preview Video"
          onCloseFn={() => setOpenOverlay(false)}
        />
      )}
    </>
  );
}

/* exports */
export default VideoPreview;
```

### 📗 Test Coverage

```
PASS src/components/test/main-div.test.tsx
  MainDiv
    ✓ renders visible overlay with children when show is true
    ✓ renders hidden overlay without children when show is false
    ✓ renders exactly 2 paragraph children when two paragraphs are provided

PASS src/components/test/close-button.test.tsx
  CloseBtn
    ✓ renders a button with closeIcon class and type button
    ✓ calls handleOnClick when clicked

PASS src/components/test/frame-component.test.tsx
  FrameComponent
    ✓ renders iframe with provided title
    ✓ builds src with autoplay, mute, and rel query params
    ✓ sets allow and allowFullScreen attributes

PASS src/components/test/index.test.tsx
  ReactYouTubeOverlay
    ✓ returns null when embedLink and embedTitle are empty strings
    ✓ renders overlay content when embedLink and embedTitle are non-empty
    ✓ changes overlay state when close button is clicked

Test Suites: 4 passed, 4 total
Tests:       11 passed, 11 total
Snapshots:   0 total
```

```
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------|---------|----------|---------|---------|-------------------
All files             |     100 |      100 |     100 |     100 |
 components           |     100 |      100 |     100 |     100 |
  close-button.tsx    |     100 |      100 |     100 |     100 |
  frame-component.tsx |     100 |      100 |     100 |     100 |
  index.tsx           |     100 |      100 |     100 |     100 |
  main-div.tsx        |     100 |      100 |     100 |     100 |
 hooks                |     100 |      100 |     100 |     100 |
  use-overlay.ts      |     100 |      100 |     100 |     100 |
----------------------|---------|----------|---------|---------|-------------------
```

### 📘 Contributing
Contributions, suggestions, and improvements are welcome.<br/>
Feel free to open issues or pull requests.

### ❤️ Support
Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
