import { query } from "@convex/_generated/server";

export default query({
  args: {},
  handler: async ({ db }) => {
    const items = await db.query("users").first();
    return items;
  },
});
