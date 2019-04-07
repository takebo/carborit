import React from 'react';
import { shallow } from 'enzyme';

import RemoveFavorites from './RemoveFavorites';

describe('RemoveFavorites', () => {
  it('should render', () => {
    const props = { value: 'model+year', deleteFav: jest.fn() };
    const component = shallow(<RemoveFavorites {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('button click should delete favorite', () => {
    const props = { value: 'model+year', deleteFav: jest.fn() };
    const component = shallow(<RemoveFavorites {...props} />);
    component.simulate('click', { target: { value: 123 } });
    expect(props.deleteFav).toHaveBeenCalled();
  });
});
