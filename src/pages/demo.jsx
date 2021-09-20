import React, { useState, useEffect } from 'react';

const AddOrEditStudent = (props) => {
    const initialFieldValues = {
        FullName: '',
        RollNo: '',
        Subject: '',
        Class: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.studentObjects[props.currentId]
            })
    }, [props.currentId, props.studentObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onChange={handleFormSubmit}>
            <div className="col-12 col-md-12">
                <div className="card">
                    <div className="card-header" >
                        <input value={props.currentId === "" ? "Add Student Info" : "Update Student Info"} />
                    </div>
                    <div className="card-body">
                        <div className="center-form">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Full Name<span
                                            className="mandatoryFieldColor">*</span></label>
                                        <input value={values.FullName}
                                            onChange={handleInputChange} type="text" className="form-control" name="FullName"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Roll No<span
                                            className="mandatoryFieldColor">*</span></label>
                                        <input value={values.RollNo} onChange={handleInputChange} type="text" className="form-control" name="RollNo"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Subject<span
                                            className="mandatoryFieldColor">*</span></label>
                                        <input value={values.Subject} onChange={handleInputChange} type="text" className="form-control" name="Subject"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Class<span
                                            className="mandatoryFieldColor">*</span></label>
                                        <input value={values.Class} onChange={handleInputChange} type="text" className="form-control" name="Class"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="btn-group mb-3 mt-2 cmn-btn-grp">
                                        <input type="submit" value={props.currentId === "" ? "Save" : "Update"} className="btn btn-success btn-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddOrEditStudent;




import React, { useState, useEffect } from 'react';
import firebaseDb from "../firebase";
import AddOrEditStudent from './addOrEditStudent';

const StudentInfo = () => {

    var [currentId, setCurrentId] = useState('');
    var [studentObjects, setStudentObjects] = useState({})

    useEffect(() => {
        firebaseDb.child('Student').on('value', snapshot => {
            if (snapshot.val() != null) {
                setStudentObjects({
                    ...snapshot.val()
                });
            } else {
                setStudentObjects({});
            }
        })
    }, [])


    const addOrEdit = (obj) => {
        if (currentId === '')
            firebaseDb.child('Student').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
            firebaseDb.child(`Student/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
    }

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`Student/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }

    return (
        <div className="card">
            <div className="card-body pb-0">
                <div className="card">
                    <div className="card-header main-search dash-search">
                        <h3>
                            Student Information Details
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <AddOrEditStudent {...({ currentId, studentObjects, addOrEdit })}></AddOrEditStudent>
                    <div className="col-12 col-md-12">
                        <div className="card">
                            <div className="card-header">Student Management</div>
                            <div className="card-body position-relative">
                                <div className="table-responsive cnstr-record product-tbl">
                                    <table className="table table-bordered heading-hvr">
                                        <thead>
                                            <tr>
                                                <th className="active">Full Name</th>
                                                <th>Roll No</th>
                                                <th>Subject</th>
                                                <th>Class</th>
                                                <th width="60"> </th>
                                                <th width="60"> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.keys(studentObjects).map((key) => (
                                                    <tr key={key}>
                                                        <td>{studentObjects[key].FullName}</td>
                                                        <td>{studentObjects[key].RollNo}</td>
                                                        <td>{studentObjects[key].Subject}</td>
                                                        <td>{studentObjects[key].Class}</td>

                                                        <td className="case-record">
                                                            <button type="button" className="btn btn-info"
                                                                onClick={() => { setCurrentId(key) }}>Edit</button>

                                                        </td>
                                                        <td> <button type="button" className="btn btn-danger"
                                                            onClick={() => { onDelete(key) }}>Delete</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentInfo;


import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase-config'
import firebase from 'firebase';

import { AddCircleOutlineRounded, DeleteOutlineRounded, Edit } from '@material-ui/icons';

import { Button, TextField, Container, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Dialog, DialogContent, DialogActions } from '@material-ui/core';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState('');
  const [toUpdateId, setToUpdateId] = useState('');


  useEffect(() => {
    console.log('useEffect Hook!!!');

    db.collection('todos').orderBy('datetime', 'desc').onSnapshot(snapshot => {
      console.log('Firebase Snap!');
      setTodos(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          name: doc.data().todo,
          datatime: doc.data().datatime
        }
      }))
    })

  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      datetime: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  const deleteTodo = (id) => {
    db.collection('todos').doc(id).delete().then(res => {
      console.log('Deleted!', res);
    });
  }

  const openUpdateDialog = (todo) => {
    setOpen(true);
    setToUpdateId(todo.id);
    setUpdate(todo.name);
  }

  const editTodo = () => {
    db.collection('todos').doc(toUpdateId).update({
      todo: update
    });
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">

      <form noValidate>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="todo"
          label="Enter ToDo"
          name="todo"
          autoFocus
          value={input}
          onChange={event => setInput(event.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={addTodo}
          disabled={!input}
          startIcon={<AddCircleOutlineRounded />}
        >
          Add Todo
      </Button>

      </form>

      <List dense={true}>
        {
          todos.map(todo => (

            <ListItem key={todo.id} >

              <ListItemText
                primary={todo.name}
                secondary={todo.datetime}
              />

              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Edit" onClick={() => openUpdateDialog(todo)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                  <DeleteOutlineRounded />
                </IconButton>
              </ListItemSecondaryAction>

            </ListItem>
          ))
        }
      </List>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            label="Update Todo"
            type="text"
            fullWidth
            name="updateTodo"
            value={update}
            onChange={event => setUpdate(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={editTodo} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>


    </Container >
  );
}

export default App;