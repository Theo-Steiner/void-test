import { ai } from "void/ai";

export const load = async ({ params }) => {
  const news = await ai.run("@cf/meta/llama-3.1-8b-instruct", {
    prompt: "Summarize the latest news",
  });
  console.log(news);
};
