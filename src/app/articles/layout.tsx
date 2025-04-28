"use client";

import { ThemeToggle } from "../components/ThemeToggle";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl normal-case">Articles</a>
        </div>
        <ThemeToggle />
        <div className="navbar-end">
          <a className="btn btn-ghost text-xl normal-case">Home</a>
          <a className="btn btn-ghost text-xl normal-case">About</a>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}
