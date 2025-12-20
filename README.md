# 📝 Todo List Application

## 🎯 About the Project

A beautiful and functional daily task management (Todo List) application that helps you easily manage your tasks. This project is built using pure HTML, CSS, and JavaScript (Vanilla JS).

## 📸 Project Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/41f422d5-544e-4d8d-a12e-589fdd476ff5" alt="Todo List Screenshot 1" width="200" style="display: inline-block; margin: 5px;"/>
   <img src="https://github.com/user-attachments/assets/94ee0b8a-92f9-4232-8c76-ef7869430a35" alt="Todo List Screenshot 3" width="100" style="display: inline-block; margin: 5px;"/>
  <img src="https://github.com/user-attachments/assets/30d2388d-f673-447f-8e80-69025e368b6d" alt="Todo List Screenshot 2" width="200" style="display: inline-block; margin: 5px;"/>
</div>

## ✨ Features

### 🎨 Attractive User Interface
- **4 Different Background Themes**: Choose from 4 beautiful images to personalize your workspace
- **Smooth Animations**: Slide-in animations for background images and slide-down for tasks
- **Responsive Design**: Compatible with all screen sizes (desktop and mobile)

### 💾 Local Storage
- Uses **LocalStorage** for permanent task storage
- Automatically saves selected background
- No server or database required

### ✅ Task Management
- Add new task with Enter or click Submit
- Check off completed tasks (with strikethrough)
- Delete individual tasks
- Delete all completed tasks at once

### 🎭 User Experience
- Interactive and engaging animations
- Hover effects on background images
- Minimal and clean design

## 🚀 How to Use

### Running the Project

1. Open the `base.html` file in your browser
2. To add a new task:
   - Type the task text in the input field
   - Click the `submit` button or press the `Enter` key
3. To change the background:
   - Click on one of the small images at the top of the page
4. To manage tasks:
   - Check the box to mark a task as completed
   - `Delete` button next to each task to remove it
   - `delete all checked` button to remove all completed tasks

## 📁 Project Structure

```
├── base.html              # Main HTML file
├── style.css              # CSS styles and animations
├── codes.js               # Application logic and LocalStorage management
├── background.jpeg        # Default background image
└── bacground/             # Background images folder
    ├── vecteezy_abstract-background_260881.jpg
    ├── vecteezy_vector-abstract-background-with-soft-gradient-color-and_6107730.jpg
    └── vecteezy_white-background-with-blue-geometric-and-white-line-pattern_7677104-1.jpg
```

## 🛠️ Technologies Used

- **HTML5**: Page structure
- **CSS3**: Styling, animations, and responsive design
  - CSS Animations (keyframes)
  - Flexbox
  - Media Queries for responsive design
- **JavaScript (ES6+)**: Application logic
  - DOM Manipulation
  - Event Listeners
  - LocalStorage API
  - Array Methods (filter, forEach, splice)

## 🎨 CSS Features

### Animations
- `pics-slide-in`: Slide-in animation for background images from the left
- `rabet-intro`: Form entry animation with scale and opacity
- `task-slide-down`: Task entry animation from the top

### Responsive Design
- Breakpoint: `768px`
- Optimized for mobile displays
- Layout and font size adjustments

## 💡 Technical Notes

1. **LocalStorage Structure**: 
   ```json
   {
     "tasks": "[{text: '...', done: false}, ...]",
     "selectedBackground": "./background.jpeg"
   }
   ```

2. **Dynamic Styling**: Task text color changes based on the selected background

3. **Event Delegation**: Uses event listeners for event management

## 🔮 Future Features

- [ ] Edit existing tasks
- [ ] Task categorization (Categories/Tags)
- [ ] Task prioritization (Priority)
- [ ] Search and filter tasks
- [ ] Date and time for each task
- [ ] Dark Mode/Light Mode
- [ ] Export/Import tasks

## 📄 License

This project is created for educational purposes.

---

**Note**: For the best experience, use modern browsers (Chrome, Firefox, Edge, Safari).
