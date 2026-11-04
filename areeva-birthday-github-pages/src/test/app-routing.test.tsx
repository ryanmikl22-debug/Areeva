import { QueryClient } from "@tanstack/react-query";
import { createRouter, createMemoryHistory, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches the birthday page beneath a GitHub repository prefix", async () => {
    const router = createRouter({ routeTree, basepath: "/birthday-repo/", history: createMemoryHistory({ initialEntries: ["/birthday-repo/"] }), context: { queryClient: new QueryClient() } });
    await router.load();
    expect(router.state.matches.at(-1)?.routeId).toBe("/");
  });
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
