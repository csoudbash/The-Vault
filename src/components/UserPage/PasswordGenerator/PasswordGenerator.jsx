import './PasswordGenerator.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
function PasswordGenerator() {


    return (
        <>
            <div id='passwordGeneratorBody'>

                <div id='passwordGenerator'>
                    <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                            <Button type='submit'>Generate Password</Button>

                    <Typography> Password Generator</Typography>
                    <TextField
                        type='range'
                        min="1"
                        max="50"
                        defaultValue="10"
                        className='characterAmountRange'
                        />
                    <TextField
                        type='number'
                        min="1"
                        max="50"
                        defaultValue="10"
                        className='characterAmountNumber'
                        />
                        <FormControlLabel
                            // value="top"
                            control={<Checkbox />}
                            label="Include Uppercase"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            // value="top"
                            control={<Checkbox />}
                            label="Include Numbers"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            // value="top"
                            control={<Checkbox />}
                            label="Include Symbols"
                            labelPlacement="top"
                        />
                        </FormGroup>
                    </FormControl>

                </div>
            </div>
        </>
    )

}

export default PasswordGenerator;