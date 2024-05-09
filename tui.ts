import { crayon } from "https://deno.land/x/crayon@3.3.3/mod.ts";
import { Canvas, Tui, TextObject } from "https://deno.land/x/tui@2.1.11/mod.ts";
import { Button, Text } from "https://deno.land/x/tui@2.1.11/src/components/mod.ts";

const ui = new Tui({
	style: crayon.bgBlack,
	refreshRate: 1000 / 60,
});

ui.dispatch();

new Text({
	parent: ui,
	text: "Hello sailor",
	theme: {
		base: crayon.bgRed,
	},
	rectangle: {
		column: 1,
		row: 1,
	},
	zindex: 0,
});

new Button({
  parent: ui,
  zIndex: 0,
  label: {
    text: "Hello clickers"
  },
  theme: {
    base: crayon.bgRed,
    focused: crayon.bgLightRed,
    active: crayon.bgYellow,
  },
  rectangle: {
    column: 1,
    row: 2,
  },
});


ui.run();