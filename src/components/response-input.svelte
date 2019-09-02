<script>
	import { answer, nextLevel, win } from "../storage/stores.ts";
	
	function nextLevelAction(key) {
		if (key.keyCode === 13 && $win) {
			nextLevel();
		}
	}
</script>

<style>
	input {
		width: 100%;
		box-sizing: border-box;
		border: 0px solid;
		border-bottom: 1px solid black;
		outline: none;
		margin-top: 20px;
	}
</style>

<input bind:value={$answer} on:keypress={nextLevelAction} placeholder="Insert answer here" type="text" />
