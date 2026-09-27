import { ai } from "void/ai";

export const load = async ({ setHeaders }) => {
  const clanker = await ai.run("@cf/meta/llama-3.2-1b-instruct", {
    prompt: "tell the user you're a clanker and what that means",
  });
  setHeaders({ "cache-control": "public, max-age=3600" });
  return { clanker };
};
