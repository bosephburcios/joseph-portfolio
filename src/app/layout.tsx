import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Joseph Turcios | Portfolio",
  description: "Software Engineer • AWS • UT Austin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
