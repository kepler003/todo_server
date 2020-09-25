
const userModel = require('../../../models/user.model');

describe("Test finding user", () => {
  test("It should return correct user", async () => {
    const response = await userModel.validateUser({username: 'Kepler', password: 'Admin'});
    expect(response.username).toBe('Kepler');
  });
});