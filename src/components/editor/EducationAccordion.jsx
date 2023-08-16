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

export default function EducationAccordion({
  EducationInformation,
  university,
  setSchooling,
}) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
        <span className="px-6">{university.university}</span>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container rowGap={3} sx={{ paddingInline: '20px' }}>
          <Grid item xs={12}>
            <TextField
              label="University/Institution"
              defaultValue={university.university}
              onChange={(e) => {
                university.university = e.target.value
                setSchooling({ ...EducationInformation })
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Program/Degree/Course"
              defaultValue={university.program}
              onChange={(e) => {
                university.program = e.target.value
                setSchooling({ ...EducationInformation })
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              defaultValue={dayjs(university.graduationDate)}
              slotProps={{ textField: { fullWidth: true } }}
              onChange={(e) => {
                university.graduationDate = dayjs(e).format('MM/DD/YYYY')
                setSchooling({ ...EducationInformation })
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="GPA"
              type="number"
              defaultValue={university.gpa}
              onChange={(e) => {
                university.gpa = e.target.value
                setSchooling({ ...EducationInformation })
              }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12} className='flex justify-center pt-6'>
          <DeleteForeverIcon
            onClick={() => {
              for (let i = 0; i < EducationInformation.education.length; i++) {
                if (EducationInformation.education[i] == university) {
                  EducationInformation.education.splice(i, 1)
                  setSchooling({ ...EducationInformation })
                }
              }
            }}
            className='cursor-pointer'
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}
