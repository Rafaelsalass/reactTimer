import React from 'react'
import ReactDom from 'react-dom'
import expect from 'expect'
import ReactTestUtils from 'react-dom/test-utils'
import Clock from 'Clock'

describe ('Clock', () => {
  it ('should exist', () => {
    expect (Clock).toExist();
  });
  /*
  describe ('render', () => {
    it ('should render clock to output', () => {
      var clock = ReactTestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDom.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    });
  });
  */

  describe ('formatSeconds', () => {
    it ('should format seconds', () => {
      var clock = ReactTestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });

  describe ('formatSeconds if less than 10 minutes/seconds', () => {
    it ('should format seconds', () => {
      var clock = ReactTestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});
