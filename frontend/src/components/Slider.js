import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import '../App.css';

export const SanitarySlider = ({ rating }) => {

    const [value, setRating] = React.useState('Controlled');
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
        setRating(event.target.value);
        console.log("This is the current rating: ", value)
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
                    defaultValue={rating}
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

export const SafetySlider = ({ rating }) => {

    const [value, setRating] = React.useState('Controlled');
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
        setRating(event.target.value);
        console.log("This is the current rating: ", value)
    };

    return (
        <div className="slider-container">
            <div className="slider">

                <Slider
                    className="popup-slider"
                    aria-label="Custom marks"
                    defaultValue={rating}
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

