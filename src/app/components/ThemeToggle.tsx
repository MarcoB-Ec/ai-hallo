'use client";';

import { useTheme } from "@ai-hallo/lib/ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        id="theme-toggle"
        className="toggle toggle-primary"
      />
      <label htmlFor="theme-toggle" className="ml-2">
        Toggle Theme
      </label>
    </div>
  );
};
