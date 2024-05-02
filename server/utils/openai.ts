import OpenAI from "openai";

const config = useRuntimeConfig();

export const client = new OpenAI({
  apiKey: config.apiSecret.apiSecret,
});

export const assistant = config.apiSecret.apiAssistant;
