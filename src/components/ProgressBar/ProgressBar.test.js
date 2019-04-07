import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  const props = { complete: false };
  const component = shallow(<ProgressBar {...props} />);
  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should add class complete', () => {
    const props = { complete: true };
    const component = shallow(<ProgressBar {...props} />);
    expect(component.hasClass('complete')).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
