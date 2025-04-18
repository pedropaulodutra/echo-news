test("GET to /api/v1/status must return 200", async () => {
  const request = await fetch("http://localhost:3000/api/v1/status");
  const response = request;
  expect(response.status).toBe(200);
});
