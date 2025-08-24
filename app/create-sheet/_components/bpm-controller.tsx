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
		<div className="flex flex-col items-center space-y-4">
			<h3 className="text-lg font-semibold text-center">BPM</h3>

			<div className="flex items-center space-x-4">
				<Button
					isIconOnly
					size="sm"
					variant="bordered"
					onPress={handleDecrease}
					isDisabled={currentBpm <= 30}
				>
					<Minus size={16} />
				</Button>

				<div className="text-3xl font-bol min-w-12 text-center">
					{currentBpm}
				</div>

				<Button
					isIconOnly
					size="sm"
					variant="bordered"
					onPress={handleIncrease}
					isDisabled={currentBpm >= 200}
				>
					<Plus size={16} />
				</Button>
			</div>

			<NumberInput
				hideStepper
				value={currentBpm}
				min={30}
				max={200}
				className="w-24"
				size="sm"
				variant="bordered"
				onValueChange={(value) => {
					if (!isNaN(value)) setBpm(value);
				}}
			/>

			<div className="text-xs text-gray-500">30-200 BPM</div>
		</div>
	);
}
