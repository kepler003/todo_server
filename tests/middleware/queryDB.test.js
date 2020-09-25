
const queryDb = require('../../middleware/queryDb');

describe("Test querying the database", () => {
  test("It should return at least one user", async () => {
    const response = await queryDb('SELECT * FROM users WHERE id > ?', [0]);
    expect(response.length).toBeGreaterThan(0);
  });
});