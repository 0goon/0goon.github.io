import { setup } from "xstate";

export const revealMachine = setup({
  types: {
    events: {} as { type: "ENTER" } | { type: "LEAVE" },
  },
}).createMachine({
  id: "scrollReveal",
  initial: "idle",
  states: {
    idle: {
      on: {
        ENTER: "visible",
        LEAVE: "hidden",
      },
    },
    hidden: {
      on: {
        ENTER: "visible",
      },
    },
    visible: {
      on: {
        LEAVE: "hidden",
      },
    },
  },
});
