Ext.data.JsonP.Chart_Tooltip({"tagname":"class","name":"Chart.Tooltip","autodetected":{},"files":[{"filename":"tooltip.js","href":"tooltip.html#Chart-Tooltip"}],"extends":"Chart.PlotItem","members":[{"name":"crosshairs","tagname":"property","owner":"Chart.Tooltip","id":"property-crosshairs","meta":{}},{"name":"duration","tagname":"property","owner":"Chart.Tooltip","id":"property-duration","meta":{}},{"name":"groupName","tagname":"property","owner":"Chart.PlotItem","id":"property-groupName","meta":{"protected":true}},{"name":"isGroup","tagname":"property","owner":"Chart.Canvas.Group","id":"property-isGroup","meta":{}},{"name":"itemName","tagname":"property","owner":"Chart.PlotItem","id":"property-itemName","meta":{"protected":true}},{"name":"name","tagname":"property","owner":"Chart.Tooltip","id":"property-name","meta":{}},{"name":"offset","tagname":"property","owner":"Chart.Tooltip","id":"property-offset","meta":{}},{"name":"plotRange","tagname":"property","owner":"Chart.Tooltip","id":"property-plotRange","meta":{}},{"name":"pointRenderer","tagname":"property","owner":"Chart.Tooltip","id":"property-pointRenderer","meta":{}},{"name":"shared","tagname":"property","owner":"Chart.Tooltip","id":"property-shared","meta":{}},{"name":"title","tagname":"property","owner":"Chart.Tooltip","id":"property-title","meta":{}},{"name":"value","tagname":"property","owner":"Chart.Tooltip","id":"property-value","meta":{}},{"name":"valueSuffix","tagname":"property","owner":"Chart.Tooltip","id":"property-valueSuffix","meta":{}},{"name":"x","tagname":"property","owner":"Chart.Canvas.Group","id":"property-x","meta":{}},{"name":"y","tagname":"property","owner":"Chart.Canvas.Group","id":"property-y","meta":{}},{"name":"addItem","tagname":"method","owner":"Chart.Tooltip","id":"method-addItem","meta":{"private":true}},{"name":"animate","tagname":"method","owner":"Chart.Canvas.Group","id":"method-animate","meta":{}},{"name":"clearItems","tagname":"method","owner":"Chart.Tooltip","id":"method-clearItems","meta":{}},{"name":"containsElement","tagname":"method","owner":"Chart.Canvas.Group","id":"method-containsElement","meta":{}},{"name":"fireUp","tagname":"method","owner":"Chart.PlotItem","id":"method-fireUp","meta":{}},{"name":"fireUpGroup","tagname":"method","owner":"Chart.PlotItem","id":"method-fireUpGroup","meta":{"protected":true}},{"name":"hide","tagname":"method","owner":"Chart.Tooltip","id":"method-hide","meta":{}},{"name":"move","tagname":"method","owner":"Chart.Canvas.Group","id":"method-move","meta":{}},{"name":"setColor","tagname":"method","owner":"Chart.Tooltip","id":"method-setColor","meta":{}},{"name":"setItems","tagname":"method","owner":"Chart.Tooltip","id":"method-setItems","meta":{}},{"name":"setPosition","tagname":"method","owner":"Chart.Tooltip","id":"method-setPosition","meta":{}},{"name":"setTitle","tagname":"method","owner":"Chart.Tooltip","id":"method-setTitle","meta":{}},{"name":"show","tagname":"method","owner":"Chart.Tooltip","id":"method-show","meta":{}},{"name":"translate","tagname":"method","owner":"Chart.Canvas.Group","id":"method-translate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Chart.Tooltip","component":false,"superclasses":["Chart.Canvas.Group","Chart.PlotItem"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='docClass'>Chart.Canvas.Group</a><div class='subclass '><a href='#!/api/Chart.PlotItem' rel='Chart.PlotItem' class='docClass'>Chart.PlotItem</a><div class='subclass '><strong>Chart.Tooltip</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/tooltip.html#Chart-Tooltip' target='_blank'>tooltip.js</a></div></pre><div class='doc-contents'><p>提示信息</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-crosshairs' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-crosshairs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-crosshairs' class='name expandable'>crosshairs</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否贯穿整个坐标轴 ...</div><div class='long'><p>是否贯穿整个坐标轴</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-duration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-duration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-duration' class='name expandable'>duration</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>移动的动画时间 ...</div><div class='long'><p>移动的动画时间</p>\n<p>Defaults to: <code>100</code></p></div></div></div><div id='property-groupName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.PlotItem' rel='Chart.PlotItem' class='defined-in docClass'>Chart.PlotItem</a><br/><a href='source/plotitem.html#Chart-PlotItem-property-groupName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.PlotItem-property-groupName' class='name expandable'>groupName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>所属分组的名称,用于事件中标示父元素 ...</div><div class='long'><p>所属分组的名称,用于事件中标示父元素</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='property-isGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-property-isGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-property-isGroup' class='name expandable'>isGroup</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否Group ...</div><div class='long'><p>是否Group</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-itemName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.PlotItem' rel='Chart.PlotItem' class='defined-in docClass'>Chart.PlotItem</a><br/><a href='source/plotitem.html#Chart-PlotItem-property-itemName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.PlotItem-property-itemName' class='name expandable'>itemName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>活动子项的名称，用于组成 itemactived,itemunactived的事件 ...</div><div class='long'><p>活动子项的名称，用于组成 itemactived,itemunactived的事件</p>\n<p>Defaults to: <code>&#39;item&#39;</code></p></div></div></div><div id='property-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-name' class='name expandable'>name</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>数据序列名称的配置信息 ...</div><div class='long'><p>数据序列名称的配置信息</p>\n<p>Defaults to: <code>{&#39;font-size&#39;: &#39;12&#39;, &#39;text-anchor&#39;: &#39;start&#39;}</code></p></div></div></div><div id='property-offset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-offset' class='name expandable'>offset</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>x轴上，移动到位置的偏移量 ...</div><div class='long'><p>x轴上，移动到位置的偏移量</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-plotRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-plotRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-plotRange' class='name expandable'>plotRange</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>视图范围</p>\n</div><div class='long'><p>视图范围</p>\n</div></div></div><div id='property-pointRenderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-pointRenderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-pointRenderer' class='name expandable'>pointRenderer</a> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>用于格式化数据序列时使用</p>\n</div><div class='long'><p>用于格式化数据序列时使用</p>\n</div></div></div><div id='property-shared' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-shared' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-shared' class='name expandable'>shared</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>多个数据序列是否共同用一个tooltip ...</div><div class='long'><p>多个数据序列是否共同用一个tooltip</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-title' class='name expandable'>title</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>标题的配置信息 ...</div><div class='long'><p>标题的配置信息</p>\n<p>Defaults to: <code>{&#39;font-size&#39;: &#39;10&#39;, &#39;text-anchor&#39;: &#39;start&#39;, x: 5, y: 15}</code></p></div></div></div><div id='property-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-value' class='name expandable'>value</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>当前值的文本配置信息 ...</div><div class='long'><p>当前值的文本配置信息</p>\n<p>Defaults to: <code>{&#39;font-size&#39;: &#39;12&#39;, &#39;font-weight&#39;: &#39;bold&#39;, &#39;text-anchor&#39;: &#39;start&#39;}</code></p></div></div></div><div id='property-valueSuffix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-property-valueSuffix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-property-valueSuffix' class='name expandable'>valueSuffix</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>跟在value后面的后缀 ...</div><div class='long'><p>跟在value后面的后缀</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='property-x' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-property-x' class='name expandable'>x</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>沿x轴的偏移量 ...</div><div class='long'><p>沿x轴的偏移量</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-y' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-property-y' class='name expandable'>y</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>沿y轴的偏移量 ...</div><div class='long'><p>沿y轴的偏移量</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addItem' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-method-addItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-method-addItem' class='name expandable'>addItem</a>( <span class='pre'>item, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>添加一条信息 ...</div><div class='long'><p>添加一条信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-animate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-animate' class='name expandable'>animate</a>( <span class='pre'>params, ms, easing, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>执行动画,对于分组来说，animate仅支持平移动画\n\n\n  group.animate({\n    x : 100,\n    y : 100\n  },400); ...</div><div class='long'><p>执行动画,对于分组来说，animate仅支持平移动画</p>\n\n<p><code>\n  group.animate({\n    x : 100,\n    y : 100\n  },400);\n</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>动画的参数</p>\n</div></li><li><span class='pre'>ms</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>毫秒数</p>\n</div></li><li><span class='pre'>easing</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>路径函数</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-clearItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-method-clearItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-method-clearItems' class='name expandable'>clearItems</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>清除所有的信息 ...</div><div class='long'><p>清除所有的信息</p>\n</div></div></div><div id='method-containsElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-method-containsElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-containsElement' class='name expandable'>containsElement</a>( <span class='pre'>element</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否包含指定的DOM ...</div><div class='long'><p>是否包含指定的DOM</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>dom元素</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否包含</p>\n</div></li></ul></div></div></div><div id='method-fireUp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.PlotItem' rel='Chart.PlotItem' class='defined-in docClass'>Chart.PlotItem</a><br/><a href='source/plotitem.html#Chart-PlotItem-method-fireUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.PlotItem-method-fireUp' class='name expandable'>fireUp</a>( <span class='pre'>name, ev</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>在顶层图表控件上触发事件 ...</div><div class='long'><p>在顶层图表控件上触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件名称</p>\n</div></li><li><span class='pre'>ev</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件对象</p>\n</div></li></ul></div></div></div><div id='method-fireUpGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.PlotItem' rel='Chart.PlotItem' class='defined-in docClass'>Chart.PlotItem</a><br/><a href='source/plotitem.html#Chart-PlotItem-method-fireUpGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.PlotItem-method-fireUpGroup' class='name expandable'>fireUpGroup</a>( <span class='pre'>name, item, obj</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>在分组上触发事件 ...</div><div class='long'><p>在分组上触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件名称</p>\n</div></li><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>触发事件的子项</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件对象</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>隐藏 ...</div><div class='long'><p>隐藏</p>\n</div></div></div><div id='method-move' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-method-move' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-move' class='name expandable'>move</a>( <span class='pre'>x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移动的到位置 ...</div><div class='long'><p>移动的到位置</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>移动到x</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>移动到y</p>\n</div></li></ul></div></div></div><div id='method-setColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-method-setColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-method-setColor' class='name expandable'>setColor</a>( <span class='pre'>color</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置颜色 ...</div><div class='long'><p>设置颜色</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>color</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>颜色</p>\n</div></li></ul></div></div></div><div id='method-setItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-method-setItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-method-setItems' class='name expandable'>setItems</a>( <span class='pre'>items</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置显示的信息项\n\n\nname : 序列的标题\nvalue : 序列的值\ncolor : 序列的颜色 ...</div><div class='long'><p>设置显示的信息项</p>\n\n<ul>\n<li>name : 序列的标题</li>\n<li>value : 序列的值</li>\n<li>color : 序列的颜色</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>信息列表</p>\n</div></li></ul></div></div></div><div id='method-setPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-method-setPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-method-setPosition' class='name expandable'>setPosition</a>( <span class='pre'>x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>将tooltip的右下角移动到指定的位置，假设这个点已经在坐标轴内\n\n\n默认移动到右下角\n如果左边到了坐标轴外，则将tooltip向右移动，按照右下角对齐\n如果右边到了坐标轴外，则左移,将右下边放到坐标轴边界上\n下面，上面出了坐标轴，...</div><div class='long'><p>将tooltip的右下角移动到指定的位置，假设这个点已经在坐标轴内</p>\n\n<ul>\n<li>默认移动到右下角</li>\n<li>如果左边到了坐标轴外，则将tooltip向右移动，按照右下角对齐</li>\n<li>如果右边到了坐标轴外，则左移,将右下边放到坐标轴边界上</li>\n<li>下面，上面出了坐标轴，做类似处理</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>x坐标</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>y坐标</p>\n</div></li></ul></div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-method-setTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>title</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置title ...</div><div class='long'><p>设置title</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>标题</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Tooltip'>Chart.Tooltip</span><br/><a href='source/tooltip.html#Chart-Tooltip-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Tooltip-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示 ...</div><div class='long'><p>显示</p>\n</div></div></div><div id='method-translate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-method-translate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-translate' class='name expandable'>translate</a>( <span class='pre'>dx, dy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移动 ...</div><div class='long'><p>移动</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dx</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>沿x轴平移的距离</p>\n</div></li><li><span class='pre'>dy</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>沿y轴平移的距离</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});