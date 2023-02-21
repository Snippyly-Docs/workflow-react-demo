import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
    <App />
  </SnippylyProvider>
);