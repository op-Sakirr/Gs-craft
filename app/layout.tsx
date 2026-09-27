import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'GS Craft Shivajinagar | Custom Coat & Sherwani Maker in Bengaluru',
  description: 'Get premium custom-made coats and sherwanis from GS Craft in Shivajinagar, Bengaluru. Explore stylish designs, quality tailoring, and perfectly fitted traditional and formal wear.',
  icons: {
    icon: 'https://i.ibb.co/TMM4rJX8/file-0000000016f08211b007000bf7b8c431.png',
    shortcut: 'https://i.ibb.co/TMM4rJX8/file-0000000016f08211b007000bf7b8c431.png',
    apple: 'https://i.ibb.co/TMM4rJX8/file-0000000016f08211b007000bf7b8c431.png',
  },
  openGraph: {
    title: 'GS Craft Shivajinagar | Custom Coat & Sherwani Maker in Bengaluru',
    description: 'Get premium custom-made coats and sherwanis from GS Craft in Shivajinagar, Bengaluru. Explore stylish designs, quality tailoring, and perfectly fitted traditional and formal wear.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GS Craft Shivajinagar | Custom Coat & Sherwani Maker in Bengaluru',
    description: 'Get premium custom-made coats and sherwanis from GS Craft in Shivajinagar, Bengaluru. Explore stylish designs, quality tailoring, and perfectly fitted traditional and formal wear.',
  },
  verification: {
    google: 'ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
