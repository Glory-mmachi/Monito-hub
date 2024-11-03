import "./globals.css"; // Importing global styles

// Defining metadata for the page
export const metadata = {
  title: "Monito Hub",
  description: "A hub for pets",
};

// Defining the RootLayout function component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
