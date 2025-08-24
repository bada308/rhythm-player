"use client";

import { useState } from "react";
import BpmController from "@/app/create-sheet/_components/bpm-controller";

export default function Page() {
	const [bpm, setBpm] = useState(60);
	return (
		<div>
			Create Sheet
			<BpmController currentBpm={bpm} setBpm={(bpm) => setBpm(bpm)} />
		</div>
	);
}
