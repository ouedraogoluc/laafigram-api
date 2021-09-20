import React, { useState, useEffect } from 'react'
import { Grid, makeStyles, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import useForm from './useForm';
import { Form } from './useForm';
import Controls from '../../component/control/Controls';
import * as  MedecinDepartment from '../../service/MedecinDepartment'
import * as  MedecinSpeciality from '../../service/MedecinSpeciality'
import * as  Student from '../../service/Student'
import {db,auth} from '../../backend/firebase/config'
import firebase from 'firebase';
const genderItems = [
    { id: 'male', title: 'M' },
    { id: 'female', title: 'F' },
    { id: 'other', title: 'Autre' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    number: '',
    address: '',
    gender: 'male',
    profile: 'doctor',
    departmentId: '',
    specialityid: '',
    experience: '',
    niveauEtudeId: '',
    codePostal: '',
    formation: '',
    password: '',
    hireDate: new Date(),
    isPermanent: false,
}


export default function FormMedecin(props) {
const [fullName,setFullName]=useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [formation, setFormation] = useState("");
const [experience, setExperience] = useState("");
const [specialite, setSpecialite] = useState("");
const [niveauEtude, setNiveauEtude] = useState("");
const [department, setDepartment] = useState("");
const [number, setNumber] = useState("");
const [address, setAddress] = useState("");
const [gender, setGender] = useState("");
const [codePostal, setCodePostal] = useState("");



    const {
        values,
        setValues,
        handleInputChange,
    } = useForm(initialFValues);
 

 const handleSubmit =(event)=>{
    event.preventDefault();
    
    db.collection('users').add({
        fullName,
        email,
        address,
        number,
        status: "medecin",
        formation,
        specialite,
        experience,
        niveauEtude,
        department,
      datetime: firebase.firestore.FieldValue.serverTimestamp()
    })
    setFullName('');
}

    return (
        <Form >
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={fullName}
                        onChange={event => setFullName(event.target.value)}
                    // error={errors.fullName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={email}
                       onChange={event => setEmail(event.target.value)}
                    // error={errors.email}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={number}
                        onChange={event => setNumber(event.target.value)}                    // error={errors.mobile}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Adresse"
                        name="address"
                        value={address}
                        onChange={event => setAddress(event.target.value)}                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Experience"
                        name="experience"
                        value={experience}
                        onChange={event => setExperience(event.target.value)}                    />
                </Grid>
               
                <Grid item xs={6}>
                    <Controls.Input
                        label="code postal"
                        name="codePostal"
                        value={codePostal}
                        onChange={event => setCodePostal(event.target.value)}                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={gender}
                        onChange={event => setGender(event.target.value)}
                        items={genderItems}
                    />
                </Grid>
                <Grid item xs={6}>   
                    <Controls.Select
                        name="departmentId"
                        label="department"
                        value={department}
                        options={MedecinDepartment.getDepartmentCollection()}
                        //error={errors.departmentId}
                        onChange={event => setDepartment(event.target.value)}
                    />
                   </Grid>
                   <Grid item xs={6}>   
                    <Controls.Select
                        name="specialityid"
                        label="specialité"
                        value={specialite}
                        onChange={event => setSpecialite(event.target.value)}

                        options={MedecinSpeciality.getSpecialityCollection()}
                        //error={errors.departmentId}
                    />
                   </Grid>
                {/* <Grid item xs={6}>
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                </Grid> */}

                    <Grid item xs={6}>   
                    <Controls.Select
                        name="niveauEtudeId"
                        label="Niveau d'etude"
                        value={niveauEtude}
                        onChange={event => setNiveauEtude(event.target.value)}
                        options={Student.getStudentCollection()}
                        //error={errors.departmentId}
                    />
                   </Grid>

                   {/*                 
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    */}

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Valider"
                            onClick={handleSubmit}
                            />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            // onClick={resetForm}
                             />
                    </div>
              
            </Grid>
        </Form>
    )
}
const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            with: "100%",
            margin: theme.spacing(1)
        }
    }
}))