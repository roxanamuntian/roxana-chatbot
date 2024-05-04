import { client, assistant } from "../utils/openai";
import { getLatestMessages } from "../utils/get-message";

export default defineEventHandler(async (event) => {
  const threadId = getCookie(event, "thread-id");

  if (!threadId) {
    return;
  }

  const queryParams = getQuery(event);

  await client.beta.threads.messages.create(threadId, {
    role: "user",
    content: queryParams.message?.toString() ?? "",
  });

  const run = await client.beta.threads.runs.create(threadId, {
    assistant_id: assistant,

  });

  return await getLatestMessages(threadId, run.id);
});
