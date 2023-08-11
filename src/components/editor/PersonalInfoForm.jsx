import { Grid, TextField, Paper } from '@mui/material';

export default function PersonalInfoForm() {
  return (
    <Paper elevation={0} sx={{ paddingInline: '40px' }} variant='outlined'>
      <Grid
        container
        rowGap={3}
        columnSpacing={2}
        className="inputcard inputcard__personal"
      >
        <h1 className="inputcard__title">Personal Information</h1>
        <Grid item xs={6}>
          <TextField fullWidth label="First Name" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Last Name" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth type="email" label="Email" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Professional Title" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            maxRows={5}
            label="Summary about yourself"
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
