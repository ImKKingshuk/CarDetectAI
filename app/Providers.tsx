"use client";

import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <div>{children}</div>;
}

export default Providers;
