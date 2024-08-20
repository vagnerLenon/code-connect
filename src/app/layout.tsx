import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Aside } from "@/components/aside";
import { ScrollArea } from "@/components/ui/scroll-area";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(prompt.className, "gradient")}>
        <main className="flex w-full max-w-[1212px] mx-auto h-screen overflow-hidden gap-7">
          <Aside />

          <ScrollArea className="mt-14 max-h-screen w-full text-offwhite pr-3">
            {children}
          </ScrollArea>
        </main>
      </body>
    </html>
  );
}
