import React from "react";

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
  // Using Tailwind CSS's 'sr-only' class to visually hide content while keeping it accessible to screen readers.
  return <span className="sr-only">{children}</span>;
};
