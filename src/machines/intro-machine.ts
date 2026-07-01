import { setup } from "xstate";

export const introMachine = setup({
  types: {
    events: {} as { type: "SKIP" } | { type: "REDUCE_MOTION" },
  },
}).createMachine({
  id: "siteIntro",
  initial: "entering",
  states: {
    entering: {
      after: {
        120: "active",
      },
      on: {
        SKIP: "leaving",
        REDUCE_MOTION: "hidden",
      },
    },
    active: {
      after: {
        3800: "leaving",
      },
      on: {
        SKIP: "leaving",
        REDUCE_MOTION: "hidden",
      },
    },
    leaving: {
      after: {
        700: "hidden",
      },
    },
    hidden: {
      type: "final",
    },
  },
});
