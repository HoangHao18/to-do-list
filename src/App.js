
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
// import './assets/style.css';
//import 'bootstrap3/dist/css/bootstrap.min.css';
//import 'bootstrap3/dist/css/bootstrap-theme.min.css';
import './assets/style.css';
import $ from 'jquery';
import Popper from 'popper.js';
//import 'bootstrap/js/dist/dropdown';

import './App.css';

import mocksTask from './mocks/tasks'
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

global.jQuery = require('jquery');
require('bootstrap/dist/js/bootstrap');

function App() {
  const [listTask, setListTask] = useState(mocksTask);
  const [isShowForm, setIsShowForm] =useState(false);
  const [strSearch, setStrSearch] = useState('');
  const [itemSelected, setItemSelected] = useState(null);
  const [orderBy, setOrderBy] = useState('name');
  const [orderDir, setOrderDir] = useState('asc');


  function handleToggleForm(){
    setIsShowForm(!isShowForm);
  }
  function closeForm() {
    setIsShowForm(false);
  }
  function handleDelete(taskId){
      // const newListTasks = listTask;
      // let indexD = -1;
      // newListTasks.forEach((value, index)=>{
      //   if(value.id === taskId){
      //     // newListTasks.splice(index,1);
      //     indexD = index;
      //   }
      // });
      // newListTasks.splice(indexD,1);
      // setListTask(newListTasks);


      //c1
      const newListTasks = [];
      listTask.forEach((value, index)=>{
        if(value.id !== taskId){
          newListTasks.push(value);
        }
      });
      setListTask(newListTasks);
      //c1>

      //c2
      // const newListTasks = listTask
      // .filter(task => task.id !== taskId);
      // setListTask(newListTasks);
      //c2>
      
  }
  function handleSearch(value) {
    setStrSearch(value);
  }
  function handleEdit(task) {
    setIsShowForm(true);
    setItemSelected(task);
  }
  function handleSubmit(item) {
    let newListTask = null;
    if (item.id) {
      // Edit mode
      newListTask = listTask.map(oldTask => {
        if (oldTask.id === item.id) {
          return {
            ...oldTask,
            ...item
          }
        }
        return oldTask;
      });
    } else {
      // Add mode
      newListTask = [
        ...listTask, 
        {
          id: uuidv4(),
          name: item.name,
          level: Number(item.level)
        }
      ];
    }
    setListTask(newListTask);

  }

  function handleSort(orderBy, orderDir) {
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  }


  const tasksSearch = listTask.filter((taskOrigin) => {
    return taskOrigin.name.toLowerCase().includes(strSearch.toLowerCase());
  });

  const tasksSort = tasksSearch.sort( (taskA, taskB) => {
    let numReturn = orderDir === 'desc' ? 1 : -1;
    if (taskA[orderBy] < taskB[orderBy]) {
      return numReturn;
    }
    if (taskA[orderBy] > taskB[orderBy]) {
      return numReturn * (-1);
    }
    return 0;
  }

  );

  return (
    <div className="App">
      <Title/>
      <Control
        onClickAdd={handleToggleForm}
        isShowForm={isShowForm}
        onClickSearchGo={handleSearch}
        orderBy={orderBy}
        orderDir={orderDir}
        onClickSort={handleSort}
      />
      {
        isShowForm && 
        <Form
          onClickCancel={closeForm}
          onClickSubmit={handleSubmit}
          itemSelected={itemSelected} 
        />
      }
      
      <List 
          // listTask = {tasksSearch}
          listTask = {tasksSort}
          onClickDelete = {handleDelete}
          onClickEdit={handleEdit}
      />

    </div>
  );
}

export default App;
