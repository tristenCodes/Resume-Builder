import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

export default function ExperienceAccordion({
  WorkExperience,
  job,
  setExperience,
}) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
        <span>{job.company}</span>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container rowGap={3} sx={{ paddingInline: '20px' }}>
          <Grid item xs={6}>
            <TextField
              label="Job Title"
              defaultValue={job.jobTitle}
              onChange={(e) => {
                job.jobTitle = e.target.value
                setExperience({ ...WorkExperience })
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Company"
              defaultValue={job.company}
              onChange={(e) => {
                job.company = e.target.value
                setExperience({ ...WorkExperience })
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              // label="Start Date"
              defaultValue={dayjs(job.startDate)}
              slotProps={{ textField: { fullWidth: true } }}
              onChange={(e) => {
                job.startDate = dayjs(e).format('MM/DD/YYYY')
                setExperience({ ...WorkExperience })
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              // label="End Date"
              defaultValue={dayjs(job.endDate)}
              slotProps={{ textField: { fullWidth: true } }}
              onChange={(e) => {
                job.endDate = dayjs(e).format('MM/DD/YYYY')
                setExperience({ ...WorkExperience })
              }}
            />
          </Grid>
        </Grid>
        <span>{job.jobTitle}</span>
        {job.startDate} - {job.endDate}
        <p>{job.jobSummary}</p>
        <DeleteForeverIcon />
      </AccordionDetails>
    </Accordion>
  )
}
