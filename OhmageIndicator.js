/*
 * OhmageIndicator.js
 *
 * This component displays the actual calculated ohmage of the resistor. 
 * Notice it doesn't actually do the calculation, a higher level component takes care of that. 
 * The only logic in this component is concerned with rendering an appropriate unit of resistance, be it Ω, KΩ or MΩ.
 *
 * This component only expects 1 prop to be passed, resistance.
 */
import React, { Component } from 'react';

const OhmageIndicator = ({ resistance }) => {
    const formatResistance = () => {
        const r = parseFloat(resistance);
        const MILLION = 1000000;
        const THOUSAND = 1000;

        if (r > MILLION)
            return(r / MILLION).toFixed(1) + "MΩ";
        if(r > THOUSAND)
            return (r / THOUSAND).toFixed(1) + "KΩ";
        return r.toFixed(1) + "Ω";
    }
    return (
        <p id="resistor-value">
            {formatResistance()}
        </p>
    );
};

OhmageIndicator.propTypes = {
    resistance: React.PropTypes.number.isRequired
};

export default OhmageIndicator
