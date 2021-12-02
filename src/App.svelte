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

	function removeIndexAtTimes(index: number) {
		times = [...times.slice(0, index), ...times.slice(index + 1)]
	}

	let currentTime: number | undefined = undefined;

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
					currentTime = Date.now()
				}, randomNumber(3000, 6000))
				break;
			case "now":
				// They clicked it during now -- Add the difference between the two times to our time array and reset to waiting.
				times = [...times, Date.now() - currentTime]
				currentTime = undefined;
				stageIndex = "waiting"
				break;
			default:
				break;
		}
	}
</script>

<svelte:window on:keydown={(event) => { 
	if (event.key == "Space" || event.key == "Enter")
		onClick()
	}} />
<main>
	<button 
		style="background-color: {currentStage.color}"
		on:click={onClick}
	>{currentStage.text}</button>
	<div id="dates">
		{#each times as time, i}
			<span class="time">{time / 1000}s <span class="clickable" on:click={() => removeIndexAtTimes(i)}> (x)</span></span>
		{/each}
		{#if times.length > 1}
			<span class="right">Average speed: {(times.reduce((a, b) => a + b) / times.length) / 1000}s</span>
		{/if}
	</div>
</main>

<style>

	.right {
		float: right;
	}

	.time {
		margin-right: 5px;
	}

	#dates {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.7);
		color: white;
		width: 100vw;
		padding: 10px;
	}

	.clickable {
		cursor: pointer;
	}

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