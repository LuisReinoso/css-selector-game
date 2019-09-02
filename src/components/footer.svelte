<script>
	import { nextLevel, previousLevel } from "../storage/stores.ts";
</script>

<style>
	.footer {
		display: flex;
		justify-content: space-between;
	}
	.btn {
		border: none;
		border-radius: 10px;
		background-color: #cfea7c;
		color: black;
		outline: none;
		min-width: 50px;
		min-height: 25px;
	}
</style>

<div class="footer">
	<button class="btn" on:click={previousLevel}>Back</button>
	<button class="btn" on:click={nextLevel}>Next</button>
</div>
