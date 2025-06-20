import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import MinimalHeader from '@/components/layout/MinimalHeader';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import MinimalFooter from '@/components/layout/MinimalFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Mail, AlertTriangle, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type PasswordRecoveryFormValues = z.infer<typeof formSchema>;

const PasswordRecoveryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  console.log('PasswordRecoveryPage loaded');

  const form = useForm<PasswordRecoveryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: PasswordRecoveryFormValues) => {
    setIsLoading(true);
    setMessage(null);
    setMessageType(null);
    console.log('Password recovery request for:', data.email);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example logic:
    if (data.email.includes('error')) { // Simulate an error condition
      setMessage('An error occurred. Please try again later.');
      setMessageType('error');
    } else {
      setMessage(`If an account with the email ${data.email} exists, password reset instructions have been sent.`);
      setMessageType('success');
      form.reset(); // Optionally reset form
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <MinimalHeader />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthFormWrapper
          title="Forgot Password?"
          description="No worries, we'll send you reset instructions."
          footerContent={
            <p className="text-center text-sm text-muted-foreground">
              Remembered your password?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Login
              </Link>
            </p>
          }
          className="w-full max-w-md"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          className="pl-10"
                          {...field}
                          disabled={isLoading}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {message && (
                <Alert variant={messageType === 'error' ? 'destructive' : 'default'} className="mt-4">
                  {messageType === 'error' ? 
                    <AlertTriangle className="h-4 w-4" /> : 
                    <CheckCircle2 className="h-4 w-4" />
                  }
                  <AlertTitle>{messageType === 'success' ? 'Instructions Sent' : 'Error'}</AlertTitle>
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Mail className="mr-2 h-4 w-4" /> 
                )}
                {isLoading ? 'Sending...' : 'Send Reset Instructions'}
              </Button>
            </form>
          </Form>
        </AuthFormWrapper>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default PasswordRecoveryPage;