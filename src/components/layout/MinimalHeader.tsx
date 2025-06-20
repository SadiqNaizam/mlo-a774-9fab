import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Example icon

const MinimalHeader: React.FC = () => {
  console.log('MinimalHeader loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <ShieldCheck className="h-6 w-6" />
          <span>SecureApp</span>
        </Link>
        {/* No navigation links as per "simpler than a full application header" */}
      </div>
    </header>
  );
};

export default MinimalHeader;