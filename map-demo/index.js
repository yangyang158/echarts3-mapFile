$(function(){
	var myChart = echarts.init(document.getElementById('map'));
	echarts.registerMap('yuncheng', window.city, {});
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: '{b}<br/>{c} (p / km2)'
		},
		visualMap: {
			min: 500,
			max: 50000,
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
				name: '运城',
				type: 'map',
				mapType: 'yuncheng',
				aspectScale: 0.85,  //地图长度比
				label: {
					normal: {
						show: true,
						textStyle: {
							color: '#fff'// 地区名字的颜色
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							color: '#333'//鼠标移上去 地区名字的颜色
						}
					}
				},
				// 西城的数据
				// data: [
				// 	{name: '德胜门', value: 17000},
				//     {name: '什刹海', value: 1000},
				//     {name: '新街口', value: 5000},
				//     {name: '展览路', value: 20000},
				//     {name: '月坛', value: 25000},
				//     {name: '金融街', value: 30000},
				//     {name: '西长安街', value: 18000},
				//     {name: '广安门外', value: 2300},
				//     {name: '广安门内', value: 20000},
				//     {name: '大栅栏', value: 16000},
				//     {name: '陶然亭', value: 28000}
				// ]
				// 运城的数据
				data: [
					{name: '新绛县', value: 17000},
					{name: '河津市', value: 1000},
					{name: '万荣县', value: 5000},
					{name: '闻喜县', value: 20000},
					{name: '夏县', value: 25000},
					{name: '盐湖区', value: 30000},
					{name: '垣曲县', value: 18000},
					{name: '芮城县', value: 2300},
					{name: '稷山县', value: 20000},
					{name: '临猗县', value: 16000},
				]
			}                              
		]
	};
	myChart.setOption(option);
});