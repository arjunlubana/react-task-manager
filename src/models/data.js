import localforage from "localforage";
var data = [];

const tasks_store = localforage.createInstance({
  name: "tasks",
  storeName: "tasks",
  description: "A set of tasks to be done",
});

export const getTasksLocal = tasks_store
  .iterate((value, key, iterationNumber) => {
    data.push(value);
  })
  .then(() => {
    return data;
  })
  .catch((err) => {
    console.log(err);
  });

export function addTaskLocal(task) {
  tasks_store
    .setItem(task.id, task)
    .then(() => {
      console.log(`Task ${task.id} saved`);
    })
    .catch((err) => console.error(err));
}

export function getTaskLocal(id) {
  tasks_store
    .getItem(id)
    .then((value) => {
      return value;
    })
    .catch((err) => console.error(err));
}

export const deleteTaskLocal = (id) => {
  tasks_store
    .removeItem(id)
    .then(() => {})
    .catch((err) => console.log(err));
};

export const editTaskLocal = (id) => {
  tasks_store
    .key(id)
    .then(function (keyName) {
      console.log(keyName);
    })
    .catch(function (err) {
      console.log(err);
    });
};
