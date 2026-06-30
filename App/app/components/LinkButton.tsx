import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  label: string;
  ariaLabel: string;
  icon?: ReactNode;
};

export default function LinkButton({
  href,
  label,
  ariaLabel,
  icon,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 dark:text-stone-200 dark:bg-stone-700 dark:hover:bg-stone-600 transition-colors duration-200"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
