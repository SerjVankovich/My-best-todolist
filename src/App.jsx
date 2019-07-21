import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoItem from "./models/TodoItem";
import AddItem from "./components/AddItem";

class App extends React.Component {
  constructor() {
    super();
    const timeExpired = new Date();

    timeExpired.setHours(timeExpired.getHours() + 3);

    const items = this.getItems();

    this.state = {
      items
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  getItems() {
    return localStorage.getItem("items") !== "null"
      ? JSON.parse(localStorage.getItem("items")).map(
          item =>
            new TodoItem(
              item.id,
              item.title,
              item.description,
              new Date(item.timeAdded),
              new Date(item.timeExpired),
              item.compleated,
              item.color
            )
        )
      : [];
  }

  addItem(item) {
    this.setState(state => ({ items: [item, ...state.items] }));
  }

  deleteItem(id) {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id)
    }));
  }

  editItem(item) {
    this.setState(state => ({
      items: state.items.map(it => it.id === item.id ? item : it)
    }))
  }

  save(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }

  render() {
    const { items } = this.state;
    this.save(items);
    return (
      <div>
        <h1 className="App-logo">Don't forget about it</h1>
        <AddItem addItem={this.addItem} />
        <TodoList editItem={this.editItem} deleteItem={this.deleteItem} items={items} />
      </div>
    );
  }
}

export default App;
