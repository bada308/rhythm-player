interface Props {
	currentBpm: number;
	onBpmChange: (bpm: number) => void;
}

export default function BpmController({ currentBpm, onBpmChange }: Props) {
	return (
		<div>
			BpmController
			<div>BPM {currentBpm}</div>
		</div>
	);
}
