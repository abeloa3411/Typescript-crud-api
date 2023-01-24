import request from "supertest";

import app from "../../app";
import { Goals } from "./goals.model";

beforeAll(async () => {
  try {
    await Goals.drop();
  } catch (error) {}
});

afterAll(async () => {
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

describe("POST /api/v1/goals", () => {
  it("responds with an error if the goal is invalid", async () =>
    request(app)
      .post("/api/v1/goals")
      .set("Accept", "application/json")
      .send({
        message: "",
      })
      .expect("Content-Type", /json/)
      .expect(422)
      .then((response) => {
        expect(response.body).toHaveProperty("message");
      }));
});
