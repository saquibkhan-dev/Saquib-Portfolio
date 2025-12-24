import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import Home from "./pages/Home";
import { seo } from "./utils/seo";
export default function App() {
    useEffect(() => {
        document.title = seo.title;
    }, []);
    return _jsx(Home, {});
}
