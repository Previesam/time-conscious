# Time Conscious

A productivity mobile application built with Ionic and Angular for managing tasks and scheduling meetings. Time Conscious helps users stay organized by providing an intuitive interface for task management and meeting scheduling with recurring event support.

## 📱 Features

### Task Management
- ✅ Create, edit, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Add detailed descriptions to tasks
- ✅ Persistent storage using local storage

### Meeting Scheduling
- 📅 Schedule meetings with date and time
- 🔄 Support for recurring meetings (weekly, monthly, or first Sunday of the month)
- ✏️ Edit and update meeting details
- ✅ Mark meetings as done
- 🗑️ Soft delete for meetings
- 💾 Automatic local storage persistence

### User Interface
- 📱 Clean, modern mobile-first design
- 🎨 Three-tab navigation (Tasks, Meetings, Account)
- 🔍 Search functionality (UI ready)
- ✨ Smooth modal interactions for creating/editing items
- 📊 Real-time updates and status indicators

## 🛠️ Technology Stack

- **Framework**: [Ionic 6](https://ionicframework.com/)
- **Frontend**: [Angular 14](https://angular.io/)
- **UI Components**: Ionic Components with Ionicons
- **Storage**: Browser Local Storage
- **Mobile Platforms**: iOS and Android via [Capacitor 4](https://capacitorjs.com/)
- **Language**: TypeScript
- **Styling**: SCSS

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Ionic CLI](https://ionicframework.com/docs/cli) - Install globally: `npm install -g @ionic/cli`
- For mobile development:
  - **iOS**: Xcode (macOS only)
  - **Android**: Android Studio

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Previesam/time-conscious.git
   cd time-conscious
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200/` in your web browser.

## 📦 Build

### Build for Web
```bash
npm run build
```

The build artifacts will be stored in the `www/` directory.

### Build for Mobile Platforms

#### iOS
```bash
ionic cap add ios
ionic cap sync ios
ionic cap open ios
```
Then build the app in Xcode.

#### Android
```bash
ionic cap add android
ionic cap sync android
ionic cap open android
```
Then build the app in Android Studio.

## 🧪 Testing

Run unit tests:
```bash
npm test
```

Run end-to-end tests:
```bash
npm run e2e
```

## 🔍 Linting

Check code quality with ESLint:
```bash
npm run lint
```

## 📁 Project Structure

```
time-conscious/
├── android/              # Android platform files
├── ios/                  # iOS platform files
├── e2e/                  # End-to-end tests
├── src/
│   ├── app/
│   │   ├── account/      # Account page component
│   │   ├── meeting/      # Meeting management page
│   │   ├── task/         # Task management page
│   │   ├── tabs/         # Tab navigation component
│   │   ├── services/     # Business logic services
│   │   │   ├── task.service.ts
│   │   │   └── meeting.service.ts
│   │   └── explore-container/ # Reusable container component
│   ├── assets/           # Static assets
│   ├── environments/     # Environment configurations
│   └── theme/            # Global styles and themes
├── capacitor.config.ts   # Capacitor configuration
├── ionic.config.json     # Ionic configuration
├── angular.json          # Angular CLI configuration
└── package.json          # Project dependencies and scripts
```

## 💡 Usage

### Creating a Task
1. Navigate to the **Task** tab
2. Tap the **+** (floating action button) at the bottom
3. Enter the task title and details
4. Tap the save icon to create the task

### Scheduling a Meeting
1. Navigate to the **Meeting** tab
2. Tap the **+** (floating action button) at the bottom
3. Enter meeting title, details, and select date/time
4. Optionally enable recurring meetings and set recurrence pattern
5. Tap the save icon to schedule the meeting

### Managing Items
- **Edit**: Tap on any task or meeting to edit it
- **Mark as Done**: Tap the checkbox/play icon
- **Delete**: Tap the trash icon

## 🗄️ Data Storage

All tasks and meetings are stored locally in the browser's Local Storage. This means:
- ✅ Data persists between sessions
- ✅ No internet connection required
- ⚠️ Data is device-specific
- ⚠️ Clearing browser data will delete all tasks and meetings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is an Ionic starter application. Please refer to the Ionic Framework license for more information.

## 👨‍💻 Author

Built with ❤️ using Ionic Framework

## 🔗 Resources

- [Ionic Documentation](https://ionicframework.com/docs)
- [Angular Documentation](https://angular.io/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Ionicons](https://ionic.io/ionicons)

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

---

**Note**: This is a mobile-first application optimized for smartphones and tablets. For the best experience, use it on a mobile device or test it using browser developer tools in mobile view.
