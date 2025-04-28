import { useAuth } from "../hooks/use-auth";
import { Redirect } from "wouter";

export default function HomePage() {
  const { user } = useAuth();

  if (!user) return <Redirect to="/auth" />;

  if (user.userType === "donor") {
    return <Redirect to="/donor/dashboard" />;
  } else if (user.userType === "ngo") {
    return <Redirect to="/ngo/dashboard" />;
  } else {
    return <div>Invalid user type</div>;
  }
}
