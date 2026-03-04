import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { useState as a } from "react";
const r = "Inter, system-ui, sans-serif", c = { position: "fixed", inset: 0 }, d = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  fontFamily: r,
  color: "#999"
}, p = { width: "100%", height: "100%", border: "none", display: "block" }, f = {
  position: "fixed",
  bottom: 20,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  gap: 4,
  background: "#1a1a1a",
  borderRadius: 999,
  padding: 4,
  boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
  fontFamily: r
}, u = {
  fontSize: 13,
  fontWeight: 500,
  fontFamily: "inherit",
  border: "none",
  borderRadius: 999,
  padding: "6px 16px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "background 0.15s, color 0.15s"
};
function g({ branches: t = [] }) {
  const [e, i] = a(t.length ? 0 : null);
  return /* @__PURE__ */ l("div", { style: c, children: [
    e === null ? /* @__PURE__ */ o("div", { style: d, children: "No branches configured in branches.json" }) : /* @__PURE__ */ o(
      "iframe",
      {
        src: t[e]?.url,
        style: p
      }
    ),
    t.length > 0 ? /* @__PURE__ */ o("div", { style: f, children: t.map(({ label: s }, n) => /* @__PURE__ */ o(
      "button",
      {
        onClick: () => i(n),
        style: {
          ...u,
          color: n === e ? "#000" : "#999",
          background: n === e ? "#fff" : "transparent"
        },
        children: s
      },
      n
    )) }) : null
  ] });
}
export {
  g as default
};
