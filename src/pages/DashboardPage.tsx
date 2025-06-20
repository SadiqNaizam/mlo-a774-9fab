import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// lucide-react icons
import { LayoutDashboard, BarChart2, FileText, Settings, LogOut, Bell, Users, CreditCard, Activity } from 'lucide-react';

// Custom components
import MinimalFooter from '@/components/layout/MinimalFooter';

// Dummy data for table and cards
const sampleInvoices = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Paid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV004", paymentStatus: "Overdue", totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
];

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear tokens/session storage here
    console.log('User attempting to logout');
    navigate('/'); // Navigate to LoginPage (path "/") as per App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      {/* Header Section */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="container mx-auto flex w-full items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <span className="sr-only">SecureApp Dashboard</span>
            <span className="font-bold">Dashboard</span>
          </Link>
          
          <div className="flex items-center gap-3 md:gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="User Avatar" /> {/* Placeholder image */}
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/dashboard')}> {/* Placeholder link */}
                  <Users className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/dashboard')}> {/* Placeholder link */}
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Sidebar Section */}
        <aside className="hidden w-full border-b bg-background p-4 sm:w-60 sm:border-r sm:border-b-0 md:block">
          <NavigationMenu orientation="vertical" className="w-full max-w-full">
            <NavigationMenuList className="flex flex-col space-y-1 w-full">
              <NavigationMenuItem className="w-full">
                <Link to="/dashboard" className="w-full">
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start`}>
                    <LayoutDashboard className="mr-2 h-4 w-4" /> Overview
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <Link to="/dashboard" className="w-full"> {/* Placeholder link */}
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-muted-foreground hover:text-accent-foreground`}>
                    <BarChart2 className="mr-2 h-4 w-4" /> Analytics
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <Link to="/dashboard" className="w-full"> {/* Placeholder link */}
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-muted-foreground hover:text-accent-foreground`}>
                    <FileText className="mr-2 h-4 w-4" /> Reports
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <Link to="/dashboard" className="w-full"> {/* Placeholder link */}
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-muted-foreground hover:text-accent-foreground`}>
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </aside>

        {/* Main Content Area */}
        <ScrollArea className="flex-1">
          <main className="p-4 space-y-6 sm:p-6">
            <section>
              <h1 className="text-2xl font-semibold sm:text-3xl">Welcome Back, User!</h1>
              <p className="text-muted-foreground">Here's what's happening with your account today.</p>
            </section>

            {/* Summary Cards Section */}
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">+10.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$15,670</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">+3 since yesterday</p>
                </CardContent>
              </Card>
            </section>

            {/* Data Table Section */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Invoices</CardTitle>
                  <CardDescription>A list of recent invoices.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleInvoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                          <TableCell className="font-medium">{invoice.invoice}</TableCell>
                          <TableCell>{invoice.paymentStatus}</TableCell>
                          <TableCell>{invoice.paymentMethod}</TableCell>
                          <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                          <TableCell className="text-center">
                            <Button variant="outline" size="sm">View Details</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>
          </main>
        </ScrollArea>
      </div>

      {/* Footer Section */}
      <MinimalFooter />
    </div>
  );
};

export default DashboardPage;