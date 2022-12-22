// Project State Management
namespace App {
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFunc: Listener<T>) {
      this.listeners.push(listenerFunc);
    }
  }

  export class ProjectState extends State<Project> { // concrete value is project
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(title: string, description: string, numPeople: number) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numPeople,
        ProjectStatus.Active
      );
      this.projects.push(newProject);
      for (const listenerFunc of this.listeners) {
        listenerFunc(this.projects.slice());
      }
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find((prj) => prj.id === projectId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    updateListeners() {
      for (const listenerFunc of this.listeners) {
        listenerFunc(this.projects.slice());
      }
    }
  }

  export const projectState = ProjectState.getInstance();
}
