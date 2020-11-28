import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import styles from './index.less';

const CustomTable = ({ isSetKey, ...props }) => {
  const { tips } = props;

  const tableProps = {
    locale: {
      emptyText: (
        <div>
          <img alt="icon" src="/assets/table_empty_icon.svg" />
          <div className={styles.table}>{tips || '暂无数据'}</div>
        </div>
      ),
    },
    ...props,
  };

  return (
    <Table
      {...tableProps}
      simple
      rowKey={isSetKey ? record => record.id : 'key'}
    />
  );
};

CustomTable.propTypes = {
  isSetKey: PropTypes.bool,
  tips: PropTypes.string,
};

CustomTable.defaultProps = {
  isSetKey: true,
};

export default CustomTable;
