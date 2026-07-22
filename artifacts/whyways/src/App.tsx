import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/components/theme-provider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { BackToTop } from '@/components/ui/BackToTop';
import { CookieBanner } from '@/components/ui/CookieBanner';
import Home from '@/pages/Home';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollProgressBar />
          <CustomCursor />
          
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          
          <FloatingWhatsApp />
          <BackToTop />
          <CookieBanner />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
