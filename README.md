# Energy Balance Calculator

A comprehensive health management system to help individuals recovering from Long COVID track and manage energy levels, physical activity, and well-being. The app integrates with wearable devices (Fitbit, Apple Watch, Garmin, etc.) and provides food tracking, analysis, and personalized recommendations.

## Project Structure

- **src/**  
  Main React application source code.
  - **components/**
    - **Register/**: Registration flow and device connection.
    - **SignIn/**: User authentication (sign in).
    - **Dashboard/**: Main dashboard after login.
    - **FoodTracker/**: Food logging, journal, and nutritional analysis.
  - **App.js**: Main app routing and authentication logic.
  - **firebase-config.js**: Firebase initialization.
- **public/**  
  Static assets and `index.html` (includes Pyodide for enhanced food search).
- **functions/**  
  (If present) Firebase Cloud Functions backend.
- **server/**  
  (If present) Server-side scripts or configuration.
- **build/**  
  Production build output (after running build command).

## Main Modules

- **RegistrationPage** ([src/components/Register/RegistrationPage.js](src/components/Register/RegistrationPage.js))  
  Handles user sign-up, device connection, and authorization.

- **SignInPage** ([src/components/SignIn/SignInPage.js](src/components/SignIn/SignInPage.js))  
  User login and authentication.

- **Dashboard** ([src/components/Dashboard/Dashboard.js](src/components/Dashboard/Dashboard.js))  
  Displays energy forecast, quick actions, and device connection status.

- **FoodTrackerPage** ([src/components/FoodTracker/FoodTrackerPage.js](src/components/FoodTracker/FoodTrackerPage.js))  
  Allows users to log meals, view food journal, and analyze nutrition.

- **FoodTrackerAnalysis** ([src/components/FoodTracker/FoodTrackerAnalysis.js](src/components/FoodTracker/FoodTrackerAnalysis.js))  
  Provides macronutrient/micronutrient charts and metabolic efficiency analysis.

- **FitbitCallback** ([src/FitbitCallback.js](src/FitbitCallback.js))  
  Handles Fitbit OAuth callback and user data integration.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd energy_balance
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase:**
   - Copy your Firebase config to `.env` or edit `src/firebase-config.js` with your credentials.
   - Example `.env`:
     ```
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

### Running the Application

Start the development server:

```sh
npm start
# or
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

```sh
npm run build
# or
yarn build
```

### Additional Notes

- **Enhanced Food Search:**  
  The app uses Pyodide (Python in the browser) for advanced food search. This loads automatically from the CDN when the app starts.
- **Device Integration:**  
  Fitbit and other device OAuth flows are supported during registration.
- **Firestore:**  
  User data, food logs, and device info are stored in Firebase Firestore.

---

For questions or support, use the "Contact Support" button in the app or open an issue in this repository.