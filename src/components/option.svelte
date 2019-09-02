<script>
	import Prism from "prismjs";
	import { answer, win } from "../storage/stores.ts";

	export let option;
	export let solution;

	let isSuccessful = false;

	$: html = Prism.highlight(option.content, Prism.languages.javascript, "javascript");

	$: if (option.isSolution && solution === $answer) {
		isSuccessful = true;
		win.set(true);
	} else {
		isSuccessful = false;
		win.set(false);
	}
</script>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px 0px 10px 10px;
		padding: 0px 10px;
		border: 1px solid black;
	}
	pre {
		width: 100%;
		background-color: white;
		box-sizing: border-box;
		overflow: hidden;
	}

	.check {
		color: green;
	}
	
	.d-none {
		display: none;
	}
</style>

<div class="container">
	<pre>
		<code class="html">
			{@html html}
		</code>
	</pre>
	<span class={isSuccessful ? 'check': 'd-none'}>✔️</span>
</div>
