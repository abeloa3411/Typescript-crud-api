import request from "supertest";

import app from "../../app";
import { Goals } from "./goals.model";

beforeAll(async () => {
  try {
    await Goals.drop();
  } catch (error) {}
});

describe("GET /api/v1/goals", () => {
  it("responds with an array of goals", async () =>
    request(app)
      .get("/api/v1/goals")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("length");
        expect(response.body.length).toBe(0);
      }));
});
