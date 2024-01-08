import "@radix-ui/themes/styles.css"
import "./global.css"
import "../theme-config.css"
import type { Metadata } from "next"
import { Theme } from "@radix-ui/themes"
import Alert from "@/components/Alert"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Koxy AI",
  description: "Serverless AI-powered platform",
}

type Children = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <body >
        <Theme appearance="dark" radius="large" accentColor="purple" scaling="95%">
          <Alert />
          {children}
          <Toaster />
        </Theme>
      </body>
    </html>
  )
}
