import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
    {/**
       * Snippyly Code Example
       * Feature: Live Cursors
       */}
    <SnippylyCursor />
    <App />
  </SnippylyProvider>
);