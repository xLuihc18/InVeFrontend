"use client"

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/app-sidebar"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Definimos una variable CSS personalizada
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Rutas donde NO queremos sidebar
  const isAuthPage = pathname === "/" || pathname === "/login";

  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${inter.variable} antialiased h-full`}>
        {isAuthPage ? (
          <div className="h-full w-full">
            {children}
          </div>
        ) : (
          <SidebarProvider>
            <AppSidebar />
            <main className="relative flex flex-col flex-1 w-full overflow-y-auto">
              <div className="p-4">
                <SidebarTrigger />
              </div>
              {children}
            </main>
          </SidebarProvider>
        )}
      </body>
    </html>
  );
}