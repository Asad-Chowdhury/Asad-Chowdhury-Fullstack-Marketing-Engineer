import "./globals.css";

export const metadata = {
  title: "Asad Chowdhury | Full Stack Marketing Engineer",
  description:
    "Full Stack Marketing Engineer helping SaaS and eCommerce teams build tracking, attribution, analytics, and growth infrastructure.",
  keywords: [
    "Asad Chowdhury",
    "Full Stack Marketing Engineer",
    "Marketing Engineer",
    "Analytics Engineer",
    "GA4",
    "GTM",
    "Meta CAPI",
    "SaaS Growth",
  ],
  authors: [{ name: "Asad Chowdhury" }],
  openGraph: {
    title: "Asad Chowdhury | Full Stack Marketing Engineer",
    description:
      "Building full-stack systems for tracking, attribution, analytics, and growth execution.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
