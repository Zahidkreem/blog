import "./globals.css";
import { Header } from "@/components";
export const metadata = {
  title: "CMS Blog",
  description: "Generated with graphql and graphcms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container  text-black mx-auto px-10 mb-10 bg-bgImage">
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
