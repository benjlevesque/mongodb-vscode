import * as React from 'react';
import classnames from 'classnames';

const styles = require('../../connect.module.less');

type props = {
  _id: any;
  operationType: string;
  data: any;
};

class ChangeStreamEvent extends React.Component<props> {
  render(): React.ReactNode {
    const { _id, operationType, data } = this.props;

    return (
      <div
        className={classnames({
          [styles['change-stream-event']]: true
        })}
      >
        <h4>
          {operationType}: {JSON.stringify(_id)}
        </h4>
        <div>
          {JSON.stringify(data)}
        </div>
      </div>
    );
  }
}

export default ChangeStreamEvent;
