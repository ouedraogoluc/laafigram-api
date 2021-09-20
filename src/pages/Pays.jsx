import React, { useState, useEffect } from 'react'
import PageHeader from '../component/pageHeader/pageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import PaysForm from './formFolder/PaysForm';
import useForm from './formFolder/useForm';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Controls from "../component/control/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import useTable from './formFolder/useTable'
import Popup from './formFolder/Popup';

import Table from '../component/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

const Pays = () => {
    // const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const classes = useStyles();
    


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
                title="pays"
                subTitle="form"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />

            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        label="Search pays"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add pays"
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
                                <div className="card-header">new Management |  </div>
                                <div className="card-body position-relative">
                                    <div className="table-responsive cnstr-record product-tbl">
                                        <table className="table table-bordered heading-hvr">
                                            <thead>
                                                <tr>
                                                    <th>pays</th>
                                                    <th width="60">detail </th>
                                                    <th width="60">Edit </th>
                                                    <th width="60"> delete</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <tbody>
                                          <tr>
                                            <td>Burkina</td>
                                          </tr>
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
                <PaysForm />
            </Popup>
        </>
    )
}

export default Pays

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