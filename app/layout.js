"use client";
import Navbar from "../components/navbar";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../themes/theme";
import { Providers } from "@/utils/providers";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
