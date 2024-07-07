import "../globals.css";

import { cn } from "@/lib/utils";

export default function RegistrationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-dark-400 font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
