import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

setupWorker(http.get("/endpoint", () => HttpResponse.json({ id: "abc-123" })))
  .start()
  .then(() => {
    import("./src/form/index.js");
  });
