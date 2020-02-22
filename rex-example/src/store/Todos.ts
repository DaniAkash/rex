import Rex from "rex-state";

export interface ITask {
  task: string;
  status: boolean;
}

export interface ITodosRexState {
  list: ITask[];
}

class Todos extends Rex<ITodosRexState> {
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: "Task One",
          status: false
        },
        {
          task: "Task Two",
          status: false
        }
      ]
    };
  }

  addTask = (newTask: string) => {
    const newTaskObject = {
      task: newTask,
      status: false
    };
    const list: ITask[] = [...this.state.list, newTaskObject];
    this.setState({ list });
  };

  toggleTask = (index: number) => {
    const list = [...this.state.list];
    list[index] = {
      task: list[index].task,
      status: !list[index].status
    };
    this.setState({ list });
  };

  get list() {
    return this.state.list;
  }
}

export default Todos;
