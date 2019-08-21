import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';
import Moment from 'moment';
import WeatherIcon from 'react-weathericons';


it('renders the date', () => {
  const date= new Date()
    const wrapper = shallow((
    <ForecastSummary
      date={date}
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecast-summary__date').text()).toEqual(Moment(date).format('ddd Do MMM'));
});

it('renders the temperature', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('mockTemperature');
});

it('renders the description', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
});

it('renders the icon', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find(WeatherIcon).length).toEqual(1);
});
