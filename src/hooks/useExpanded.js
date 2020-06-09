import { useState, useEffect } from "react";

export const useExpanded = toggleSelector => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const listener = e =>
      e.target !== document.querySelector(toggleSelector) && setExpanded(false);
    document.body.addEventListener("click", listener);
    return () => document.body.removeEventListener("click", listener);
  });

  return [expanded, () => setExpanded(!expanded)];
};

