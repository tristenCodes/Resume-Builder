import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function ExperienceAccordion({ job }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
        {job.company} - {job.jobTitle}
      </AccordionSummary>
      <AccordionDetails>
        {job.startDate} - {job.endDate}
        <p>{job.jobSummary}</p>
        <DeleteForeverIcon />
      </AccordionDetails>
    </Accordion>
  )
}
