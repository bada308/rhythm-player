import type {PropsWithChildren} from "react";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
}
