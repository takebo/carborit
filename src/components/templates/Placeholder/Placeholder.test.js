import React from 'react';
import { shallow } from 'enzyme';

import Placeholder from './Placeholder';

describe('PLaceholder', () => {
  it('should render', () => {
    const props = {
      placeholderText: '',
      placeholderImage: '',
    };
    const wrapper = shallow(<Placeholder {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
