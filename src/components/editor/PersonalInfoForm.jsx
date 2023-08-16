import { Grid, TextField, Paper } from '@mui/material'

export default function PersonalInfoForm({ handleTyping }) {
  return (
    <Paper elevation={0} sx={{ paddingInline: '40px' }} variant="outlined">
      <Grid container rowGap={3} columnSpacing={2} className="py-10">
        <Grid item xs={12} className="text-center text-3xl">
          <h1>Personal Information</h1>
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            onChange={handleTyping}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            onChange={handleTyping}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Professional Title"
            name="title"
            onChange={handleTyping}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="phone"
            label="Phone"
            name="phone"
            onChange={handleTyping}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            name="email"
            onChange={handleTyping}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            maxRows={5}
            label="Summary about yourself"
            name="summary"
            onChange={handleTyping}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
