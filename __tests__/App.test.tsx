import 'react-native';
import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  expect(renderer.create(<App />)).toMatchSnapshot();
});