# 🏢 Building Access Tracker

A modern, fancy Angular application for tracking officer sign-ins and sign-outs in a building, including mission exits and returns.

## 🎯 Features

### Screen 1: Check-In/Out Interface
- **4 Dynamic Action Types:**
  - 🏢 Building Entry - When an officer enters the building
  - 🚪 Building Exit - When an officer exits the building
  - 🚗 Mission Exit - When an officer leaves for a mission
  - ↩️ Mission Return - When an officer returns from a mission

- **Smart Guard Interface:**
  - Guard simply checks the action (no manual time entry)
  - System automatically records the timestamp
  - Prevents overlapping entries for the same day
  - Beautiful gradient UI with animated cards
  - Touch-friendly for tablet use

### Screen 2: Records View
- **Clean Table Display:**
  - Officer Name
  - Date
  - Building Entry Time
  - Building Exit Time  
  - Mission Exit Time
  - Mission Return Time
  
- **Features:**
  - Color-coded time badges for easy reading
  - Sortable by date (newest first)
  - Clear all records functionality
  - Responsive design for all devices
  - Data persists in browser localStorage

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17)

### Setup Steps

1. **Navigate to the project directory:**
   ```bash
   cd building-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4200`

## 📱 Usage

### Recording Actions

1. **Guard selects the officer's name** in the input field
2. **Guard clicks on the appropriate action card:**
   - Building Entry (green) - First check-in of the day
   - Building Exit (orange) - Final check-out
   - Mission Exit (blue) - Leaving for external mission
   - Mission Return (purple) - Returning from mission
3. **Click "Record Action"** - System automatically timestamps
4. Success message confirms the action was recorded

### Viewing Records

1. Click "📊 View Records" in the navigation bar
2. View all officer check-ins/outs in the table
3. Times are color-coded for easy identification
4. Use "🗑️ Clear All" to reset all data (with confirmation)

## 🎨 UI Features

- **Gradient Backgrounds:** Purple gradient for check-in, Pink gradient for records
- **Animated Cards:** Smooth hover effects and transitions
- **Color-Coded Badges:** Different colors for each action type
- **Responsive Design:** Works on desktop, tablet, and mobile
- **Modern Typography:** Clean, professional fonts
- **Fixed Navigation:** Easy switching between screens

## 💾 Data Storage

- Uses browser **localStorage** for data persistence
- Data is automatically saved after each action
- Records persist between browser sessions
- One record per officer per day (all actions grouped)

## 🔧 Technical Details

### Built With
- Angular 17 (Standalone Components)
- TypeScript 5.2
- SCSS for styling
- RxJS for state management

### Project Structure
```
building-tracker/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── check-in/         # Check-in screen
│   │   │   └── records/          # Records view screen
│   │   ├── models/
│   │   │   └── attendance.model.ts
│   │   ├── services/
│   │   │   └── attendance.service.ts
│   │   ├── app.component.*
│   │   └── app.config.ts
│   ├── styles.scss
│   ├── index.html
│   └── main.ts
├── package.json
├── angular.json
└── tsconfig.json
```

## 🌟 Key Advantages

1. **No Manual Time Entry:** Guard just checks action, system handles timestamps
2. **No Overlapping:** One record per officer per day prevents confusion
3. **Dynamic & Fast:** Quick check-ins with minimal clicks
4. **Professional UI:** Modern, gradient-based design
5. **Persistent Data:** Records saved in browser
6. **Fully Responsive:** Works on any device

## 🔄 Future Enhancements (Optional)

- Export records to Excel/PDF
- Search and filter functionality
- Date range selection
- Backend integration
- Print reports
- Multi-language support

## 📄 License

This project is free to use and modify for your organization's needs.

---

**Developed with ❤️ using Angular 17**
