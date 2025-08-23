import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: {
    template: "%s | Technicle Agency",
    default : "Technicle Agency"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
