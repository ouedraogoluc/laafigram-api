import React, { useState, useEffect } from 'react'
import { Grid, makeStyles, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import useForm from './useForm';
import { Form } from './useForm';
import Controls from '../../component/control/Controls';

const PaysForm = () => {
    const [values, setValues] = useState()
const handleSubmit =()=>{

}
    return (
        <Form >
        <Grid container>
         
            
            <Grid item xs={6}>   
                <Controls.Input
                    name="country"
                    label="pays"
                   // value={country}
                    /* onChange={event => setNiveauEtude(event.target.value)}
                    options={Student.getStudentCollection()} */
                    //error={errors.departmentId}
                />
               </Grid>

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

export default PaysForm
