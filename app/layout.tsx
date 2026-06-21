import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Anand — Senior .NET Engineer & AI Agent Developer",
  description:
    "Senior Software Engineer with 12+ years in .NET full stack development. Building Generative AI agents with AWS Bedrock. Available for senior/lead roles.",
  openGraph: {
    title: "Rahul Anand — Senior .NET Engineer & AI Agent Developer",
    description:
      "Senior Software Engineer with 12+ years in .NET full stack development. Building Generative AI agents with AWS Bedrock.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
