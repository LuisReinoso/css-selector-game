import { writable } from "svelte/store";
import Chance from 'chance';
const chance = new Chance();

let randomTypes = [
	chance.month(),
	chance.animal(),
	chance.country(),
	chance.name(),
	chance.currency().name,
	chance.prefix({ full: true }),
	chance.city(),
	chance.gender()
]

let levels = [
	{
		type: "Type Selector",
		description: "select type element (node element)",
		solution: "p",
		options: [
			{ content: `<p>${randomValue()}</p>`, isSolution: true },
			{ content: `<p class="${randomValue()}">${randomValue()}</p>`, isSolution: true },
			{ content: `<p id="${randomValue()}">${randomValue()}</p>`, isSolution: true }
		]
	},
	{
		type: "Type Selector",
		description: "select type element (node element)",
		solution: "span",
		options: [
			{ content: `<span>${randomValue()}</span>`, isSolution: true },
			{ content: `<span class="${randomValue()}">${randomValue()}</span>`, isSolution: true },
			{ content: `<span id="${randomValue()}">${randomValue()}</span>`, isSolution: true }
		]
	},
	{
		type: "Universal Selector",
		description: "select all elements",
		solution: "*",
		options: [
			{ content: `<span>${randomValue()}</span>`, isSolution: true },
			{ content: `<a class="${randomValue()}">${randomValue()}</a>`, isSolution: true },
			{ content: `<div id="${randomValue()}">${randomValue()}</div>`, isSolution: true }
		]
	},
];
levels = levels.map((level: any, index) => {
	level['title'] = index.toString();
	return level;
})
let levelIndex = 0;

export const answer = writable("");
export const win = writable(false);
export let level = writable(levels[levelIndex]);

export const nextLevel = () => {
	levelIndex += 1;
	if (levelIndex > levels.length - 1) {
		levelIndex = 0;
	}
	answer.set('');
	level.set(levels[levelIndex]);
};

export const previousLevel = () => {
	levelIndex -= 1;
	if (levelIndex < 0) {
		levelIndex = levels.length - 1;
	}
	answer.set('');
	level.set(levels[levelIndex]);
};

function randomValue(): any {
	return randomTypes[chance.integer({ min: 0, max: randomTypes.length - 1 })];
}