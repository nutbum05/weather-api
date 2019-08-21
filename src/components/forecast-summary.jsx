
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-weathericons';
import Moment from 'moment';


const ForecastSummary = props => (
  <div>
    <span className="date">{Moment(props.date).format('ddd Do MMM')}</span>
    <span className="temperature">{props.temperature}</span>
    <span className="description">{props.description}</span>
    <span className="icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </span>
    <button onClick={() => props.onSelect(props.date)}>More details</button>
  </div>
);
ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
