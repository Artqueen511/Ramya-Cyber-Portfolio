import "./../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Ramya Arumugam — Cybersecurity Portfolio",
  description: "Futuristic cybersecurity portfolio — Ethical Hacking, SOC, Cloud Security.",
  openGraph: { title: "Ramya Arumugam — Cybersecurity Portfolio", description: "Ethical Hacking, SOC, Cloud Security" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-cyan-100 selection:bg-cyan-400/30">
        <Navbar />
        {children}
      </body>
    </html>
  );
}