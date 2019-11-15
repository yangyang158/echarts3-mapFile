$(function(){
	var myChart = echarts.init(document.getElementById('map'));
	echarts.registerMap('shanxi', window.city, {});
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: '{b}<br/>{c} (p / km2)'
		},
		visualMap: {
			min: 500,
			max: 60000,
			text:['High','Low'],
			left: 'right',
			realtime: false,
			calculable: true,
			inRange: {
				color: ['#313695','#4575b4', '#74add1','#abd9e9','#e0f3f8']
			}
		},
		series: [
			{
				name: '山西省',
				type: 'map',
				roam: true,
				mapType: 'shanxi',
				aspectScale: 0.85,  //地图长度比
				label: {
					normal: {
						show: true,
						textStyle: {
							color: '#fff'// 地区名字的颜色, 地图上显示名称的位置为其省会的坐标位置
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							color: '#333'//鼠标移上去 地区名字的颜色
						}
					}
				},
				data: [
					{name: '运城市', value: 17000},
					{name: '朔州市', value: 1000},
					{name: '大同市', value: 5000},
					{name: '阳泉市', value: 20000},
					{name: '吕梁市', value: 25000},
					{name: '晋中市', value: 30000},
					{name: '太原市', value: 18000},
					{name: '长治市', value: 2300},
					{name: '晋城市', value: 20000},
					{name: '临汾市', value: 16000},
					{name: '忻州市', value: 46000},
				]
			}                              
		]
	};
	myChart.setOption(option);
});