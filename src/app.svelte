<script>
	import Header from "./components/header.svelte";
	import ResponseInput from "./components/response-input.svelte";
	import OptionContainer from "./components/option-container.svelte";
	import Footer from "./components/footer.svelte";
	import { level } from "./storage/stores.ts";
</script>

<style>
	.game {
		border-radius: 10px;
		padding: 10px;
		background-color: skyblue;
		box-sizing: border-box;
		min-width: 320px;
	}

	@media only screen and (min-width: 600px) {
		.game {
			min-width: 500px;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: white;
		border-radius: 10px;
		padding: 20px;
		margin-bottom: 10px;
	}
</style>

<div class="game">
	<Header
		title="Level {$level.title}"
		type={$level.type}
		description={$level.description} />
	<div class="content">
		<ResponseInput />
		<OptionContainer options={$level.options} solution={$level.solution} />
	</div>
	<Footer />
</div>
