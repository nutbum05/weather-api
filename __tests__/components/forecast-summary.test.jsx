import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

describe('<ForecastSummary />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = Enzyme.shallow((
      <ForecastSummary
        date={1525046400000}
        temperature="mockTemperature"
        description="mockDescription"
        icon={800}
      />
    ));
  });

  it('renders the date in correct format', () => {
    const text = wrapper.find('.date').text();
    expect(text).toEqual('Mon 30th Apr');
  });
  it('renders the temperature', () => {
    const text = wrapper.find('.temperature').text();
    expect(text).toEqual('mockTemperature');
  });
  it('renders the description', () => {
    const text = wrapper.find('.description').text();
    expect(text).toEqual('mockDescription');
  });
  it('renders the icon', () => {
    const img = wrapper.find('.icon').text();
    expect(img).toEqual('<WeatherIcons />');
  });
});
