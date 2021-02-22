<div class="panel">

    <div class="wrapper-sm b-b b-light">
        
        <form class="form-inline" id="myquery" name="myquery" action="{{url()}}" method="get">

            @if(Auth::user()->role->code != 'c001')
                @include('report/select')
            @endif

            <select class="form-control input-sm" id='category_id' name='category_id' data-toggle="redirect" data-url="{{$query}}">
                @foreach($product_categorys as $k => $v)
                    <option value="{{$v['id']}}" @if($select['query']['category_id'] == $v['id']) selected @endif>{{$v['layer_space']}}{{$v['name']}}</option>
                @endforeach
            </select>
            <button type="submit" class="btn btn-default btn-sm"><i class="fa fa-search"></i> 筛选</button>
        </form>
        
    </div>

<script src="{{$asset_url}}/vendor/highcharts/highcharts.min.js" type="text/javascript"></script>
<script type="text/javascript">
var data = {{$json}};
$(function () {
    $('#container').highcharts({
        title: {
            text: '历史年度销售分析',
            x: -20 //center
        },
        subtitle: {
            text: 'Historical Annual Sales Analysis',
            x: -20
        },
        xAxis: {
            categories: data.categories
        },
        yAxis: {
            title: {
                text: '销售汇总'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '￥'
        },
        legend: {
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'middle',
            //borderWidth: 0,
            useHTML:true,
            labelFormatter: function() {
              return this.name + '<br/><span style="font-size:10px;color:#666666;">合计: '+ data.total[this.name] +'￥</span>';
              //return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:16px">' + this.name +'</span><br/><span style="font-size:10px; color:#ababaa">(合计: 12345)</span>';
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                //enableMouseTracking: false
            }
        },
        total: data.total,
        series: data.series
    });
});
</script>

    <table class="table">
    <tr>
    	<td>
    		<div id="container" style="height:320px"></div>
    	</td>
    </tr>
    </table>

</div>

@if(Auth::user()->role->code != 'c001')

<div class="panel">
    <table class="table">
        <tr height="24">
            <th align="center">本年促销计算费比(占比)</th>
            <th align="center">消费促销(金额)</th>
            <th align="center">渠道促销(金额)</th>
            <th align="center">经营促销(金额)</th>
            <th align="center">本年批复促销已兑现金额</th>
         </tr>
             
      	<tr height="24">
      		  <td align="center">{{$assess}}</td>
              <td align="center">{{number_format($promotion['cat'][1],2)}}</td>
              <td align="center">{{number_format($promotion['cat'][2],2)}}</td>
              <td align="center">{{number_format($promotion['cat'][3],2)}}</td>
              <td align="center">{{number_format($promotion_honor, 2)}}</td>
           </tr>
    </table>
</div>

<!--
<div class="panel">
    <table class="table">
        <tr height="24">
            @foreach($product_categorys as $category)
                @if($category['parent_id'] == 0)
                    <th align="center">{{$category['name']}}</th>
                @endif
            @endforeach
        </tr>
      	<tr height="24">
            @foreach($product_categorys as $category)
                @if($category['parent_id']==0)
                    <td align="center">{{$cat_salesdata_ret[$category['id']]}}</td>
                @endif
            @endforeach
      </tr>
    </table>
</div>
-->

@endif