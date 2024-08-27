import { ClerkProvider } from '@clerk/nextjs';
import { AuthProvider } from './AuthContext';  // Import your AuthProvider
import './globals.css';

export const metadata = {
  title: 'CheatCodeCards',
  description: 'Create flashcards from your text',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AuthProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </AuthProvider>
    </ClerkProvider>
  );
}