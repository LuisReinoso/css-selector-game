<script>
	export let title;
	export let type;
	export let description;
</script>

<style>
	.header {
		display: flex;
		flex-direction: row;
		align-content: center;
		text-align: center;
		background-color: #977cea;
		border-radius: 10px;
		color: white; 
	}
	.title {
		font-size: 20px;
		font-weight: bold;
		font-family: sans-serif;
	}
	.type {
		font-size: 12px;
		font-family: sans-serif;
	}
	.description {
		flex-basis: 100%;
		align-items: center;
    	justify-content: center;
    	display: flex;
		font-size: 14px;
		align-self: center;
		background-color: #ea977c;
		border-radius: 10px;
		color: white;
		height: auto;
		min-height: 50px;
		font-family: sans-serif;
		padding: 15px;
	}
	.info {
		flex-basis: 100%;
		align-items: center;
    	justify-content: center;
		display: flex;
		flex-direction: column;
	}
</style>

<div class="header">
	<div class="info">
		<div class="title">{title}</div>
		<div class="type">{type}</div>
	</div>	
	<div class="description">{description}</div>
</div>
