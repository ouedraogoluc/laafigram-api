import React, { useState, useEffect } from 'react'
import PageHeader from '../component/pageHeader/pageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import FormMedecin from './formFolder/FormMedecin';
import useForm from './formFolder/useForm';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Controls from "../component/control/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import useTable from '../pages/formFolder/useTable'
import Popup from './formFolder/Popup';

import Table from '../component/table/Table'

import customerList from '../assets/JsonData/customers-list.json'
import { db, auth } from '../backend/firebase/config'
import firebase from 'firebase'
import "firebase/firestore";

const Medecin = () => {
    // const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [profile, setProfile] = useState('')
    const [update, setUpdate] = useState('');
    const [toUpdateId, setToUpdateId] = useState('');

    useEffect(() => {
        const subscriber = db
            .collection('users')
            .where('status', '==', 'medecin')
            .onSnapshot(querySnapshot => {
                const users = [];
                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setUsers(users);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    return (
        <>
            <PageHeader
                title="new"
                subTitle="form"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />

            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}

                        onClick={() => { setOpenPopup(true); }}
                    />
                </Toolbar>
            </Paper>
            <div className="card">
                <div className="card-body pb-0">
                    <div className="card">
                        <div className="card-header main-search dash-search">
                            <h3>
                                Medecin Information Details
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <div className="card">
                                <div className="card-header">Medecin Management | {users.length} </div>
                                <div className="card-body position-relative">
                                    <div className="table-responsive cnstr-record product-tbl">
                                        <table className="table table-bordered heading-hvr">
                                            <thead>
                                                <tr>
                                                    <th className="active">Full Name</th>
                                                    
                                                    <th>Adresse</th>
                                                    <th>specialite</th>
                                                    <th>number</th>
                                                    <th>status</th>
                                                    <th>codePostal</th>
                                                    <th>email</th>
                                                    <th>Specialit??</th>
                                                   
                                                    <th>Niveau d'etude</th>
                                                  
                                                    
                                                    <th width="60">detail </th>
                                                    <th width="60">Edit </th>
                                                    <th width="60"> delete</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <tbody>
                                            {
                                                users.map(user => (
                                                    <tr key={user.id} >
                                                        <td>{user.fullName}</td>
                                                        <td>{user.address}</td>
                                                        <td>{user.specialite}</td>
                                                        <td>{user.number}</td>
                                                        <td>{user.status}</td>
                                                        <td>{user.codePostal}</td>
                                                        <td>{user.email}</td>
                                                        
                                                        <td>{user.niveauEtude}</td>
                                           
                                                        <td >
                                                            <button type="button" className="btn btn-warning"
                                                            // onClick={() => { setCurrentId(key) }}
                                                            >show</button>

                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-info"
                                                            // onClick={() => { setCurrentId(key) }}
                                                            >Edit</button>

                                                        </td>
                                                        <td> <button type="button" className="btn btn-danger"
                                                        //onClick={() => { onDelete(key) }}
                                                        >Delete</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <Paper className={classes.pageContent}>
        
         </Paper> */}
            <Popup
                title="Medecin Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <FormMedecin />
            </Popup>
        </>
    )
}

export default Medecin

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))