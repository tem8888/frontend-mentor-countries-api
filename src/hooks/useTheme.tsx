import { useState, useEffect } from "react";

export function useTheme(initialValue: "light" | "dark"): [string, () => void] {
  const getTheme = () => {
    const storage = localStorage.getItem("theme");
    return storage || initialValue;
  };

  const [theme, setTheme] = useState<string>(getTheme);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, handleChangeTheme];
}
