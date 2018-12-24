/**
 *
 * Story
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Story extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      by = '',
      id = 0,
      kids = [],
      score = 0,
      time = 0,
      title = '',
      type = '',
    }
  }

  componentDidMount() {
    fetch(this.props.url, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          by: data.by,
          id: data.id,
          kids: data.kids,
          score: data.score,
          time: data.time,
          title: data.title,
          type: data.type,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <b>Title: {this.state.title}</b>
        <i>{this.state.url}</i>
        Score: {this.state.score}
        By: {this.state.by}
        Time: {this.state.}
      </div>
    );
  }
}

Story.propTypes = {};

export default Story;
