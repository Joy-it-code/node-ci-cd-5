import request from "supertest";
import app from "../index.js";

let server;

beforeAll((done) => {
  process.env.NODE_ENV = "test"; 
  process.env.PORT = "3000"; // Ensuring test also runs on port 3000

  server = app.listen(process.env.PORT, () => {
    console.log(`Test server running on port ${process.env.PORT}`);
    done();
  });
});

afterAll((done) => {
  if (server) {
    server.close(() => {
      console.log("Test server closed");
      done();
    });
  } else {
    done();
  }
});

describe("GET /", () => {
  it("should return 'Hello World!'", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});
