Bug 1: Middleware authUser in middleware/auth.js does not check if the token exists before trying to decode it.
Fix: The fix properly checks if the token exists before attempting to decode it.

Bug 2: In routes/users.js, User.getAll is missing in the GET request for /users.
Fix: The fix ensures that the User.getAll method is correctly invoked in the route handler.

Bug 3: In models/user.js, the getAll method is not properly checking if the user exists, and it's not throwing a 404.
Fix: The fix adds a check to throw a 404 error when there are no users retrieved from the database.

Bug 4: In models/user.js, the update method is not properly checking if the user exists, and it's not throwing a 404.
Fix: The fix adds a check to throw a 404 error when the user is not found in the database.

Bug 5: In models/user.js, the delete method is not properly checking if the user exists, and it's not returning a 404.
Fix: The fix adds a check to throw a 404 error when the user is not found in the database.

Bug 6: In middleware/auth.js, the authUser function did not separate cases where curr_username and curr_admin are not set.
Fix: The fix separates cases where curr_username and curr_admin are not set and properly sets them to null.