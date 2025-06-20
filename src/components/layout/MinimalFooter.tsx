import React from 'react';
import { Link } from 'react-router-dom';

const MinimalFooter: React.FC = () => {
  console.log('MinimalFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 px-4 sm:px-6 lg:px-8 bg-background border-t">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <p className="mb-2 sm:mb-0">
          &copy; {currentYear} SecureApp. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link to="/terms-of-service" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default MinimalFooter;