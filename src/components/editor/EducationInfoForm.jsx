import { Grid, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export default function EducationInfoForm() {
  return (
    // <div className="input--education">
    <>
      <Grid container rowGap={3} className="inputcard inputcard__education">
        <h1 className="inputcard__title">Education</h1>
        <Grid item xs={12}>
          <TextField label="University/Institution" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Program/Degree/Course" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            label="Graduation Date"
            slotProps={{ textField: { fullWidth: true } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="GPA" type="number" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">
            Add Education
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
