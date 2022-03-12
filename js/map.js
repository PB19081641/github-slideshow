var ec_map = echarts.init(document.getElementById("map"), {
    renderer: "svg",
    ssr: true,
});
window.onresize = function() {
    ec_map.resize();
  };
var ec_option={

	title:{
		text:"map",
	},
	tooltip:{
		tirgger:"item",
		formatter:"省份名 : {b} <br /> 体温异常 : {c} 人",
	},
	visualMap:{
		x:"left",
		y:"bottom",
		splitList:[
		{start:0,end:49},
		{start:50,end:99},
		{start:100,end:149},
		{start:150,end:199},
		{start:200}
		],
	},
	series:[{
		type:"map",
		mapType:"china",
		data:null,
		label:{
			normal:{
				show:true,//显示省份名称
				fontSize:15,
			},
		},
	}]

};
$.ajax({
	type:"get",
	url:"E:/js/area.json",
	async:false,
	success:function(data){
		ec_option.series[0].data=data.data;
	}
});
ec_map.setOption(ec_option);
