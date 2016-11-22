import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import { TranslationSearch } from 'TranslationSearch';

describe('TranslationSearch', () => {
  it('should exist', () => {
    const todoSearch = TestUtils.renderIntoDocument(<TranslationSearch />);
    expect(todoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const searchText = 'Hello World';
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };

    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TranslationSearch dispatch={ spy } />);
    const $el = $(ReactDOM.findDOMNode(todoSearch));
    const input = $el.find('input[name="searchText"]')[0];

    input.value = searchText;
    TestUtils.Simulate.change(input);

    expect(spy).toHaveBeenCalledWith(action);
  });
});