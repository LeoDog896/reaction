<script lang="ts">

	enum ButtonColor {
		WAITING = "#42a1f5",
		HOLD = "#f5da42",
		NOW = "#15eb47"
	}

	interface ButtonStage {
		color: ButtonColor,
		text: string
	}

	let times: Date[] = []

	const buttonStages: { [index: string]: ButtonStage } = {
		"waiting": {
			color: ButtonColor.WAITING,
			text: "Click to measure reaction speed"
		},
		"hold": {
			color: ButtonColor.HOLD,
			text: "Wait..."
		},
		"now": {
			color: ButtonColor.NOW,
			text: "NOW!"
		}
	}

	let stageIndex = "waiting"
	$: currentStage = buttonStages[stageIndex]

	function onClick() {
		switch(stageIndex) {
			case "waiting":
				break;
			case "hold":
				break;
			case "now":
				break;
		}
	}
</script>

<main>
	<button 
		style="background-color: {currentStage.color}"
		on:click={onClick}
	>{currentStage.text}</button>
</main>

<style>
	button {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 3rem;
		color: white;
	}
</style>