"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

// Simple dark mode toggler that:
// - Respects system preference on first load
// - Persists user choice in localStorage
// - Toggles the `dark` class on <html>
export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = (stored as "light" | "dark" | null) || (prefersDark ? "dark" : "light");
        applyTheme(initial);
    }, []);

    const applyTheme = (value: "light" | "dark") => {
        setTheme(value);
        const root = document.documentElement;
        if (value === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", value);
    };

    const toggle = () => applyTheme(theme === "dark" ? "light" : "dark");

    if (!mounted) {
        // Avoid hydration mismatch by rendering a neutral placeholder
        return (
            <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Toggle theme">
                <Sun className="size-4" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            aria-label="Toggle theme"
            onClick={toggle}
        >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
    );
};