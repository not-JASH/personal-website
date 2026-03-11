import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./theme/tokens.css";
import "./theme/base.css";
import "./theme/layout.css";
import "./theme/components.css";
import "./theme/pages.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
