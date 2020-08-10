function Gauge(winSize, gValue) {
    let pos = winSize == '1920' ? '36%' : '50%';
    let obj1 = { //文字样式（及“10”、“20”等文字样式）
        color: "black",
        distance: winSize == '1920' ? 5 : 10 //文字离表盘的距离
    };
    let obj2 = {
        formatter: "{score|{value}}",
        offsetCenter: [0, "60%"],
        backgroundColor: '#333333',
        height: winSize == '1920' ? 30 : 80,
        rich: {
            score: {
                color: "white",
                fontFamily: "微软雅黑",
                fontSize: winSize == '1920' ? 32 : 80
            }
        }
    };
    if (winSize != '1920') {
        obj1.fontSize = 24;
        obj2.width = 300;
    }

    return {
        grid: {
            top: '',
            bottom: '',
            containLabel: true
        },
        series: [
            {
                type: "gauge",
                //center: ["50%", "45%"], // 仪表位置
                radius: "70%", //仪表大小
                startAngle: 200, //开始角度
                endAngle: -20, //结束角度
                axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.5, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 1,
                                color: "#E75F25" // 50% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#D9452C" // 40% 处的颜色
                            }], false)], // 100% 处的颜色
                            [0.7, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 1,
                                color: "#FFC539" // 70% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#FE951E" // 66% 处的颜色
                            }, {
                                offset: 0,
                                color: "#E75F25" // 50% 处的颜色
                            }], false)],
                            [0.9, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1,
                                color: "#C7DD6B" // 90% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#FEEC49" // 86% 处的颜色
                            }, {
                                offset: 0,
                                color: "#FFC539" // 70% 处的颜色
                            }], false)],
                            [1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0.2,
                                color: "#1CAD52" // 92% 处的颜色
                            }, {
                                offset: 0,
                                color: "#C7DD6B" // 90% 处的颜色
                            }], false)]
                        ],
                        width: 10
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                pointer: { //指针样式
                    length: '45%'
                },
                detail: {
                    show: false
                }
            },
            {
                type: "gauge",
                center: ["50%", pos], // 默认全局居中
                radius: "100%", //儀表板大小
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                    show: true,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [ //表盘颜色
                            [0.6, "#50bda1"],//0-50%处的颜色
                            [0.7, "#ffd868"],//51%-70%处的颜色
                            [0.8, "#ffa41b"],//70%-90%处的颜色
                            [1, "#eb4559"]//90%-100%处的颜色
                        ],
                        width: 30//表盘宽度
                    }
                },
                splitLine: { //分割线样式（及10、20等长线样式）
                    length: 30,
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                axisTick: { //刻度线样式（及短线样式）
                    length: 20
                },
                axisLabel: obj1,
                detail: obj2,
                data: [{
                    value: gValue,
                    label: {
                        textStyle: {
                            fontSize: winSize == '1920' ? 12 : 40
                        }
                    }
                }]
            }
        ]
    };
}

function PUEGauge(winSize, gValue) {
    let pos = winSize == '1920' ? '36%' : '50%';
    let obj1 = { //文字样式（及“10”、“20”等文字样式）
        color: "black",
        distance: winSize == '1920' ? 5 : 10 //文字离表盘的距离
    };
    let obj2 = {
        formatter: "{score|{value}}",
        offsetCenter: [0, "60%"],
        backgroundColor: '#333333',
        height: winSize == '1920' ? 30 : 80,
        rich: {
            score: {
                color: "white",
                fontFamily: "微软雅黑",
                fontSize: winSize == '1920' ? 32 : 80
            }
        }
    };
    if (winSize != '1920') {
        obj1.fontSize = 24;
        obj2.width = 300;
    }

    return {
        grid: {
            top: '',
            bottom: '',
            containLabel: true
        },
        series: [
            {
                type: "gauge",
                //center: ["50%", "45%"], // 仪表位置
                radius: "70%", //仪表大小
                startAngle: 200, //开始角度
                endAngle: -20, //结束角度
                axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.5, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 1,
                                color: "#E75F25" // 50% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#D9452C" // 40% 处的颜色
                            }], false)], // 100% 处的颜色
                            [0.7, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 1,
                                color: "#FFC539" // 70% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#FE951E" // 66% 处的颜色
                            }, {
                                offset: 0,
                                color: "#E75F25" // 50% 处的颜色
                            }], false)],
                            [0.9, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1,
                                color: "#C7DD6B" // 90% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#FEEC49" // 86% 处的颜色
                            }, {
                                offset: 0,
                                color: "#FFC539" // 70% 处的颜色
                            }], false)],
                            [1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0.2,
                                color: "#1CAD52" // 92% 处的颜色
                            }, {
                                offset: 0,
                                color: "#C7DD6B" // 90% 处的颜色
                            }], false)]
                        ],
                        width: 10
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                pointer: { //指针样式
                    length: '45%'
                },
                detail: {
                    show: false
                }
            },
            {
                type: "gauge",
                center: ["50%", pos], // 默认全局居中
                min: 1,
                max: 2,    //设置刻度盘内数值区间
                splitNumber: 10,  //设置间隔区域的显示数量
                radius: winSize == '1920' ? "74%" : "100%", //儀表板大小
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                    show: true,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [ //表盘颜色
                            [0.6, "#50bda1"],//0-50%处的颜色
                            [0.8, "#ffd868"],//51%-70%处的颜色
                            [0.9, "#ffa41b"],//70%-90%处的颜色
                            [1, "#eb4559"]//90%-100%处的颜色
                        ],
                        width: 30//表盘宽度
                    }
                },
                splitLine: { //分割线样式（及10、20等长线样式）
                    length: 30,
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                axisTick: { //刻度线样式（及短线样式）
                    length: 20
                },
                axisLabel: obj1,
                detail: obj2,
                data: [{
                    value: gValue,
                    label: {
                        textStyle: {
                            fontSize: winSize == '1920' ? 12 : 40
                        }
                    }
                }]
            }
        ]
    };
}

function PUEGaugeBackend(gValue) {
    return {
        backgroundColor: 'rgba(0,0,0,0)', //设置无背景色
        grid: {
            top: '',
            bottom: '',
            containLabel: true
        },
        series: [
            {
                type: "gauge",
                //center: ["50%", "45%"], // 仪表位置
                radius: "70%", //仪表大小
                startAngle: 200, //开始角度
                endAngle: -20, //结束角度
                axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.5, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 1,
                                color: "#E75F25" // 50% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#D9452C" // 40% 处的颜色
                            }], false)], // 100% 处的颜色
                            [0.7, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 1,
                                color: "#FFC539" // 70% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#FE951E" // 66% 处的颜色
                            }, {
                                offset: 0,
                                color: "#E75F25" // 50% 处的颜色
                            }], false)],
                            [0.9, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1,
                                color: "#C7DD6B" // 90% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#FEEC49" // 86% 处的颜色
                            }, {
                                offset: 0,
                                color: "#FFC539" // 70% 处的颜色
                            }], false)],
                            [1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0.2,
                                color: "#1CAD52" // 92% 处的颜色
                            }, {
                                offset: 0,
                                color: "#C7DD6B" // 90% 处的颜色
                            }], false)]
                        ],
                        width: 10
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                pointer: { //指针样式
                    length: '45%'
                },
                detail: {
                    show: false
                }
            },
            {
                type: "gauge",
                center: ["50%", "50%"], // 默认全局居中
                min: 1,
                max: 2,    //设置刻度盘内数值区间
                splitNumber: 10,  //设置间隔区域的显示数量
                radius: "100%", //儀表板大小
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                    show: true,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [ //表盘颜色
                            [0.6, "#50bda1"],//0-50%处的颜色
                            [0.8, "#ffd868"],//51%-70%处的颜色
                            [0.9, "#ffa41b"],//70%-90%处的颜色
                            [1, "#eb4559"]//90%-100%处的颜色
                        ],
                        width: 20//表盘宽度
                    }
                },
                splitLine: { //分割线样式（及10、20等长线样式）
                    length: 30,
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                axisTick: { //刻度线样式（及短线样式）
                    length: 20
                },
                axisLabel: { //文字样式（及“10”、“20”等文字样式）
                    color: "black",
                    distance: 5 //文字离表盘的距离
                },
                detail: {
                    formatter: "{score|{value}}",
                    offsetCenter: [0, "60%"],
                    backgroundColor: '#333333',
                    height: 30,
                    rich: {
                        score: {
                            color: "white",
                            fontFamily: "微软雅黑",
                            fontSize: 32
                        }
                    }
                },
                data: [{
                    value: gValue,
                    label: {
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }]
            }
        ]
    };
}

function Thermometer(winSize, tValue) {
    let gap = 13;
    let TP_value = tValue;
    let kd = [];
    let Gradient = [];
    let leftColor = '';
    let showValue = '';
    let boxPosition = winSize == '1920' ? [10, 0] : [65, 0];
    let TP_txt = ''
    let obj1 = winSize == '1920' ? [{
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
            show: false
        }
    }, {
        show: false,
        min: 0,
        max: 50,
    }, {
        type: 'category',
        data: ['', '', '', '', '', '', '', '', '', '', '°C'],
        position: 'left',
        offset: -90,
        axisLabel: {
            fontSize: 20,
            color: '#333'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }] : [{
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
            show: false
        }
    }];
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    let len1 = '-3';
    let len2 = '-1';
    if (winSize == '1920') {
        len1 = '-4.5';
        len2 = '-2';
    }
    for (var i = 0, len = 135; i <= len; i++) {
        if (i < 10 || i > 130) {
            kd.push('')
        } else {
            if ((i - 10) % 16 === 0) {
                kd.push(len1);
            } else if ((i - 10) % 8 === 0) {
                kd.push(len2);
            } else {
                kd.push('');
            }
        }
    }
    //中间线的渐变色和文本内容
    if (TP_value > 30) {
        TP_txt = '溫度偏高';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 0.5,
                color: '#E4D225'
            }, {
                offset: 1,
                color: '#E01F28'
            })
    } else if (TP_value > 15) {
        TP_txt = '溫度正常';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 1,
                color: '#C6A300'
            })
    } else {
        TP_txt = '溫度偏低';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 1,
                color: '#00CACA'
            })
    }
    if (TP_value > 30) {
        showValue = 30
    } else {
        if (TP_value < 15) {
            showValue = 15
        } else {
            showValue = TP_value
        }
    }
    if (TP_value < 18) {
        boxPosition = winSize == '1920' ? [0, -65] : [65, -65];
    }
    showValue = (showValue - 15) * 8 + 10;  //最終數值
    leftColor = Gradient[Gradient.length - 1].color;
    // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
    return option = {
        backgroundColor: '',
        title: {
            text: '温度计',
            show: false
        },
        yAxis: obj1,
        xAxis: [{
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -15 : -5,
            max: 80,
        }],
        series: [{
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 0,
            data: [{
                value: showValue,
                label: {
                    normal: {
                        show: true,
                        position: boxPosition,
                        backgroundColor: {
                            image: '',//文字框背景图
                        },
                        width: 200,
                        height: 100,
                        formatter: '{back| ' + TP_value + ' }{unit|°C}\n{downTxt|' + TP_txt + '}',
                        rich: {
                            back: {
                                align: 'center',
                                lineHeight: winSize == '1920' ? 40 : 60,
                                fontSize: winSize == '1920' ? 25 : 60,
                                fontWeight: 'bold',
                                fontFamily: '微軟正黑體',
                                color: leftColor
                            },
                            unit: {
                                fontFamily: '微軟正黑體',
                                fontSize: winSize == '1920' ? 20 : 40,
                                fontWeight: 'bold',
                                lineHeight: winSize == '1920' ? 40 : 60,
                                color: leftColor
                            },
                            downTxt: {
                                lineHeight: winSize == '1920' ? 40 : 60,
                                fontSize: winSize == '1920' ? 24 : 40,
                                fontWeight: 'bold',
                                align: 'center',
                                color: '#333'
                            }
                        }
                    }
                }
            }],

            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [134],
            barWidth: 28,
            itemStyle: {
                normal: {
                    color: '#035aa6',
                    barBorderRadius: 50,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [135],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: '#035aa6',
                    barBorderRadius: 50,
                }
            },
            z: 0
        }, {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 0,
            symbolSize: 48,
            itemStyle: {
                normal: {
                    color: '#93FE94',
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 1,
            symbolSize: 60,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                }
            },
            z: 1
        }, {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 2,
            symbolSize: 70,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                }
            },
            z: 0
        }, {
            name: '刻度',
            type: 'bar',
            yAxisIndex: 0,
            xAxisIndex: 3,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    distance: winSize == '1920' ? 20 : 10,
                    color: '#333',
                    fontSize: winSize == '1920' ? 14 : 28,
                    fontWeight: 'bold',
                    formatter: function (params) {
                        if (params.dataIndex > 130 || params.dataIndex < 10) {
                            return '';
                        } else {
                            if ((params.dataIndex - 10) % 16 === 0) {
                                return gap = gap + 2;
                            } else {
                                return '';
                            }
                        }
                    }
                }
            },
            barGap: '-100%',
            data: kd,
            barWidth: 1,
            itemStyle: {
                normal: {
                    color: '#333',
                    barBorderRadius: 120,
                }
            },
            z: 0
        }]
    };
}

function Hygrometer(winSize, tValue) {
    let gap = -20;
    let TP_value = tValue;
    let kd = [];
    let Gradient = [];
    let leftColor = '';
    let showValue = '';
    let boxPosition = winSize == '1920' ? [10, 0] : [65, 0];
    let TP_txt = ''
    let obj1 = winSize == '1920' ? [{
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
            show: false
        }
    }, {
        show: false,
        min: 0,
        max: 50,
    }, {
        type: 'category',
        data: ['', '', '', '', '', '', '', '', '', '', '%'],
        position: 'left',
        offset: -90,
        axisLabel: {
            fontSize: 20,
            color: '#333'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }] : [{
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
            show: false
        }
    }];
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    let len1 = '-3';
    let len2 = '-1';
    if (winSize == '1920') {
        len1 = '-4.5';
        len2 = '-2';
    }
    for (var i = 0, len = 135; i <= len; i++) {
        if (i < 10 || i > 130) {
            kd.push('')
        } else {
            if ((i - 10) % 24 === 0) {
                kd.push(len1);
            } else if ((i - 10) % 12 === 0) {
                kd.push(len2);
            } else {
                kd.push('');
            }
        }
    }
    //中间线的渐变色和文本内容
    if (TP_value > 80) {
        TP_txt = '濕度偏高';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 0.5,
                color: '#E4D225'
            }, {
                offset: 1,
                color: '#E01F28'
            })
    } else if (TP_value > 30) {
        TP_txt = '濕度正常';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 1,
                color: '#C6A300'
            })
    } else {
        TP_txt = '濕度偏低';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 1,
                color: '#00CACA'
            })
    }
    if (TP_value > 100) {
        showValue = 100
    } else {
        if (TP_value < 0) {
            showValue = 0
        } else {
            showValue = TP_value
        }
    }
    if (TP_value < 30) {
        boxPosition = winSize == '1920' ? [0, -65] : [65, -65];
    }
    showValue = showValue * 1.2 + 10;  //最終數值
    leftColor = Gradient[Gradient.length - 1].color;
    // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
    return option = {
        backgroundColor: '',
        title: {
            text: '温度计',
            show: false
        },
        yAxis: obj1,
        xAxis: [{
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -15 : -5,
            max: 80,
        }],
        series: [{
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 0,
            data: [{
                value: showValue,
                label: {
                    normal: {
                        show: true,
                        position: boxPosition,
                        backgroundColor: {
                            image: '',//文字框背景图
                        },
                        width: 200,
                        height: 100,
                        formatter: '{back| ' + TP_value + ' }{unit|%}\n{downTxt|' + TP_txt + '}',
                        rich: {
                            back: {
                                align: 'center',
                                lineHeight: winSize == '1920' ? 40 : 60,
                                fontSize: winSize == '1920' ? 25 : 60,
                                fontWeight: 'bold',
                                fontFamily: '微軟正黑體',
                                color: leftColor
                            },
                            unit: {
                                fontFamily: '微軟正黑體',
                                fontSize: winSize == '1920' ? 20 : 40,
                                fontWeight: 'bold',
                                lineHeight: winSize == '1920' ? 40 : 60,
                                color: leftColor
                            },
                            downTxt: {
                                lineHeight: 60,
                                fontSize: winSize == '1920' ? 24 : 40,
                                align: 'center',
                                fontWeight: 'bold',
                                color: '#333'
                            }
                        }
                    }
                }
            }],

            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [134],
            barWidth: 28,
            itemStyle: {
                normal: {
                    color: '#035aa6',
                    barBorderRadius: 50,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [135],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: '#035aa6',
                    barBorderRadius: 50,
                }
            },
            z: 0
        }, {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 0,
            symbolSize: 48,
            itemStyle: {
                normal: {
                    color: '#93FE94',
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 1,
            symbolSize: 60,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                }
            },
            z: 1
        }, {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 2,
            symbolSize: 70,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                }
            },
            z: 0
        }, {
            name: '刻度',
            type: 'bar',
            yAxisIndex: 0,
            xAxisIndex: 3,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    distance: winSize == '1920' ? 20 : 10,
                    color: '#333',
                    fontSize: winSize == '1920' ? 14 : 28,
                    fontWeight: 'bold',
                    formatter: function (params) {
                        if (params.dataIndex > 130 || params.dataIndex < 10) {
                            return '';
                        } else {
                            if ((params.dataIndex - 10) % 24 === 0) {
                                return gap = gap + 20;
                            } else {
                                return '';
                            }
                        }
                    }
                }
            },
            barGap: '-100%',
            data: kd,
            barWidth: 1,
            itemStyle: {
                normal: {
                    color: '#333',
                    barBorderRadius: 120,
                }
            },
            z: 0
        }]
    };
}

function ThermometerAC(winSize, tValue) {
    let gap = 18;
    let TP_value = tValue;
    let kd = [];
    let Gradient = [];
    let leftColor = '';
    let showValue = '';
    let boxPosition = winSize == '1920' ? [10, 0] : [5, 0];
    let TP_txt = ''
    let obj1 = winSize == '1920' ? [{
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
            show: false
        }
    }, {
        show: false,
        min: 0,
        max: 50,
    }, {
        type: 'category',
        data: ['', '', '', '', '', '', '', '', '', '', '°C'],
        position: 'left',
        offset: -90,
        axisLabel: {
            fontSize: 20,
            color: '#333'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }] : [{
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
            show: false
        }
    }];
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    let len1 = '-3';
    let len2 = '-1';
    if (winSize == '1920') {
        len1 = '-4.5';
        len2 = '-2';
    }
    for (var i = 0, len = 135; i <= len; i++) {
        if (i < 10 || i > 130) {
            kd.push('')
        } else {
            if ((i - 10) % 16 === 0) {
                kd.push(len1);
            } else if ((i - 10) % 8 === 0) {
                kd.push(len2);
            } else {
                kd.push('');
            }
        }
    }
    //中间线的渐变色和文本内容
    if (TP_value > 30) {
        //TP_txt = '溫度偏高';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 0.5,
                color: '#E4D225'
            }, {
                offset: 1,
                color: '#E01F28'
            })
    } else if (TP_value > 20) {
        //TP_txt = '溫度正常';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 1,
                color: '#C6A300'
            })
    } else {
        //TP_txt = '溫度偏低';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 1,
                color: '#00CACA'
            })
    }
    if (TP_value > 35) {
        showValue = 35
    } else {
        if (TP_value < 20) {
            showValue = 20
        } else {
            showValue = TP_value
        }
    }
    showValue = (showValue - 20) * 8 + 10;  //最終數值
    leftColor = Gradient[Gradient.length - 1].color;
    // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
    return option = {
        backgroundColor: '',
        title: {
            text: '温度计',
            show: false
        },
        yAxis: obj1,
        xAxis: [{
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -15 : -5,
            max: 80,
        }],
        series: [{
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 0,
            data: [{
                value: showValue,
                label: {
                    normal: {
                        show: true,
                        position: boxPosition,
                        backgroundColor: {
                            image: '',//文字框背景图
                        },
                        width: 200,
                        height: 100,
                        formatter: '{back| ' + TP_value + ' }{unit|°C}\n{downTxt|' + TP_txt + '}',
                        rich: {
                            back: {
                                align: 'center',
                                fontSize: winSize == '1920' ? 25 : 40,
                                lineHeight: winSize == '1920' ? 40 : 60,
                                fontWeight: 'bold',
                                fontFamily: '微軟正黑體',
                                color: leftColor
                            },
                            unit: {
                                fontFamily: '微軟正黑體',
                                fontSize: winSize == '1920' ? 20 : 30,
                                fontWeight: 'bold',
                                lineHeight: winSize == '1920' ? 40 : 60,
                                color: leftColor
                            },
                            downTxt: {
                                lineHeight: winSize == '1920' ? 40 : 60,
                                fontSize: winSize == '1920' ? 24 : 40,
                                align: 'center',
                                color: '#333'
                            }
                        }
                    }
                }
            }],

            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [134],
            barWidth: 28,
            itemStyle: {
                normal: {
                    color: '#035aa6',
                    barBorderRadius: 50,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [135],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: '#035aa6',
                    barBorderRadius: 50,
                }
            },
            z: 0
        }, {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 0,
            symbolSize: 48,
            itemStyle: {
                normal: {
                    color: '#93FE94',
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 1,
            symbolSize: 60,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                }
            },
            z: 1
        }, {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 2,
            symbolSize: 70,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                }
            },
            z: 0
        }, {
            name: '刻度',
            type: 'bar',
            yAxisIndex: 0,
            xAxisIndex: 3,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    distance: winSize == '1920' ? 20 : 15,
                    color: '#333',
                    fontSize: winSize == '1920' ? 14 : 18,
                    fontWeight: 'bold',
                    formatter: function (params) {
                        if (params.dataIndex > 130 || params.dataIndex < 10) {
                            return '';
                        } else {
                            if ((params.dataIndex - 10) % 16 === 0) {
                                return gap = gap + 2;
                            } else {
                                return '';
                            }
                        }
                    }
                }
            },
            barGap: '-100%',
            data: kd,
            barWidth: 1,
            itemStyle: {
                normal: {
                    color: '#333',
                    barBorderRadius: 120,
                }
            },
            z: 0
        }]
    };
}

function HygrometerAC(winSize, tValue) {
    let gap = -20;
    let TP_value = tValue;
    let kd = [];
    let Gradient = [];
    let leftColor = '';
    let showValue = '';
    let boxPosition = winSize == '1920' ? [10, 0] : [5, 0];
    let TP_txt = ''
    let obj1 = winSize == '1920' ? [{
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
            show: false
        }
    }, {
        show: false,
        min: 0,
        max: 50,
    }, {
        type: 'category',
        data: ['', '', '', '', '', '', '', '', '', '', '%'],
        position: 'left',
        offset: -90,
        axisLabel: {
            fontSize: 20,
            color: '#333'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }] : [{
        show: false,
        data: [],
        min: 0,
        max: 135,
        axisLine: {
            show: false
        }
    }];
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    let len1 = '-3';
    let len2 = '-1';
    if (winSize == '1920') {
        len1 = '-4.5';
        len2 = '-2';
    }
    for (var i = 0, len = 135; i <= len; i++) {
        if (i < 10 || i > 130) {
            kd.push('')
        } else {
            if ((i - 10) % 24 === 0) {
                kd.push(len1);
            } else if ((i - 10) % 12 === 0) {
                kd.push(len2);
            } else {
                kd.push('');
            }
        }
    }
    //中间线的渐变色和文本内容
    if (TP_value > 80) {
        //TP_txt = '溫度偏高';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 0.5,
                color: '#E4D225'
            }, {
                offset: 1,
                color: '#E01F28'
            })
    } else if (TP_value > 30) {
        //TP_txt = '溫度正常';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 1,
                color: '#C6A300'
            })
    } else {
        //TP_txt = '溫度偏低';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
                offset: 1,
                color: '#00CACA'
            })
    }
    if (TP_value > 100) {
        showValue = 100
    } else {
        if (TP_value < 0) {
            showValue = 0
        } else {
            showValue = TP_value
        }
    }
    showValue = showValue * 1.2 + 10;  //最終數值
    leftColor = Gradient[Gradient.length - 1].color;
    // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
    return option = {
        backgroundColor: '',
        title: {
            text: '温度计',
            show: false
        },
        yAxis: obj1,
        xAxis: [{
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -20 : -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: winSize == '1920' ? -15 : -5,
            max: 80,
        }],
        series: [{
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 0,
            data: [{
                value: showValue,
                label: {
                    normal: {
                        show: true,
                        position: boxPosition,
                        backgroundColor: {
                            image: '',//文字框背景图
                        },
                        width: 200,
                        height: 100,
                        formatter: '{back| ' + TP_value + ' }{unit|%}\n{downTxt|' + TP_txt + '}',
                        rich: {
                            back: {
                                align: 'center',
                                fontSize: winSize == '1920' ? 25 : 40,
                                lineHeight: winSize == '1920' ? 40 : 60,
                                fontWeight: 'bold',
                                fontFamily: '微軟正黑體',
                                color: leftColor
                            },
                            unit: {
                                fontFamily: '微軟正黑體',
                                fontSize: winSize == '1920' ? 20 : 30,
                                fontWeight: 'bold',
                                lineHeight: winSize == '1920' ? 40 : 60,
                                color: leftColor
                            },
                            downTxt: {
                                lineHeight: 60,
                                fontSize: winSize == '1920' ? 24 : 40,
                                align: 'center',
                                color: '#333'
                            }
                        }
                    }
                }
            }],

            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [134],
            barWidth: 28,
            itemStyle: {
                normal: {
                    color: '#035aa6',
                    barBorderRadius: 50,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [135],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: '#035aa6',
                    barBorderRadius: 50,
                }
            },
            z: 0
        }, {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 0,
            symbolSize: 48,
            itemStyle: {
                normal: {
                    color: '#93FE94',
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 1,
            symbolSize: 60,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                }
            },
            z: 1
        }, {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 2,
            symbolSize: 70,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                }
            },
            z: 0
        }, {
            name: '刻度',
            type: 'bar',
            yAxisIndex: 0,
            xAxisIndex: 3,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    distance: winSize == '1920' ? 20 : 15,
                    color: '#333',
                    fontSize: winSize == '1920' ? 14 : 14,
                    fontWeight: 'bold',
                    formatter: function (params) {
                        if (params.dataIndex > 130 || params.dataIndex < 10) {
                            return '';
                        } else {
                            if ((params.dataIndex - 10) % 24 === 0) {
                                return gap = gap + 20;
                            } else {
                                return '';
                            }
                        }
                    }
                }
            },
            barGap: '-100%',
            data: kd,
            barWidth: 1,
            itemStyle: {
                normal: {
                    color: '#333',
                    barBorderRadius: 120,
                }
            },
            z: 0
        }]
    };
}


function PieChartBackend(value) {
    return {
        backgroundColor: 'rgba(0,0,0,0)',
        title: {
            text: ['{a|可用率}', `{b|${value}%}`].join('\n\n'),
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontFamily: '微軟正黑體',
                        fontWeight: '500',
                        color: "#999",
                        fontSize: 24,
                        align: 'center',
                        textAlign: 'center'
                    },
                    b: {
                        fontFamily: '微軟正黑體',
                        fontWeight: '800',
                        color: "#333",
                        fontSize: 28,
                        align: 'center',
                        backgroundColor: {
                            // image: 'https://www.echartsjs.com/examples/data/asset/img/weather/sunny_128.png',

                        },
                        width: 15
                    }
                }
            },
            subtextStyle: {
                rich: {
                    a: {
                        fontFamily: 'SourceHanSansCN-Regular',
                        fontWeight: '400',
                        color: "rgba(76, 177, 255, 1)",
                        fontSize: 22,
                    },
                    b: {
                        fontFamily: 'SourceHanSansCN-Medium',
                        fontWeight: '500',
                        color: "RGBA(197, 69, 130, 1)",
                        fontSize: 30,
                    }
                }
            }
        },
        backgroundColor: '#fff',
        series: [{
            name: '准点率',
            type: 'pie',
            clockWise: true,
            radius: [60, 70],
            center: ['50%', '50%'],
            startAngle: 90,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'RGBA(79, 191, 211, 1)'
                }
            },
            hoverAnimation: false,
            data: [{
                value: value,
                name: '01'
            }, {
                value: 100 - value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: 'none', //未完成的圆环的颜色
                    }
                }
            }

            ]
        }, {
            name: '外框',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: [80, 90],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'RGBA(15, 54, 61, 1)'
                }
            },
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [{
                value: 100,
                name: '02',
            }, {
                value: 0,
                name: 'invisible',
            }

            ]
        },


        ]
    };
}

function PieChartBackend2(value) {
    return {
        backgroundColor: 'rgba(0,0,0,0)',
        title: {
            text: ['{a|可用率}', `{b|${value}%}`].join('\n\n'),
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontFamily: '微軟正黑體',
                        fontWeight: '500',
                        color: "#999",
                        fontSize: 24,
                        align: 'center',
                        textAlign: 'center'
                    },
                    b: {
                        fontFamily: '微軟正黑體',
                        fontWeight: '800',
                        color: "#333",
                        fontSize: 28,
                        align: 'center',
                        backgroundColor: {
                            // image: 'https://www.echartsjs.com/examples/data/asset/img/weather/sunny_128.png',

                        },
                        width: 15
                    }
                }
            },
            subtextStyle: {
                rich: {
                    a: {
                        fontFamily: 'SourceHanSansCN-Regular',
                        fontWeight: '400',
                        color: "rgba(76, 177, 255, 1)",
                        fontSize: 22,
                    },
                    b: {
                        fontFamily: 'SourceHanSansCN-Medium',
                        fontWeight: '500',
                        color: "RGBA(197, 69, 130, 1)",
                        fontSize: 30,
                    }
                }
            }
        },
        backgroundColor: '#fff',
        series: [{
            name: '准点率',
            type: 'pie',
            clockWise: true,
            radius: [60, 70],
            center: ['50%', '50%'],
            startAngle: 90,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'RGBA(54, 107, 231, 1)'
                }
            },
            hoverAnimation: false,
            data: [{
                value: value,
                name: '01'
            }, {
                value: 100 - value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: 'none', //未完成的圆环的颜色
                    }
                }
            }

            ]
        }, {
            name: '外框',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: [80, 90],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'RGBA(15, 54, 61, 1)'
                }
            },
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [{
                value: 100,
                name: '02',
            }, {
                value: 0,
                name: 'invisible',
            }

            ]
        },


        ]
    };
}

function PowerChartBackend(value) {
    return {
        backgroundColor: 'rgba(0,0,0,0)', //设置无背景色
        grid: {
            top: '',
            bottom: '',
            containLabel: true
        },
        series: [
            {
                type: "gauge",
                //center: ["50%", "45%"], // 仪表位置
                radius: "70%", //仪表大小
                startAngle: 200, //开始角度
                endAngle: -20, //结束角度
                axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.5, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 1,
                                color: "#E75F25" // 50% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#D9452C" // 40% 处的颜色
                            }], false)], // 100% 处的颜色
                            [0.7, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 1,
                                color: "#FFC539" // 70% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#FE951E" // 66% 处的颜色
                            }, {
                                offset: 0,
                                color: "#E75F25" // 50% 处的颜色
                            }], false)],
                            [0.9, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1,
                                color: "#C7DD6B" // 90% 处的颜色
                            }, {
                                offset: 0.8,
                                color: "#FEEC49" // 86% 处的颜色
                            }, {
                                offset: 0,
                                color: "#FFC539" // 70% 处的颜色
                            }], false)],
                            [1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0.2,
                                color: "#1CAD52" // 92% 处的颜色
                            }, {
                                offset: 0,
                                color: "#C7DD6B" // 90% 处的颜色
                            }], false)]
                        ],
                        width: 10
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                pointer: { //指针样式
                    length: '45%'
                },
                detail: {
                    show: false
                }
            },
            {
                type: "gauge",
                center: ["50%", "50%"], // 默认全局居中
                radius: "100%",
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                    show: true,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [ //表盘颜色
                            [0.6, "#50bda1"],//0-50%处的颜色
                            [0.7, "#ffd868"],//51%-70%处的颜色
                            [0.8, "#ffa41b"],//70%-90%处的颜色
                            [1, "#eb4559"]//90%-100%处的颜色
                        ],
                        width: 30//表盘宽度
                    }
                },
                splitLine: { //分割线样式（及10、20等长线样式）
                    length: 30,
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                axisTick: { //刻度线样式（及短线样式）
                    length: 20
                },
                axisLabel: { //文字样式（及“10”、“20”等文字样式）
                    color: "black",
                    distance: 5 //文字离表盘的距离
                },
                detail: {
                    formatter: "{score|{value}%}",
                    offsetCenter: [0, "60%"],
                    backgroundColor: '#333333',
                    height: 30,
                    rich: {
                        score: {
                            color: "white",
                            fontFamily: "微软雅黑",
                            fontSize: 32
                        }
                    }
                },
                data: [{
                    value: value,
                    label: {
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }]
            }
        ]
    };
}