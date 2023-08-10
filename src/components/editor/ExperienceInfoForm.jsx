import {
  TextField,
  Switch,
  Button,
  FormControlLabel,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';

export default function ExperienceInfoForm() {
  const [endYear, setEndYear] = useState(false);

  function handleSwitchChange(e) {
    e.target.checked ? setEndYear(true) : setEndYear(false);
  }

  function JobDates() {
    if (endYear === false) {
      return (
        <>
          <Grid item xs={6}>
            <span>Start Date</span>
            <DatePicker slotProps={{ textField: { fullWidth: true } }} />
          </Grid>
          <Grid item xs={6}>
            <span>End Date</span>
            <DatePicker slotProps={{ textField: { fullWidth: true } }} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={<Switch onChange={handleSwitchChange} />}
              label="I still work here"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                margin: 0,
                height: '100%',
              }}
            />
          </Grid>
        </>
      );
    }
    return (
      <>
        <Grid item xs={12}>
          <span>Start Date</span>
          <DatePicker slotProps={{ textField: { fullWidth: true } }} />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={<Switch onChange={handleSwitchChange} checked />}
            label="I still work here"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              margin: 0,
              height: '100%',
            }}
          />
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid container rowGap={3} className="inputcard inputcard__experience">
      <h1 className="inputcard__title">Work Experience</h1>
        <Grid item xs={12}>
          <TextField fullWidth label="Job Title" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Company" />
        </Grid>
        <JobDates />

        <Grid item xs={6}>
          <TextField fullWidth label="State" />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">
            Add Experience
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
