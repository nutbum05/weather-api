
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-weathericons';
import Moment from 'moment';


const ForecastSummary = props => (
  <div>
    <span className="forecast-summary__date">{Moment(props.date).format('ddd Do MMM')}</span>
    <span className="forecast-summary__temperature">{props.temperature}</span>
    <span className="forecast-summary__description">{props.description}</span>
    <span className="forecast-summary__icon">
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
