# angular-profile
GS_15

ANGULAR EDIT PROFILE LAB
Task: Create a user profile page and a form to edit user details.

What does the application do?
1. The /profile route displays a userProfile component, which includes name, contact info,
and mini bio.
2. The /edit-profile route displays an editProfile component where the user can update
their name, contact info, and bio.

Build Specifications:
1. Include ngRoute as a dependency to your module.
2. Include the ngView directive into the index.html.
3. Use one component for the profile page, and another component for the edit profile
page.
4. Create a service named ProfileService. It has a user profile object with initial values for
name, contact info, and bio. It has two methods...
  a. getUserProfile returns the profile object.
  b. setUserProfile replaces the profile object with a new one.
5. The profile picture shown in the design is hard-coded. It cannot be changed.

Bonus:
Allow the user to pick from a set of pre-defined avatar images for the profile picture.

