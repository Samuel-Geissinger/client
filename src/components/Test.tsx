import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const initialValues = {
  title: '',
  description: '',
  createdDate: new Date(),
  priority: '',
}

export const Test = () => {
  const [values, setvalues] = useState(initialValues)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setvalues({...values, [name]: value});
  }

  return (
    <div>
      <FormControl variant="standard">
        <TextField 
          value={values.title}
          onChange={handleInputChange}
          name="title"
          label="Title"
          variant='outlined'
          required
        />
        <TextField 
          // value={values.description}
          onChange={handleInputChange}
          name='description'
          label='Description'
          required
          multiline
        />
        
        <InputLabel id='priority-label'>Priority</InputLabel>
        <Select 
          labelId='priority-label'
          id='test'
          value={values.priority}
          name='priority'
          onChange={handleInputChange}
          label='Priority'
          >
          <MenuItem value=""><em>None</em></MenuItem>
          {[1,2,3,4,5].map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
        </Select>

        <Button variant="outlined">Submit</Button>
      </FormControl>
    </div>
  )
}
