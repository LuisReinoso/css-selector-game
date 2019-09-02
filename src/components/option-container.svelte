<script>
	import Option from "./option.svelte";
	export let options = [];
	export let solution = "";
</script>

<style>
	.container {
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}
</style>

<div class="container">
	{#each options as option}
		<Option {option} {solution} />
	{/each}
</div>
