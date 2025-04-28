import { Route, Redirect } from "wouter";
import { useAuth } from "../hooks/use-auth";

export function ProtectedRoute({ path, component: Component }: { path: string; component: any }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Redirect to="/auth" />;
  }

  return <Route path={path} component={Component} />;
}
