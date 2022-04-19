import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import '../App.css';

export const SanitarySlider = () => {

    const [value, setValue] = React.useState('Controlled');
    const marks = [
        {
            value: 1,
            label: 'Dirty',
        },
        {
            value: 3,
            label: '',
        },
        {
            value: 5,
            label: 'Clean',
        },
    ];

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function valuetext(value) {
        return value;
    }
    return (
        <div className="slider-container">
            <div className="slider">
                <Slider
                    className="popup-slider"
                    aria-label="Custom marks"
                    defaultValue={3}
                    getAriaValueText={valuetext}
                    step={1}
                    marks={marks}
                    min={1}
                    max={5}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export const SafetySlider = () => {

    const [value, setValue] = React.useState('Controlled');
    const marks = [
        {
            value: 1,
            label: 'Safe',
        },
        {
            value: 3,
            label: '',
        },
        {
            value: 5,
            label: 'Unsafe',
        },

    ];

    function valuetext(value) {
        return value;
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <div className="slider">

                <Slider
                    className="popup-slider"
                    aria-label="Custom marks"
                    defaultValue={3}
                    getAriaValueText={valuetext}
                    step={1}
                    marks={marks}
                    min={1}
                    max={5}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

