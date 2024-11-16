const port = Deno.env.get("PORT") || "3000";
const instance = Deno.env.get("INSTANCE_ID") || "default";

console.log(`Deno server running on port ${port}, instance: ${instance}`);

Deno.serve({ port: parseInt(port) }, (req) => {
    return new Response(
        `Hello from Deno! Instance: ${instance}`,
        { status: 200 },
    );
});
