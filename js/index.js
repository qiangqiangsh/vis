// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line2 .chart"));

  // (1)准备数据
  var data = {
    people: [28441, 15773, 11915, 8025, 5689, 4420, 4533, 8432, 21158, 29730, 33907, 38671, 63729, 71798, 70171, 61418, 56898, 58053, 85305, 96550, 81454, 63570, 47178, 33182]
  };

  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
      name: "上网人数",
      type: "line",
      stack: "总量",
      // 是否让线条圆滑显示
      smooth: true,
      data: data.people
    }]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();




//柱状图1模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [{
      type: "category",
      data: ["<18",
        "18-27",
        "28-37",
        "38-47",
        "48-57",
        "58-67",
        "68-77",
        "78-87",
        "88-97"


      ],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        }
      },
      axisLine: {
        show: false
      }
    }],
    yAxis: [{
      type: "value",
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        }
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
          // width: 1,
          // type: "solid"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
      name: "人数",
      type: "bar",
      barWidth: "35%",
      data: [5,
        436232,
        349062,
        157745,
        46438,
        7739,
        2241,
        359,
        107
      ],
      itemStyle: {
        barBorderRadius: 5
      }
    }]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [{
    year: "2019",
    data: [5,
      436232,
      349062,
      157745,
      46438,
      7739,
      2241,
      359,
      107
    ]
  }];

  $(".bar h2 ").on("click", "a", function () {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();



// 饼形图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["外来人口"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [{
      name: "年龄分布",
      type: "pie",
      center: ["50%", "42%"],
      radius: ["40%", "60%"],
      color: [
        "#06b4ab",
        "#06f0ab",
        "#0682ab",
        "#0696ab",
        "#06a0ab",

        "#06c8ab",
        "#06dcab"

      ],
      label: {
        show: true
      },
      labelLine: {
        show: true
      },
      data: [{
          value: 1,
          name: "外来人口"
        },

      ]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var data = [
    22.59,
    24.17,
    4.51,
    11.29, 37.43


  ];
  var titlename = ["510",
    "511",
    "512",
    "513",
    "其他地区"
  ];
  var valdata = ["22万",
    "24万",
    "4.5万",
    "11万", "37万"

  ];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      right: "10%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",

          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [{
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();



//柱状图-上网时长
(function () {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [{
      type: "category",
      data: [
        "0~3h",
        "4~7h",
        "8~11h",
        "12h以上"
      ],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签 相关样式
      axisLabel: {
        color: "rgba(255,255,255,.6) ",
        fontSize: "10"
      },
      // 不显示x坐标轴的样式
      axisLine: {
        show: false
      }
    }],
    yAxis: [{
      type: "value",
      // 修改刻度标签 相关样式
      axisLabel: {
        color: "rgba(255,255,255,.6) ",
        fontSize: 12
      },
      // y轴的线条改为了 2像素
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
      name: "人数统计",
      type: "bar",
      barWidth: "35%",
      data: [593117, 292301, 80258, 34324],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


//未成年人上网高峰时段
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line3 .chart"));
  var hours = ['0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11',
    '12', '13', '14', '15', '16', '17',
    '18', '19', '20', '21', '22', '23'
  ];
  var days = ['2016/11/06', '2016/11/07', '2016/11/08', '2016/11/10', '2016/11/26', ];

  var data = [
    [0, 22, 5],
    [0, 23, 5],
    [0, 24, 5],
    [1, 1, 7],
    [1, 2, 7],
    [1, 3, 7],
    [1, 10, 7],
    [1, 11, 7],
    [1, 12, 7],
    [1, 13, 7],
    [1, 14, 7],
    [2, 18, 7],
    [2, 19, 7],
    [3, 0, 7],
    [3, 1, 7],
    [3, 2, 7],
    [3, 3, 7],
    [4, 9, 7],
    [4, 10, 7],
    [4, 11, 7],
    [4, 12, 7],
    [4, 13, 7]
  ];

  option = {
    legend: {
      data: ['上网时段'],
      left: 'right',
      textStyle: {
        color: "rgba(255,255,255,.6)"
      }
    },
    polar: {},
    tooltip: {
      formatter: function (params) {
        return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
      }
    },
    angleAxis: {
      type: 'category',
      data: hours,
      axisLabel: {
        color: "rgba(255,255,255,.6)"
      },
      boundaryGap: false,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#999',
          type: 'dashed'
        }
      },
      axisLine: {
        show: false
      }
    },
    radiusAxis: {
      type: 'category',
      data: days,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        color: "rgba(255,255,255,.6)",
        rotate: 45
      }
    },
    series: [{
      name: '上网时段',
      type: 'scatter',
      coordinateSystem: 'polar',
      symbolSize: function (val) {
        return val[2] * 2;
      },
      data: data,
      animationDelay: function (idx) {
        return idx * 5;
      }
    }]
  };
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

