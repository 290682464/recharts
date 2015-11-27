import React, {PropTypes} from 'react';

class BarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'BarItem';

  static propTypes = {
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    barSize: PropTypes.number,
    // 数据对应的单位
    unit: PropTypes.any,
    // 数据对应的名称
    name: PropTypes.any,
    // 柱对应的数据key
    dataKey: PropTypes.string.isRequired,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    // 数据对应的单位
    unit: PropTypes.any,
    // 数据对应的名称
    name: PropTypes.any,
    legendType: PropTypes.string,
    isActive: PropTypes.bool,
    stack: PropTypes.string,
    stackType: PropTypes.string,
    // 数据格式化函数
    formatter: PropTypes.func
  };

  static defaultProps = {
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    isActive: true
  };

  render () {
    return null;
  }
};

export default BarItem;