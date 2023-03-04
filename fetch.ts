const url = Deno.args[0];

const result = await fetch(url);

const body = new Uint8Array(await result.arrayBuffer());

await Deno.stdout.write(body);