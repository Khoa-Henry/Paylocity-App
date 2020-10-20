import React from 'react';
import {TextField} from 'material-ui/core';


function Textfield(){
    return(
        <div className={classes.Textfield}>
            <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </div>
    );
}
export default TextField;