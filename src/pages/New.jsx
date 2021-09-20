import React, { useState, useEffect } from 'react'
import PageHeader from '../component/pageHeader/pageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import NewForm from './formFolder/NewForm';
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

const New = () => {
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
                title="new"
                subTitle="form"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />

            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        label="Search new"
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
                                new Information Details
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
                                                    <th className="active">titre</th>
                                                   
                                                    <th>subtitle</th>
                                                    <th>Content</th>
                                                    <td>Media</td>
                
                                                </tr>
                                            </thead>
                                        </table>
                                        <tbody>
                                          <tr>
                                            <td>Technologie santé</td>
                                            <td>Quel impact la technologie a T-elle sur les soins de santé ?',</td>
                                            <td>De plus, les résultats montrent que les malades les plus connectés sont ceux qui se sentent  les plus engagés dans la.......</td>
                                            <td>image</td>
                                          </tr>
                                          <tr>
                                            <td>Coronavirus</td>
                                            <td>Communiqué de Presse N°566 du Samedi 18 Septembre 2021, du Ministère de la Santé et de l’Action sociale</td>
                                            <td>SymptômesPréventionTraitements La COVID-19 affecte les individus de différentes manières. La plupart des personnes infectées développent... </td>
                                           <td><img src="" alt="" srcset="" /></td>
                                          </tr>
                                          <tr>
                                            <td>malaria</td>
                                            <td>Au senegal</td>
                                            <td>Le paludisme (ou malaria) est une maladie qui peut être mortelle...</td>
                                            <td><img src="C:\Users\OUEDRAOGO LUC\Desktop\Projet_React\monProjet\test\laafigram2.0\images\malaria.jpg"  alt="" srcset="" /> </td>
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
                title="New Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <NewForm />
            </Popup>
        </>
    )
}

export default New

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