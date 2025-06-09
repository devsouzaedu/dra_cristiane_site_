'use client';

import { gtag_report_conversion } from '@/utils/analytics';

interface WhatsAppLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function WhatsAppLink({ href, children, className }: WhatsAppLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    gtag_report_conversion(href);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
