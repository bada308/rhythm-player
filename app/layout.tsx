"use client";

import { HeroUIProvider } from "@heroui/react";
import type { PropsWithChildren } from "react";
import "./globals.css";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="ko">
			<body className="light text-foreground bg-background">
				<HeroUIProvider>{children}</HeroUIProvider>
			</body>
		</html>
	);
}
