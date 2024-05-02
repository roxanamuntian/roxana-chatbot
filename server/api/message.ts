// Remove this file if you do not need the OpenAI integration

import { getLatestMessages } from "../utils/get-message";

export default defineEventHandler(async (event) => {
  const threadId = getCookie(event, "thread-id");
  const runId = getCookie(event, "run-id");

  if (!threadId || !runId) {
    return;
  }

  return await getLatestMessages(threadId, runId);
});
