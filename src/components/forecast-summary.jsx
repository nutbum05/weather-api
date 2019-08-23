
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';


const ForecastSummary = props => (
  <h1>
    <div className="forecast-summary__date">
      <span>{Moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecast-summary__temperature">{props.temperature}&deg;C</div>
    <div className="forecast-summary__description">{props.description}</div>
    <div className="forecast-summary__icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
    <button onClick={() => props.onSelect(props.date)}>More details</button>

  </h1>
);
ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
