import React, { useState, useEffect } from 'react'
import { Grid, makeStyles, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import useForm from './useForm';
import { Form } from './useForm';
import Controls from '../../component/control/Controls';
import ImageUploading from 'react-images-uploading';

const NewForm = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
    const [values, setValues] = useState()
const handleSubmit =()=>{

}
    return (
        <Form >
        <Grid container>
            <Grid item xs={6}>
                <Controls.Input
                    name="title"
                    label="title"
                    // value={title}
                   // onChange={event => setFullName(event.target.value)}
                // error={errors.fullName}
                />
            </Grid>
            <Grid item xs={6}>
                <Controls.Input
                    label="description"
                    name="content"
                    // value={content}
                   //onChange={event => setEmail(event.target.value)}
                // error={errors.email}
                />
            </Grid>
            <Grid item xs={6}>
                <Controls.Input
                    label="date de publication de l'article"
                    name="date_published"
                    //value={date_published}
                    //onChange={event => setNumber(event.target.value)}                    // error={errors.mobile}
                />
            </Grid>
            <Grid item xs={6}>
                <Controls.Input
                    label="source"
                    name="source"
                    //value={address}
                  //onChange={event => setAddress(event.target.value)} 
                  />
            </Grid>
            <Grid item xs={6}>   
                <Controls.Input
                    name="country"
                    label="subtitle"
                   // value={country}
                    /* onChange={event => setNiveauEtude(event.target.value)}
                    options={Student.getStudentCollection()} */
                    //error={errors.departmentId}
                />
               </Grid>
            <Grid item xs={6}>
                <Controls.Input
                    label="media"
                    name="media"
                   // value={formation}
                   // onChange={event => setFormation(event.target.value)} 
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

export default NewForm
