import React from 'react';
import { EditorBlock } from 'draft-js';

import { updateDataOfBlock } from '../model/index';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.updateData = this.updateData.bind(this);
  }

  updateData(e) {
    const { block, blockProps } = this.props;
    const { onChange, getEditorState } = blockProps;
    const data = block.getData();
    const checked = (data.has('checked') && data.get('checked') === true);
    const newData = data.set('checked', !checked);
    onChange(updateDataOfBlock(getEditorState(), block, newData));
  }

  render() {
    const data = this.props.block.getData();
    const checked = data.get('checked') === true ? true : false;
    return (
      <div className={checked ? 'block-todo-completed' : ''}>
        <input type="checkbox" checked={ checked } onChange={this.updateData} />
        <EditorBlock {...this.props} />
      </div>
    )
  }
};
