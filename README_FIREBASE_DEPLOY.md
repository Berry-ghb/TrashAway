# Firebase Firestore Rules Deployment

This project includes `firestore.rules` for Firestore security rules.

## Applying Rules

### Option 1: Firebase Console
1. Open the Firebase Console.
2. Select project `trashaway-71ad5`.
3. Go to Firestore Database → Rules.
4. Replace the existing rules with the contents of `firestore.rules`.
5. Publish the rules.

### Option 2: Firebase CLI
1. Install Firebase CLI if needed:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in:
   ```bash
   firebase login
   ```
3. From the project folder, deploy Firestore rules:
   ```bash
   firebase deploy --only firestore:rules
   ```

## Included Rules
- Authenticated users can manage their own document in `users/{uid}` and `collectors/{uid}`.
- Authenticated users can create and read `requests/{requestId}`.

If signup still fails after deploying the rules, check that your Firebase project is `trashaway-71ad5` and that the current browser is signed in to the same project.
