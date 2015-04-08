Ext.data.JsonP.Chart_SeriesGroup({"tagname":"class","name":"Chart.SeriesGroup","autodetected":{},"files":[{"filename":"seriesgroup.js","href":"seriesgroup.html#Chart-SeriesGroup"}],"private":true,"members":[{"name":"colors","tagname":"property","owner":"Chart.SeriesGroup","id":"property-colors","meta":{}},{"name":"data","tagname":"property","owner":"Chart.SeriesGroup","id":"property-data","meta":{}},{"name":"itemName","tagname":"property","owner":"Chart.SeriesGroup","id":"property-itemName","meta":{"protected":true}},{"name":"legend","tagname":"property","owner":"Chart.SeriesGroup","id":"property-legend","meta":{}},{"name":"series","tagname":"property","owner":"Chart.SeriesGroup","id":"property-series","meta":{}},{"name":"seriesOptions","tagname":"property","owner":"Chart.SeriesGroup","id":"property-seriesOptions","meta":{}},{"name":"stackedData","tagname":"property","owner":"Chart.SeriesGroup","id":"property-stackedData","meta":{"private":true}},{"name":"symbols","tagname":"property","owner":"Chart.SeriesGroup","id":"property-symbols","meta":{}},{"name":"tooltip","tagname":"property","owner":"Chart.SeriesGroup","id":"property-tooltip","meta":{}},{"name":"xAxis","tagname":"property","owner":"Chart.SeriesGroup","id":"property-xAxis","meta":{}},{"name":"xTickCounts","tagname":"property","owner":"Chart.SeriesGroup","id":"property-xTickCounts","meta":{}},{"name":"yAxis","tagname":"property","owner":"Chart.SeriesGroup","id":"property-yAxis","meta":{}},{"name":"yTickCounts","tagname":"property","owner":"Chart.SeriesGroup","id":"property-yTickCounts","meta":{}},{"name":"addSeries","tagname":"method","owner":"Chart.SeriesGroup","id":"method-addSeries","meta":{}},{"name":"changeData","tagname":"method","owner":"Chart.SeriesGroup","id":"method-changeData","meta":{}},{"name":"getSeries","tagname":"method","owner":"Chart.SeriesGroup","id":"method-getSeries","meta":{}},{"name":"getSeriesData","tagname":"method","owner":"Chart.SeriesGroup","id":"method-getSeriesData","meta":{"protected":true}},{"name":"getStackedData","tagname":"method","owner":"Chart.SeriesGroup","id":"method-getStackedData","meta":{"protected":true}},{"name":"getVisibleSeries","tagname":"method","owner":"Chart.SeriesGroup","id":"method-getVisibleSeries","meta":{}},{"name":"hideChild","tagname":"method","owner":"Chart.SeriesGroup","id":"method-hideChild","meta":{}},{"name":"repaint","tagname":"method","owner":"Chart.SeriesGroup","id":"method-repaint","meta":{}},{"name":"showChild","tagname":"method","owner":"Chart.SeriesGroup","id":"method-showChild","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Chart.SeriesGroup","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/seriesgroup.html#Chart-SeriesGroup' target='_blank'>seriesgroup.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>数据序列的容器</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-colors' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-colors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-colors' class='name expandable'>colors</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>存在多个序列时，线的颜色，marker的颜色 ...</div><div class='long'><p>存在多个序列时，线的颜色，marker的颜色</p>\n<p>Defaults to: <code>[&#39;#2f7ed8&#39;, &#39;#0d233a&#39;, &#39;#8bbc21&#39;, &#39;#910000&#39;, &#39;#1aadce&#39;, &#39;#492970&#39;, &#39;#f28f43&#39;, &#39;#77a1e5&#39;, &#39;#c42525&#39;, &#39;#a6c96a&#39;]</code></p></div></div></div><div id='property-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-data' class='name expandable'>data</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'><p>可以设置数据序列共同的数据源</p>\n</div><div class='long'><p>可以设置数据序列共同的数据源</p>\n</div></div></div><div id='property-itemName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-itemName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-itemName' class='name expandable'>itemName</a> : String<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>活动子项的名称，用于组成 itemactived,itemunactived的事件 ...</div><div class='long'><p>活动子项的名称，用于组成 itemactived,itemunactived的事件</p>\n<p>Defaults to: <code>&#39;series&#39;</code></p></div></div></div><div id='property-legend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-legend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-legend' class='name expandable'>legend</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>图例</p>\n</div><div class='long'><p>图例</p>\n</div></div></div><div id='property-series' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-series' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-series' class='name expandable'>series</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'><p>数据图形序列的配置项</p>\n</div><div class='long'><p>数据图形序列的配置项</p>\n</div></div></div><div id='property-seriesOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-seriesOptions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-seriesOptions' class='name expandable'>seriesOptions</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>序列图的统一配置项，不同的序列图有不同的配置项例如：\n\n\nlineCfg : 折线图的配置项\ncolumnCfg : 柱状图的配置项 ...</div><div class='long'><p>序列图的统一配置项，不同的序列图有不同的配置项例如：</p>\n\n<ul>\n<li>lineCfg : 折线图的配置项</li>\n<li>columnCfg : 柱状图的配置项</li>\n</ul>\n\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-stackedData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-stackedData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-stackedData' class='name expandable'>stackedData</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>缓存的层叠数据</p>\n</div><div class='long'><p>缓存的层叠数据</p>\n</div></div></div><div id='property-symbols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-symbols' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-symbols' class='name expandable'>symbols</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>如果使用marker，那么不同图形序列的形状 ...</div><div class='long'><p>如果使用marker，那么不同图形序列的形状</p>\n<p>Defaults to: <code>[&#39;circle&#39;, &#39;diamond&#39;, &#39;square&#39;, &#39;triangle&#39;, &#39;triangle-down&#39;]</code></p></div></div></div><div id='property-tooltip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-tooltip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-tooltip' class='name expandable'>tooltip</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>提示信息的配置项</p>\n</div><div class='long'><p>提示信息的配置项</p>\n</div></div></div><div id='property-xAxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-xAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-xAxis' class='name expandable'>xAxis</a> : <a href=\"#!/api/Chart.Axis\" rel=\"Chart.Axis\" class=\"docClass\">Chart.Axis</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>x 坐标轴</p>\n</div><div class='long'><p>x 坐标轴</p>\n</div></div></div><div id='property-xTickCounts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-xTickCounts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-xTickCounts' class='name expandable'>xTickCounts</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>x轴的坐标轴个数限制 ...</div><div class='long'><p>x轴的坐标轴个数限制</p>\n<p>Defaults to: <code>[5, 10]</code></p></div></div></div><div id='property-yAxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-yAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-yAxis' class='name expandable'>yAxis</a> : Array|<a href=\"#!/api/Chart.Axis\" rel=\"Chart.Axis\" class=\"docClass\">Chart.Axis</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>y 坐标轴</p>\n</div><div class='long'><p>y 坐标轴</p>\n</div></div></div><div id='property-yTickCounts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-property-yTickCounts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-property-yTickCounts' class='name expandable'>yTickCounts</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>y轴的坐标个数限制 ...</div><div class='long'><p>y轴的坐标个数限制</p>\n<p>Defaults to: <code>[3, 5]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addSeries' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-method-addSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-method-addSeries' class='name expandable'>addSeries</a>( <span class='pre'>item</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加数据序列 ...</div><div class='long'><p>添加数据序列</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Chart.Series\" rel=\"Chart.Series\" class=\"docClass\">Chart.Series</a><div class='sub-desc'><p>数据序列对象</p>\n</div></li></ul></div></div></div><div id='method-changeData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-method-changeData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-method-changeData' class='name expandable'>changeData</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>改变数据 ...</div><div class='long'><p>改变数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Array<div class='sub-desc'><p>数据</p>\n</div></li></ul></div></div></div><div id='method-getSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-method-getSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-method-getSeries' class='name expandable'>getSeries</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>获取所有的数据序列 ...</div><div class='long'><p>获取所有的数据序列</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>[description]</p>\n</div></li></ul></div></div></div><div id='method-getSeriesData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-method-getSeriesData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-method-getSeriesData' class='name expandable'>getSeriesData</a>( <span class='pre'>axis, name</span> ) : Array<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取数据序列的数据 ...</div><div class='long'><p>获取数据序列的数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>axis</span> : <a href=\"#!/api/Chart.Axis\" rel=\"Chart.Axis\" class=\"docClass\">Chart.Axis</a><div class='sub-desc'><p>坐标轴</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>坐标轴名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>数据集合</p>\n</div></li></ul></div></div></div><div id='method-getStackedData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-method-getStackedData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-method-getStackedData' class='name expandable'>getStackedData</a>( <span class='pre'>stackType, axis, name</span> ) : Array<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取层叠数据 ...</div><div class='long'><p>获取层叠数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>stackType</span> : String<div class='sub-desc'><p>层叠类型</p>\n</div></li><li><span class='pre'>axis</span> : <a href=\"#!/api/Chart.Axis\" rel=\"Chart.Axis\" class=\"docClass\">Chart.Axis</a><div class='sub-desc'><p>坐标轴</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>坐标轴名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>数据集合</p>\n</div></li></ul></div></div></div><div id='method-getVisibleSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-method-getVisibleSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-method-getVisibleSeries' class='name expandable'>getVisibleSeries</a>( <span class='pre'></span> ) : <a href=\"#!/api/Chart.Series\" rel=\"Chart.Series\" class=\"docClass\">Chart.Series</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>获取显示的数据序列 ...</div><div class='long'><p>获取显示的数据序列</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Chart.Series\" rel=\"Chart.Series\" class=\"docClass\">Chart.Series</a>[]</span><div class='sub-desc'><p>数据序列集合</p>\n</div></li></ul></div></div></div><div id='method-hideChild' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-method-hideChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-method-hideChild' class='name expandable'>hideChild</a>( <span class='pre'>series</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>隐藏series ...</div><div class='long'><p>隐藏series</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>series</span> : <a href=\"#!/api/Chart.Series\" rel=\"Chart.Series\" class=\"docClass\">Chart.Series</a><div class='sub-desc'><p>数据序列对象</p>\n</div></li></ul></div></div></div><div id='method-repaint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-method-repaint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-method-repaint' class='name expandable'>repaint</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>重新绘制数据序列 ...</div><div class='long'><p>重新绘制数据序列</p>\n</div></div></div><div id='method-showChild' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.SeriesGroup'>Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#Chart-SeriesGroup-method-showChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.SeriesGroup-method-showChild' class='name expandable'>showChild</a>( <span class='pre'>series</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示series ...</div><div class='long'><p>显示series</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>series</span> : <a href=\"#!/api/Chart.Series\" rel=\"Chart.Series\" class=\"docClass\">Chart.Series</a><div class='sub-desc'><p>数据序列对象</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});