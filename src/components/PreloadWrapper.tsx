// components/PreloadWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

export default function PreloadWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1300); 
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Preloader />;
  return <>{children}</>;
}
