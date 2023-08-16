import { Grid, TextField, Button, Paper } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export default function EducationInfoForm() {

  // create a state for the number of jobs (app-level), when someone selects add experience
  // it should add to the number of jobs, as well as update the preview and form to include an editable drop-down

  return (
    <Paper elevation={0} sx={{ paddingInline: '40px' }} variant="outlined">
      <Grid container rowGap={3} className="text-3xl py-10">
          <Grid item xs={12} className='text-center'>
            <h1 className="text-3xl">Education</h1>
          </Grid>
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
    </Paper>
  );
}
