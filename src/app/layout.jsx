import "./globals.css"; // Importing global styles

// Defining metadata for the page
export const metadata = {
  title: "Monito Hub",
  description: "Monito Hub: Your go-to destination for everything pets! Discover a vibrant community, expert resources, and essential services that enhance the lives of pets and their owners. Join us to connect, share, and celebrate the joy of pet companionship",
};

// Defining the RootLayout function component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
