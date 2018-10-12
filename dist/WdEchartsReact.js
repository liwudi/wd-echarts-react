'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _sizeSensor = require('size-sensor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by mapbar_front on 2018/10/11
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var WdEchartsReact = function (_Component) {
    _inherits(WdEchartsReact, _Component);

    function WdEchartsReact(props) {
        _classCallCheck(this, WdEchartsReact);

        var _this = _possibleConstructorReturn(this, (WdEchartsReact.__proto__ || Object.getPrototypeOf(WdEchartsReact)).call(this, props));

        _this.dom = null;
        return _this;
    }

    _createClass(WdEchartsReact, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.reRenderCharts();
        }
    }, {
        key: 'reRenderCharts',
        value: function reRenderCharts() {
            var _this2 = this;

            this.myChart = this.getEchartsInstance();
            this.myChart.setOption(this.props.options);
            if (this.dom) {
                (0, _sizeSensor.bind)(this.dom, function () {
                    _this2.myChart.resize();
                });
            }
        }
    }, {
        key: 'getEchartsInstance',
        value: function getEchartsInstance() {
            var echartInstance = _echarts2.default.getInstanceByDom(this.dom) || _echarts2.default.init(this.dom);
            return echartInstance;
        }
    }, {
        key: 'disposeCharts',
        value: function disposeCharts() {
            if (this.dom) {
                try {
                    (0, _sizeSensor.clear)(this.dom);
                } catch (e) {
                    console.warn(e);
                }
            }
            this.myChart && this.myChart.dispose();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.disposeCharts();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', { style: { width: '100%', height: '100%' }, ref: function ref(dom) {
                    return _this3.dom = dom;
                } });
        }
    }]);

    return WdEchartsReact;
}(_react.Component);

module.exports = WdEchartsReact;