export const ChatStatus = {
  STARTED: "started",
  FINISHED: "finished",
} as const;

export type ChatStatus = typeof ChatStatus[keyof typeof ChatStatus];
