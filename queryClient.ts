import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function apiRequest(
  method: "GET" | "POST" | "PATCH" | "DELETE",
  url: string,
  body?: any
) {
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "API request failed");
  }

  return res;
}

export function getQueryFn({ on401 }: { on401: "returnNull" | "throw" }) {
  return async () => {
    const res = await fetch("/api/user", { credentials: "include" });
    if (res.status === 401) {
      if (on401 === "returnNull") return null;
      throw new Error("Unauthorized");
    }
    if (!res.ok) throw new Error("Failed to fetch user");
    return await res.json();
  };
}
