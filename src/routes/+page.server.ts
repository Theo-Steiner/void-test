import { ai } from "void/ai";

export const load = async () => {
  const clanker = await ai.run("@cf/meta/llama-3.2-1b-instruct", {
    prompt: "tell the user you're a clanker and what that means",
  });
  return { clanker };
};
