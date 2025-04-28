import { Suspense } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./hooks/use-auth";
import { ThemeProvider } from "./hooks/use-theme";

// Pages
import AuthPage from "./pages/auth-page";
import HomePage from "./pages/home-page";
import DonorDashboard from "./pages/donor-dashboard";
import DonorProfile from "./pages/donor-profile";
import DonorChat from "./pages/donor-chat";
import NGODashboard from "./pages/ngo-dashboard";
import NGOProfile from "./pages/ngo-profile";
import NGOChat from "./pages/ngo-chat";
import NotFound from "./pages/not-found";

import { ProtectedRoute } from "./lib/protected-route";

function Router() {
  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <ProtectedRoute path="/" component={HomePage} />
      {/* Donor Routes */}
      <ProtectedRoute path="/donor/dashboard" component={DonorDashboard} />
      <ProtectedRoute path="/donor/profile" component={DonorProfile} />
      <ProtectedRoute path="/donor/chat" component={DonorChat} />
      {/* NGO Routes */}
      <ProtectedRoute path="/ngo/dashboard" component={NGODashboard} />
      <ProtectedRoute path="/ngo/profile" component={NGOProfile} />
      <ProtectedRoute path="/ngo/chat" component={NGOChat} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Router />
          </Suspense>
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
