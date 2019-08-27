import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withFetch = (fetchFn, initialState, key = 'results') => Comp => {
  class WithFetch extends Component {
    static propTypes = {
      page: PropTypes.string.isRequired
    }

    state = {
      result: initialState,
      loading: false,
    }

    fetch = () => {
      this.setState({ loading: true });
      fetchFn(this.props.page)
        .then(results => this.setState({ results, loading: false }));
    }

    componentDidCatch() {
      this.fetch();
    }

    componentDidUpdate() {
      this.fetch();
    }

    render() {
      const { results, loading } = this.state;
      const props = { [key]: results, loading, ...this.props };
      return <Comp {...props} />;
    }

  }
  return WithFetch;
};
