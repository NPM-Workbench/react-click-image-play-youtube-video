# 📗 Security Policy

### 📑 Open Source Notice

`react-click-image-play-youtube-video` is an open source React component package. Its source code is publicly available for review, audit, contribution, and responsible improvement under the license included in this repository.
This project is intended to provide a lightweight, client-side YouTube Video Overlay Component for React applications. It does not include a backend service, tracking service, advertising service, analytics pipeline, payment system, account system, or user database.

### 📑 Data Collection and Privacy

This package does not intentionally collect, store, transmit, process, sell, rent, trade, or monetize personal data.
In particular, this project does not:

- collect personal information from users;
- collect credentials, authentication tokens, payment information, or private application data;
- use cookies, local storage, session storage, indexed databases, or similar browser storage APIs;
- include analytics, fingerprinting, telemetry, or behavioral tracking code;
- send data to a project-owned server;
- sell or disclose user data to third parties for monetary benefit;
- collect data for malicious, deceptive, surveillance, or unauthorized purposes.

The package is distributed as frontend component code. Any data made available to it is limited to the props supplied by the consuming application, such as `embedLink`, `embedTitle`, and the optional `onCloseFn` callback.

### 📑 Third-Party Services

This component renders a YouTube video through an iframe using the `embedLink` provided by the consuming application. When a YouTube iframe is loaded, the browser may communicate directly with YouTube or Google-controlled domains according to YouTube's own terms, privacy policy, cookie behavior, and browser settings.

Those third-party requests are not controlled by this package. Application developers using this component are responsible for:

- choosing trusted YouTube embed URLs;
- informing their users about any applicable third-party video, cookie, consent, or privacy behavior;
- complying with laws, regulations, platform policies, and internal security requirements that apply to their application.

### 📑 Security Expectations for Consumers

This package expects `embedLink` and `embedTitle` values to come from trusted application code or properly validated application data.

Consumers should avoid passing untrusted or unsanitized user input directly into `embedLink`. If video URLs are user-generated or come from external systems, validate them before rendering the component. A recommended approach is to allow only expected YouTube embed origins and paths.

The package does not request elevated browser permissions and does not execute remote scripts directly. However, iframe content is remote content, and the security and privacy behavior of that iframe is governed by the embedded provider.

### 📑 Dependency and Supply Chain Notes

This package is intentionally small and has minimal runtime dependencies. The project uses common development tooling for building and testing, including TypeScript, Rollup, Jest, and React Testing Library.

Maintainers and contributors should:

- keep dependencies reasonably current;
- review dependency changes before release;
- avoid adding telemetry, tracking, network, or storage behavior without clear documentation and review;
- run tests before publishing changes;
- publish releases from trusted maintainer environments.

### 📑 Reporting a Vulnerability

If you discover a vulnerability, privacy issue, malicious behavior, dependency risk, or other security concern, please report it responsibly.

Preferred reporting method:

- Open a GitHub security advisory for this repository, if available.
- If private security advisories are not available, open a GitHub issue with a clear description and avoid publishing exploit details that could put users at risk.

Please include:

- affected package version;
- a description of the issue;
- steps to reproduce, if applicable;
- potential impact;
- any suggested mitigation or patch.

The maintainer(s) will make a reasonable effort to review valid reports, investigate impact, and publish a fix or guidance when appropriate.

### 📑 Supported Versions

Security updates are generally expected to apply to the latest published version of the package. Users are encouraged to upgrade to the latest version when fixes or improvements are released.

### 📑 No Warranty

This project is provided as open source software under the repository license and without warranty of any kind. Users and application developers are responsible for evaluating whether this package is suitable for their own security, privacy, compliance, and operational requirements.
