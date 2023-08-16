import {
  TextField,
  Switch,
  Button,
  FormControlLabel,
  Grid,
  Paper,
} from '@mui/material'
import { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers'

export default function ExperienceInfoForm({ handleSubmitExperience }) {
  const [currentPosition, setCurrentPosition] = useState(false)

  function handleSwitchChange(e) {
    e.target.checked ? setCurrentPosition(true) : setCurrentPosition(false)
  }

  function JobDates() {
    if (currentPosition === false) {
      return (
        <>
          <Grid item xs={6}>
            <span>Start Date</span>
            <DatePicker
              slotProps={{ textField: { fullWidth: true } }}
              name="startDate"
            />
          </Grid>
          <Grid item xs={6}>
            <span>End Date</span>
            <DatePicker
              slotProps={{ textField: { fullWidth: true } }}
              name="endDate"
            />
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
              name="current"
            />
          </Grid>
        </>
      )
    }
    return (
      <>
        <Grid item xs={12}>
          <span>Start Date</span>
          <DatePicker
            slotProps={{ textField: { fullWidth: true } }}
            name="startDate"
          />
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
            name="current"
          />
        </Grid>
      </>
    )
  }

  return (
    <form id="experienceForm">
      <Paper elevation={0} sx={{ paddingInline: '40px' }} variant="outlined">
        <Grid container rowGap={3} className='py-10'>
          <Grid item xs={12} className='text-center'>
            <h1 className="text-3xl">Work Experience</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Job Title" name="jobTitle" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Company" name="company" required />
          </Grid>
          <JobDates />

          <Grid item xs={6}>
            <TextField fullWidth label="Location" name="location" required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              maxRows={5}
              label="Summary of job responsibilities"
              name="jobSummary"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmitExperience}
            >
              Add Experience
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  )
}
