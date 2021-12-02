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

	let times: number[] = []

	let currentTime: Date | undefined = undefined;

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

	const randomNumber = (min: number, max: number): number => Math.random() * (max - min) + min;

	function onClick() {
		switch(stageIndex) {
			case "waiting":
				// They want to start the game. Switch to hold, and at a random time we trigger the now stage
				stageIndex = "hold"
				setTimeout(() => {
					stageIndex = "now"
					currentTime = new Date()
				}, randomNumber(3000, 6000))
				break;
			case "now":
				// They clicked it during now -- Add the difference between the two times to our time array and reset to waiting.
				times = [...times, new Date().getTime() - currentTime.getTime()]
				currentTime = undefined;
				stageIndex = "waiting"
				break;
			default:
				break;
		}
	}
</script>

<main>
	<button 
		style="background-color: {currentStage.color}"
		on:click={onClick}
	>{currentStage.text}</button>
	<div id="dates">
		{#each times as time}
			<p>{time / 1000}s</p>
		{/each}
		{#if times.length > 1}
			<p>Average speed: {(times.reduce((a, b) => a + b) / times.length) / 1000}s</p>
		{/if}
	</div>
</main>

<style>
	button {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 3rem;
		color: white;
		border-radius: 100%;
		width: 80vmin;
		height: 80vmin;
	}
</style>