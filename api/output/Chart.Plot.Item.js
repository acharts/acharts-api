Ext.data.JsonP.Chart_Plot_Item({"tagname":"class","name":"Chart.Plot.Item","autodetected":{},"files":[{"filename":"plotitem.js","href":"plotitem.html#Chart-Plot-Item"}],"extends":"Chart.Canvas.Group","members":[{"name":"events","tagname":"property","owner":"Chart.Plot.Item","id":"property-events","meta":{}},{"name":"groupName","tagname":"property","owner":"Chart.Plot.Item","id":"property-groupName","meta":{"protected":true}},{"name":"isGroup","tagname":"property","owner":"Chart.Canvas.Group","id":"property-isGroup","meta":{}},{"name":"itemName","tagname":"property","owner":"Chart.Plot.Item","id":"property-itemName","meta":{"protected":true}},{"name":"x","tagname":"property","owner":"Chart.Canvas.Group","id":"property-x","meta":{}},{"name":"y","tagname":"property","owner":"Chart.Canvas.Group","id":"property-y","meta":{}},{"name":"animate","tagname":"method","owner":"Chart.Canvas.Group","id":"method-animate","meta":{}},{"name":"containsElement","tagname":"method","owner":"Chart.Canvas.Group","id":"method-containsElement","meta":{}},{"name":"fireUp","tagname":"method","owner":"Chart.Plot.Item","id":"method-fireUp","meta":{}},{"name":"fireUpGroup","tagname":"method","owner":"Chart.Plot.Item","id":"method-fireUpGroup","meta":{"protected":true}},{"name":"getVisibleChildren","tagname":"method","owner":"Chart.Plot.Item","id":"method-getVisibleChildren","meta":{}},{"name":"hideChild","tagname":"method","owner":"Chart.Plot.Item","id":"method-hideChild","meta":{}},{"name":"move","tagname":"method","owner":"Chart.Canvas.Group","id":"method-move","meta":{}},{"name":"showChild","tagname":"method","owner":"Chart.Plot.Item","id":"method-showChild","meta":{}},{"name":"translate","tagname":"method","owner":"Chart.Canvas.Group","id":"method-translate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Chart.Plot.Item","component":false,"superclasses":["Chart.Canvas.Group"],"subclasses":["Chart.Axis.Abstract","Chart.Axis.Grid","Chart.Flags","Chart.Labels","Chart.Legend","Chart.Legend.Item","Chart.Markers","Chart.Plot.Back","Chart.Series","Chart.Tooltip"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='docClass'>Chart.Canvas.Group</a><div class='subclass '><strong>Chart.Plot.Item</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Chart.Axis.Abstract' rel='Chart.Axis.Abstract' class='docClass'>Chart.Axis.Abstract</a></div><div class='dependency'><a href='#!/api/Chart.Axis.Grid' rel='Chart.Axis.Grid' class='docClass'>Chart.Axis.Grid</a></div><div class='dependency'><a href='#!/api/Chart.Flags' rel='Chart.Flags' class='docClass'>Chart.Flags</a></div><div class='dependency'><a href='#!/api/Chart.Labels' rel='Chart.Labels' class='docClass'>Chart.Labels</a></div><div class='dependency'><a href='#!/api/Chart.Legend' rel='Chart.Legend' class='docClass'>Chart.Legend</a></div><div class='dependency'><a href='#!/api/Chart.Legend.Item' rel='Chart.Legend.Item' class='docClass'>Chart.Legend.Item</a></div><div class='dependency'><a href='#!/api/Chart.Markers' rel='Chart.Markers' class='docClass'>Chart.Markers</a></div><div class='dependency'><a href='#!/api/Chart.Plot.Back' rel='Chart.Plot.Back' class='docClass'>Chart.Plot.Back</a></div><div class='dependency'><a href='#!/api/Chart.Series' rel='Chart.Series' class='docClass'>Chart.Series</a></div><div class='dependency'><a href='#!/api/Chart.Tooltip' rel='Chart.Tooltip' class='docClass'>Chart.Tooltip</a></div><h4>Files</h4><div class='dependency'><a href='source/plotitem.html#Chart-Plot-Item' target='_blank'>plotitem.js</a></div></pre><div class='doc-contents'><p>图表内部元素的基类</p>\n\n<ul>\n<li><a href=\"http://spmjs.io/docs/achart-plot/#plot-item\" target=\"_blank\">文档</a></li>\n<li><a href=\"http://spmjs.io/docs/achart-plot/wiki/item.html\" target=\"_blank\">wiki</a></li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-events' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Plot.Item'>Chart.Plot.Item</span><br/><a href='source/plotitem.html#Chart-Plot-Item-property-events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Plot.Item-property-events' class='name expandable'>events</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>事件回调，支持dom的所有事件和自定义事件</p>\n</div><div class='long'><p>事件回调，支持dom的所有事件和自定义事件</p>\n</div></div></div><div id='property-groupName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Plot.Item'>Chart.Plot.Item</span><br/><a href='source/plotitem.html#Chart-Plot-Item-property-groupName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Plot.Item-property-groupName' class='name expandable'>groupName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>所属分组的名称,用于事件中标示父元素 ...</div><div class='long'><p>所属分组的名称,用于事件中标示父元素</p>\n<p>Defaults to: <code>&#39;group&#39;</code></p></div></div></div><div id='property-isGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-property-isGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-property-isGroup' class='name expandable'>isGroup</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否Group ...</div><div class='long'><p>是否Group</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-itemName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Plot.Item'>Chart.Plot.Item</span><br/><a href='source/plotitem.html#Chart-Plot-Item-property-itemName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Plot.Item-property-itemName' class='name expandable'>itemName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>活动子项的名称，用于组成 itemactived,itemunactived的事件 ...</div><div class='long'><p>活动子项的名称，用于组成 itemactived,itemunactived的事件</p>\n<p>Defaults to: <code>&#39;item&#39;</code></p></div></div></div><div id='property-x' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-property-x' class='name expandable'>x</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>沿x轴的偏移量</p>\n</div><div class='long'><p>沿x轴的偏移量</p>\n</div></div></div><div id='property-y' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-property-y' class='name expandable'>y</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>沿y轴的偏移量</p>\n</div><div class='long'><p>沿y轴的偏移量</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-animate' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-animate' class='name expandable'>animate</a>( <span class='pre'>params, ms, easing, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>执行动画,对于分组来说，animate仅支持平移动画和clip-rect\n\n\n  group.animate({\n    x : 100,\n    y : 100\n  },400); ...</div><div class='long'><p>执行动画,对于分组来说，animate仅支持平移动画和clip-rect</p>\n\n<p><code>\n  group.animate({\n    x : 100,\n    y : 100\n  },400);\n</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>动画的参数</p>\n</div></li><li><span class='pre'>ms</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>毫秒数</p>\n</div></li><li><span class='pre'>easing</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>路径函数</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-containsElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-method-containsElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-containsElement' class='name expandable'>containsElement</a>( <span class='pre'>element</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否包含指定的DOM ...</div><div class='long'><p>是否包含指定的DOM</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>dom元素</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否包含</p>\n</div></li></ul></div></div></div><div id='method-fireUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Plot.Item'>Chart.Plot.Item</span><br/><a href='source/plotitem.html#Chart-Plot-Item-method-fireUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Plot.Item-method-fireUp' class='name expandable'>fireUp</a>( <span class='pre'>name, ev</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>在顶层图表控件上触发事件 ...</div><div class='long'><p>在顶层图表控件上触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件名称</p>\n</div></li><li><span class='pre'>ev</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件对象</p>\n</div></li></ul></div></div></div><div id='method-fireUpGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Plot.Item'>Chart.Plot.Item</span><br/><a href='source/plotitem.html#Chart-Plot-Item-method-fireUpGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Plot.Item-method-fireUpGroup' class='name expandable'>fireUpGroup</a>( <span class='pre'>name, item, obj</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>在分组上触发事件 ...</div><div class='long'><p>在分组上触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件名称</p>\n</div></li><li><span class='pre'>item</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>触发事件的子项</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件对象</p>\n</div></li></ul></div></div></div><div id='method-getVisibleChildren' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Plot.Item'>Chart.Plot.Item</span><br/><a href='source/plotitem.html#Chart-Plot-Item-method-getVisibleChildren' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Plot.Item-method-getVisibleChildren' class='name expandable'>getVisibleChildren</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取显示的子项 ...</div><div class='long'><p>获取显示的子项</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>显示的子项</p>\n</div></li></ul></div></div></div><div id='method-hideChild' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Plot.Item'>Chart.Plot.Item</span><br/><a href='source/plotitem.html#Chart-Plot-Item-method-hideChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Plot.Item-method-hideChild' class='name expandable'>hideChild</a>( <span class='pre'>child</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>隐藏子项 ...</div><div class='long'><p>隐藏子项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>child</span> : <a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a><div class='sub-desc'><p>子项</p>\n</div></li></ul></div></div></div><div id='method-move' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-method-move' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-move' class='name expandable'>move</a>( <span class='pre'>x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移动的到位置 ...</div><div class='long'><p>移动的到位置</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>移动到x</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>移动到y</p>\n</div></li></ul></div></div></div><div id='method-showChild' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Plot.Item'>Chart.Plot.Item</span><br/><a href='source/plotitem.html#Chart-Plot-Item-method-showChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Plot.Item-method-showChild' class='name expandable'>showChild</a>( <span class='pre'>child</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示子项 ...</div><div class='long'><p>显示子项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>child</span> : <a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a><div class='sub-desc'><p>子项</p>\n</div></li></ul></div></div></div><div id='method-translate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Group' rel='Chart.Canvas.Group' class='defined-in docClass'>Chart.Canvas.Group</a><br/><a href='source/group.html#Chart-Canvas-Group-method-translate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-translate' class='name expandable'>translate</a>( <span class='pre'>dx, dy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移动 ...</div><div class='long'><p>移动</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dx</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>沿x轴平移的距离</p>\n</div></li><li><span class='pre'>dy</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>沿y轴平移的距离</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});