"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();
	return (
		<div>
			<Button color="primary" onPress={() => router.push("/create-sheet")}>
				생성
			</Button>
		</div>
	);
}
