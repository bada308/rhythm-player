import { NumberInput } from "@heroui/number-input";
import { Button } from "@heroui/react";
import { Minus, Plus } from "lucide-react";

interface Props {
	currentBpm: number;
	setBpm: (bpm: number) => void;
}

export default function BpmController({ currentBpm, setBpm }: Props) {
	const handleIncrease = () => {
		if (currentBpm < 200) setBpm(currentBpm + 1);
	};

	const handleDecrease = () => {
		if (currentBpm > 30) setBpm(currentBpm - 1);
	};

	return (
		<div className="flex flex-col w-fit">
			<div className="flex gap-2 items-center">
				<h3 className="text-lg font-semibold">BPM</h3>
				<div className="text-xs text-gray-500">30-200 BPM</div>
			</div>
			<div className="flex items-center gap-4">
				<Button
					isIconOnly
					size="sm"
					variant="light"
					onPress={handleDecrease}
					isDisabled={currentBpm <= 30}
				>
					<Minus size={16} />
				</Button>
				<div className="text-2xl font-bol text-center w-12">{currentBpm}</div>
				<Button
					isIconOnly
					size="sm"
					variant="light"
					onPress={handleIncrease}
					isDisabled={currentBpm >= 200}
				>
					<Plus size={16} />
				</Button>
				<NumberInput
					hideStepper
					value={currentBpm}
					minValue={30}
					maxValue={200}
					size="sm"
					variant="bordered"
					className="w-24"
					onValueChange={(value) => {
						if (!isNaN(value)) setBpm(value);
					}}
				/>
			</div>
		</div>
	);
}
