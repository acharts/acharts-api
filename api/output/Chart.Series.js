Ext.data.JsonP.Chart_Series({"tagname":"class","name":"Chart.Series","autodetected":{},"files":[{"filename":"base.js","href":"base2.html#Chart-Series"}],"members":[{"name":"animate","tagname":"property","owner":"Chart.Series","id":"property-animate","meta":{}},{"name":"autoPaint","tagname":"property","owner":"Chart.Series","id":"property-autoPaint","meta":{}},{"name":"changeDuration","tagname":"property","owner":"Chart.Series","id":"property-changeDuration","meta":{}},{"name":"data","tagname":"property","owner":"Chart.Series","id":"property-data","meta":{}},{"name":"duration","tagname":"property","owner":"Chart.Series","id":"property-duration","meta":{}},{"name":"enableMouseTracking","tagname":"property","owner":"Chart.Series","id":"property-enableMouseTracking","meta":{}},{"name":"groupName","tagname":"property","owner":"Chart.Series","id":"property-groupName","meta":{"protected":true}},{"name":"itemName","tagname":"property","owner":"Chart.Series","id":"property-itemName","meta":{"protected":true}},{"name":"labels","tagname":"property","owner":"Chart.Series","id":"property-labels","meta":{}},{"name":"markers","tagname":"property","owner":"Chart.Series","id":"property-markers","meta":{}},{"name":"stickyTracking","tagname":"property","owner":"Chart.Series","id":"property-stickyTracking","meta":{}},{"name":"xField","tagname":"property","owner":"Chart.Series","id":"property-xField","meta":{}},{"name":"yField","tagname":"property","owner":"Chart.Series","id":"property-yField","meta":{}},{"name":"_getPoints","tagname":"method","owner":"Chart.Series","id":"method-_getPoints","meta":{"private":true}},{"name":"addMarker","tagname":"method","owner":"Chart.Series","id":"method-addMarker","meta":{"protected":true}},{"name":"addPoint","tagname":"method","owner":"Chart.Series","id":"method-addPoint","meta":{}},{"name":"changeData","tagname":"method","owner":"Chart.Series","id":"method-changeData","meta":{}},{"name":"changeShapes","tagname":"method","owner":"Chart.Series","id":"method-changeShapes","meta":{"protected":true}},{"name":"draw","tagname":"method","owner":"Chart.Series","id":"method-draw","meta":{"protected":true}},{"name":"getData","tagname":"method","owner":"Chart.Series","id":"method-getData","meta":{}},{"name":"getPointByIndex","tagname":"method","owner":"Chart.Series","id":"method-getPointByIndex","meta":{"protected":true}},{"name":"getPointByObject","tagname":"method","owner":"Chart.Series","id":"method-getPointByObject","meta":{"protected":true}},{"name":"getPointByValue","tagname":"method","owner":"Chart.Series","id":"method-getPointByValue","meta":{"protected":true}},{"name":"getPoints","tagname":"method","owner":"Chart.Series","id":"method-getPoints","meta":{}},{"name":"getTipItem","tagname":"method","owner":"Chart.Series","id":"method-getTipItem","meta":{}},{"name":"getTrackingInfo","tagname":"method","owner":"Chart.Series","id":"method-getTrackingInfo","meta":{}},{"name":"onMouseOut","tagname":"method","owner":"Chart.Series","id":"method-onMouseOut","meta":{"protected":true}},{"name":"onMouseOver","tagname":"method","owner":"Chart.Series","id":"method-onMouseOver","meta":{"protected":true}},{"name":"onStickyTracking","tagname":"method","owner":"Chart.Series","id":"method-onStickyTracking","meta":{}},{"name":"paint","tagname":"method","owner":"Chart.Series","id":"method-paint","meta":{}},{"name":"processColor","tagname":"method","owner":"Chart.Series","id":"method-processColor","meta":{"protected":true}},{"name":"processPoint","tagname":"method","owner":"Chart.Series","id":"method-processPoint","meta":{"protected":true}},{"name":"repaint","tagname":"method","owner":"Chart.Series","id":"method-repaint","meta":{}},{"name":"setActiveStatus","tagname":"method","owner":"Chart.Series","id":"method-setActiveStatus","meta":{"protected":true}},{"name":"shiftPoint","tagname":"method","owner":"Chart.Series","id":"method-shiftPoint","meta":{"protected":true}},{"name":"snapEqual","tagname":"method","owner":"Chart.Series","id":"method-snapEqual","meta":{"protected":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Chart.Series","component":false,"superclasses":[],"subclasses":["Chart.Series.Cartesian","Chart.Series.Pie"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Chart.Series.Cartesian' rel='Chart.Series.Cartesian' class='docClass'>Chart.Series.Cartesian</a></div><div class='dependency'><a href='#!/api/Chart.Series.Pie' rel='Chart.Series.Pie' class='docClass'>Chart.Series.Pie</a></div><h4>Files</h4><div class='dependency'><a href='source/base2.html#Chart-Series' target='_blank'>base.js</a></div></pre><div class='doc-contents'><p>数据序列的基类，是一个抽象类，不能直接实例化</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-animate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-animate' class='name expandable'>animate</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>创建序列时是否触发动画 ...</div><div class='long'><p>创建序列时是否触发动画</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-autoPaint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-autoPaint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-autoPaint' class='name expandable'>autoPaint</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>渲染时就绘制图形 ...</div><div class='long'><p>渲染时就绘制图形</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-changeDuration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-changeDuration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-changeDuration' class='name expandable'>changeDuration</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>发生改变的动画时间 ...</div><div class='long'><p>发生改变的动画时间</p>\n<p>Defaults to: <code>400</code></p></div></div></div><div id='property-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-data' class='name expandable'>data</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>显示的数据 ...</div><div class='long'><p>显示的数据</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-duration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-duration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-duration' class='name expandable'>duration</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>生成时动画的时间间隔 ...</div><div class='long'><p>生成时动画的时间间隔</p>\n<p>Defaults to: <code>1000</code></p></div></div></div><div id='property-enableMouseTracking' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-enableMouseTracking' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-enableMouseTracking' class='name expandable'>enableMouseTracking</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>鼠标移动到数据序列图中是否触发事件 ...</div><div class='long'><p>鼠标移动到数据序列图中是否触发事件</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-groupName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-groupName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-groupName' class='name expandable'>groupName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>所属分组的名称,用于事件中标示父元素 ...</div><div class='long'><p>所属分组的名称,用于事件中标示父元素</p>\n<p>Defaults to: <code>&#39;series&#39;</code></p></div></div></div><div id='property-itemName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-itemName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-itemName' class='name expandable'>itemName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>活动子项的名称，用于组成 itemactived,itemunactived的事件 ...</div><div class='long'><p>活动子项的名称，用于组成 itemactived,itemunactived的事件</p>\n<p>Defaults to: <code>&#39;seriesItem&#39;</code></p></div></div></div><div id='property-labels' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-labels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-labels' class='name expandable'>labels</a> : <a href=\"#!/api/Chart.Labels\" rel=\"Chart.Labels\" class=\"docClass\">Chart.Labels</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>显示对应点的文本的配置项</p>\n</div><div class='long'><p>显示对应点的文本的配置项</p>\n</div></div></div><div id='property-markers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-markers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-markers' class='name expandable'>markers</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>标志数据序列上的点的配置</p>\n\n<ul>\n<li>type 默认类型是path,可以是任意基本图形</li>\n</ul>\n\n</div><div class='long'><p>标志数据序列上的点的配置</p>\n\n<ul>\n<li>type 默认类型是path,可以是任意基本图形</li>\n</ul>\n\n</div></div></div><div id='property-stickyTracking' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-stickyTracking' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-stickyTracking' class='name expandable'>stickyTracking</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否随着鼠标在画板上移动触发相应的事件\n\n\ntrue ，则鼠标从序列图中移出时不会触发移出的事件，当鼠标在画板上移动时序列图会做出对应的动作 ...</div><div class='long'><p>是否随着鼠标在画板上移动触发相应的事件</p>\n\n<ul>\n<li>true ，则鼠标从序列图中移出时不会触发移出的事件，当鼠标在画板上移动时序列图会做出对应的动作</li>\n</ul>\n\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-xField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-xField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-xField' class='name expandable'>xField</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>用于定位数据的字段，通常是x轴上的数据，但是也可以用于饼图之类不需要x轴的数据序列 ...</div><div class='long'><p>用于定位数据的字段，通常是x轴上的数据，但是也可以用于饼图之类不需要x轴的数据序列</p>\n<p>Defaults to: <code>&#39;x&#39;</code></p></div></div></div><div id='property-yField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-property-yField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-property-yField' class='name expandable'>yField</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>标示数据的值,通常用于y轴上的数据，但是也可以用于饼图、雷达图之类 ...</div><div class='long'><p>标示数据的值,通常用于y轴上的数据，但是也可以用于饼图、雷达图之类</p>\n<p>Defaults to: <code>&#39;y&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_getPoints' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-_getPoints' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-_getPoints' class='name expandable'>_getPoints</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>获取点 ...</div><div class='long'><p>获取点</p>\n</div></div></div><div id='method-addMarker' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-addMarker' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-addMarker' class='name expandable'>addMarker</a>( <span class='pre'>offset</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加marker配置项 ...</div><div class='long'><p>添加marker配置项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-addPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-addPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-addPoint' class='name expandable'>addPoint</a>( <span class='pre'>point, shift, redraw</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加数据 ...</div><div class='long'><p>添加数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>point</span> : *<div class='sub-desc'><p>数据</p>\n</div></li><li><span class='pre'>shift</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否删除最前面的数据</p>\n</div></li><li><span class='pre'>redraw</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否重绘图表</p>\n</div></li></ul></div></div></div><div id='method-changeData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-changeData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-changeData' class='name expandable'>changeData</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>更改数据 ...</div><div class='long'><p>更改数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数据</p>\n</div></li></ul></div></div></div><div id='method-changeShapes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-changeShapes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-changeShapes' class='name expandable'>changeShapes</a>( <span class='pre'>points</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>序列变化时改变内部图形 ...</div><div class='long'><p>序列变化时改变内部图形</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>points</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-draw' class='name expandable'>draw</a>( <span class='pre'>points</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>画对应的图形 ...</div><div class='long'><p>画对应的图形</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>points</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-getData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-getData' class='name expandable'>getData</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取对应坐标轴上的数据 ...</div><div class='long'><p>获取对应坐标轴上的数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPointByIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-getPointByIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-getPointByIndex' class='name expandable'>getPointByIndex</a>( <span class='pre'>item, index</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>根据索引获取值 ...</div><div class='long'><p>根据索引获取值</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>点的信息</p>\n</div></li></ul></div></div></div><div id='method-getPointByObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-getPointByObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-getPointByObject' class='name expandable'>getPointByObject</a>( <span class='pre'>item</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>根据对象获取值 ...</div><div class='long'><p>根据对象获取值</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>点的信息</p>\n</div></li></ul></div></div></div><div id='method-getPointByValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-getPointByValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-getPointByValue' class='name expandable'>getPointByValue</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>根据指定的值获取点的信息 ...</div><div class='long'><p>根据指定的值获取点的信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>在基础轴上的值，一般是x轴</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>点的信息</p>\n</div></li></ul></div></div></div><div id='method-getPoints' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-getPoints' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-getPoints' class='name expandable'>getPoints</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取点的集合用于显示Marker和label ...</div><div class='long'><p>获取点的集合用于显示Marker和label</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>点的集合</p>\n</div></li></ul></div></div></div><div id='method-getTipItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-getTipItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-getTipItem' class='name expandable'>getTipItem</a>( <span class='pre'>point</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>获取提示信息 ...</div><div class='long'><p>获取提示信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>point</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>返回显示在上面的文本</p>\n</div></li></ul></div></div></div><div id='method-getTrackingInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-getTrackingInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-getTrackingInfo' class='name expandable'>getTrackingInfo</a>( <span class='pre'>point</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>获取鼠标移动与该series的焦点 ...</div><div class='long'><p>获取鼠标移动与该series的焦点</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>point</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-onMouseOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-onMouseOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-onMouseOut' class='name expandable'>onMouseOut</a>( <span class='pre'>ev</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>鼠标移出 ...</div><div class='long'><p>鼠标移出</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-onMouseOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-onMouseOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-onMouseOver' class='name expandable'>onMouseOver</a>( <span class='pre'>ev</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>鼠标进入事件 ...</div><div class='long'><p>鼠标进入事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-onStickyTracking' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-onStickyTracking' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-onStickyTracking' class='name expandable'>onStickyTracking</a>( <span class='pre'>ev</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>鼠标在画布上移动 ...</div><div class='long'><p>鼠标在画布上移动</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-paint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-paint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-paint' class='name expandable'>paint</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>绘制数据序列 ...</div><div class='long'><p>绘制数据序列</p>\n</div></div></div><div id='method-processColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-processColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-processColor' class='name expandable'>processColor</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>处理颜色 ...</div><div class='long'><p>处理颜色</p>\n</div></div></div><div id='method-processPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-processPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-processPoint' class='name expandable'>processPoint</a>( <span class='pre'>point, index</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>处理节点，并且添加附加信息 ...</div><div class='long'><p>处理节点，并且添加附加信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>point</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-repaint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-repaint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-repaint' class='name expandable'>repaint</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>重绘 ...</div><div class='long'><p>重绘</p>\n</div></div></div><div id='method-setActiveStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-setActiveStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-setActiveStatus' class='name expandable'>setActiveStatus</a>( <span class='pre'>actived</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>设置图形的激活状态 ...</div><div class='long'><p>设置图形的激活状态</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>actived</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否激活</p>\n</div></li></ul></div></div></div><div id='method-shiftPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-shiftPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-shiftPoint' class='name expandable'>shiftPoint</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>删除第一个节点的操作 ...</div><div class='long'><p>删除第一个节点的操作</p>\n</div></div></div><div id='method-snapEqual' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series'>Chart.Series</span><br/><a href='source/base2.html#Chart-Series-method-snapEqual' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series-method-snapEqual' class='name expandable'>snapEqual</a>( <span class='pre'>value1, value2</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>判断是否近似相等 ...</div><div class='long'><p>判断是否近似相等</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value1</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>value2</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});