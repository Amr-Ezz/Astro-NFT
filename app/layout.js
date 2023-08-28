"use client";
import Navbar from "@/components/navbar";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@/themes/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
