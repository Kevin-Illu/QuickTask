import NavBar from './Content/Views/NavBar/NavBar.js';
import Button from './GlobalComponents/Button.js';

import ContainerApp from './Content/Layout/ContainerApp.js';
import MainNavigation from './MainNavigation/Main-navigation-bar.js';
import { btnClose, btnMinimize, btnMaximize } from './MainNavigation/traffic-lights.js';
import TodoApp from './Content/Views/Todo/TodoApp.js'
import { btnSettings } from './types/index.js';

// window topBar
const navigate = new MainNavigation(["navigation"], [btnMinimize, btnMaximize, btnClose]);
const Container = new ContainerApp();
const Todo = new TodoApp(Container.containerApp);// apps

// TODO: add a lenght of the todos in the button TASK
// let lengthTodo = `${Todo.getLenghtTodos()}`;

const btnTodoSettings: btnSettings = {
  icon: './public/assets/checklist.svg',
  text: 'Task',
  func: Todo.displayTodos,
  styles: ['navbar-btn', 'navbar-btn__display-todos', 'btn'],
}

const btnDisplayTodo = new Button(btnTodoSettings).button;
const navBar = new NavBar();// navbar apps
const apps = [btnDisplayTodo]
navBar.addApplications(apps);

const root: HTMLElement | null = document.getElementById("root");
root?.appendChild(navigate.navigationBar);
// add navbar at the container app
Container.containerNavBar.appendChild(navBar.NavBarContent);
navigate.setTitle("TodoApp");
root?.appendChild(Container.container);
Todo.displayTodos();
