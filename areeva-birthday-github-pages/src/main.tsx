import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing root element");
const basepath = new URL(".", window.location.href).pathname;
const router = getRouter(basepath);
createRoot(root).render(<RouterProvider router={router} />);
