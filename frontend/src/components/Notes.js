import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import '../App.css';

const initialState = {
    post: false,
};
const TextBox = () => {
    const [value, setValue] = useState('Controlled');
    const [post, setPost] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="textfield-container">

            <TextField
                className="text-box-notes"
                label="Notes"
                multiline
                rows={4}
                variant="outlined"
                onChange={handleChange}
            />


        </div >
    );
}

export default TextBox;
