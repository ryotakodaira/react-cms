import React, { Component, PropTypes } from 'react';
// import Dropzone from 'react-dropzone';
import { Tabs, Tab } from 'material-ui/Tabs';

import './EditArticle.scss';

export default class EditArticle extends Component {
  static propTypes = {
    content: PropTypes.string,
    htmlContent: PropTypes.string,
    tabMark: PropTypes.string.isRequired,
    tabHtml: PropTypes.string.isRequired,
    handleContent: PropTypes.func.isRequired,
  }
  static defaultProps = {
    content: '',
    htmlContent: '',
  }

  constructor() {
    super();
    this.state = {
      tabValue: null,
    };

    this.handleTab = this.handleTab.bind(this);
  }

  componentWillMount() {
    this.setState({
      tabValue: this.props.tabMark,
    });
  }

  handleTab(value) {
    this.setState({
      tabValue: value,
    });
  }

  render() {
    const {
      content,
      htmlContent,
      handleContent,
      tabMark,
      tabHtml,
    } = this.props;
    const { tabValue } = this.state;

    return (
      <div styleName='content'>
        <Tabs
          value={tabValue}
          onChange={this.handleTab}
          style={{ width: '100%' }}
        >
          <Tab label={tabMark} value={tabMark}>
            <textarea
              value={content}
              onChange={(event) => { handleContent(event.target.value, tabMark); }}
            />
          </Tab>
          <Tab label={tabHtml} value={tabHtml}>
            <textarea
              value={htmlContent}
              onChange={(event) => { handleContent(event.target.value, tabHtml); }}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
