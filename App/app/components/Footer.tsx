import Link from "next/link";
import XIcon from "./XIcon";
import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";

export function Footer() {
  return (
    <footer className="footer flex items-center justify-between w-full p-4 max-w-6xl">
      <div className="text-sm text-muted-foreground">
        © 2025 - {new Date().getFullYear()} Robin Nater
      </div>
      <div className="flex gap-4 pb-2">
        <Link
          href="https://x.com/calfurdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Write me on X"
        >
          <XIcon />
        </Link>
        <Link
          href="https://github.com/calfur"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Follow on GitHub"
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/robin-nater/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Connect on LinkedIn"
        >
          <LinkedInIcon />
        </Link>
      </div>
    </footer>
  );
}
