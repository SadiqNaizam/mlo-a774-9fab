import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string; // Allow for additional custom styling on the Card
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  description,
  children,
  headerContent,
  footerContent,
  className
}) => {
  console.log('AuthFormWrapper loaded for title:', title);

  return (
    <Card className={`w-full max-w-md shadow-xl ${className || ''}`}>
      {(headerContent || title || description) && (
        <CardHeader className="text-center space-y-2">
          {headerContent && <div className="mb-4 flex justify-center">{headerContent}</div>}
          <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="pt-6">
        {children}
      </CardContent>
      {footerContent && (
        <CardFooter className="flex flex-col items-center space-y-2 pt-6">
          {footerContent}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthFormWrapper;