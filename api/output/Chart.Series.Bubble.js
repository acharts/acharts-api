Ext.data.JsonP.Chart_Series_Bubble({"tagname":"class","name":"Chart.Series.Bubble","autodetected":{},"files":[{"filename":"bubble.js","href":"bubble.html#Chart-Series-Bubble"}],"members":[{"name":"activeCircle","tagname":"property","owner":"Chart.Series.Bubble","id":"property-activeCircle","meta":{}},{"name":"circle","tagname":"property","owner":"Chart.Series.Bubble","id":"property-circle","meta":{}},{"name":"radiusField","tagname":"property","owner":"Chart.Series.Bubble","id":"property-radiusField","meta":{}},{"name":"changeShapes","tagname":"method","owner":"Chart.Series.Bubble","id":"method-changeShapes","meta":{"protected":true}},{"name":"getActiveItems","tagname":"method","owner":"Chart.Series.Bubble","id":"method-getActiveItems","meta":{"protected":true}},{"name":"getItems","tagname":"method","owner":"Chart.Series.Bubble","id":"method-getItems","meta":{}},{"name":"isItemActived","tagname":"method","owner":"Chart.Series.Bubble","id":"method-isItemActived","meta":{"protected":true}},{"name":"processColor","tagname":"method","owner":"Chart.Series.Bubble","id":"method-processColor","meta":{"protected":true}},{"name":"radiusFormatter","tagname":"method","owner":"Chart.Series.Bubble","id":"method-radiusFormatter","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Chart.Series.Bubble","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/bubble.html#Chart-Series-Bubble' target='_blank'>bubble.js</a></div></pre><div class='doc-contents'><p>冒泡图</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeCircle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series.Bubble'>Chart.Series.Bubble</span><br/><a href='source/bubble.html#Chart-Series-Bubble-property-activeCircle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series.Bubble-property-activeCircle' class='name expandable'>activeCircle</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>激活气泡的状态 ...</div><div class='long'><p>激活气泡的状态</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-circle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series.Bubble'>Chart.Series.Bubble</span><br/><a href='source/bubble.html#Chart-Series-Bubble-property-circle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series.Bubble-property-circle' class='name expandable'>circle</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>气泡的配置信息 ...</div><div class='long'><p>气泡的配置信息</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-radiusField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series.Bubble'>Chart.Series.Bubble</span><br/><a href='source/bubble.html#Chart-Series-Bubble-property-radiusField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series.Bubble-property-radiusField' class='name expandable'>radiusField</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>如果传入的数据是对象那么这个字段标示半径代表的字段 ...</div><div class='long'><p>如果传入的数据是对象那么这个字段标示半径代表的字段</p>\n<p>Defaults to: <code>&#39;r&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-changeShapes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series.Bubble'>Chart.Series.Bubble</span><br/><a href='source/bubble.html#Chart-Series-Bubble-method-changeShapes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series.Bubble-method-changeShapes' class='name expandable'>changeShapes</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>内部图形发生改变 ...</div><div class='long'><p>内部图形发生改变</p>\n</div></div></div><div id='method-getActiveItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series.Bubble'>Chart.Series.Bubble</span><br/><a href='source/bubble.html#Chart-Series-Bubble-method-getActiveItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series.Bubble-method-getActiveItems' class='name expandable'>getActiveItems</a>( <span class='pre'></span> ) : <a href=\"#!/api/Chart.Actived\" rel=\"Chart.Actived\" class=\"docClass\">Chart.Actived</a>[]<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取可以被激活的元素 ...</div><div class='long'><p>获取可以被激活的元素</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Chart.Actived\" rel=\"Chart.Actived\" class=\"docClass\">Chart.Actived</a>[]</span><div class='sub-desc'><p>可以被激活的元素集合</p>\n</div></li></ul></div></div></div><div id='method-getItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series.Bubble'>Chart.Series.Bubble</span><br/><a href='source/bubble.html#Chart-Series-Bubble-method-getItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series.Bubble-method-getItems' class='name expandable'>getItems</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>获取内部的圆 ...</div><div class='long'><p>获取内部的圆</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>图形圆的集合</p>\n</div></li></ul></div></div></div><div id='method-isItemActived' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series.Bubble'>Chart.Series.Bubble</span><br/><a href='source/bubble.html#Chart-Series-Bubble-method-isItemActived' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series.Bubble-method-isItemActived' class='name expandable'>isItemActived</a>( <span class='pre'>item</span> ) : <a href=\"#!/api/Chart.Actived\" rel=\"Chart.Actived\" class=\"docClass\">Chart.Actived</a>[]<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>是否激活 ...</div><div class='long'><p>是否激活</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Chart.Actived\" rel=\"Chart.Actived\" class=\"docClass\">Chart.Actived</a><div class='sub-desc'><p>可以被激活的元素</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Chart.Actived\" rel=\"Chart.Actived\" class=\"docClass\">Chart.Actived</a>[]</span><div class='sub-desc'><p>可以被激活的元素集合</p>\n</div></li></ul></div></div></div><div id='method-processColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series.Bubble'>Chart.Series.Bubble</span><br/><a href='source/bubble.html#Chart-Series-Bubble-method-processColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series.Bubble-method-processColor' class='name expandable'>processColor</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>处理颜色 ...</div><div class='long'><p>处理颜色</p>\n</div></div></div><div id='method-radiusFormatter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Series.Bubble'>Chart.Series.Bubble</span><br/><a href='source/bubble.html#Chart-Series-Bubble-method-radiusFormatter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Series.Bubble-method-radiusFormatter' class='name expandable'>radiusFormatter</a>( <span class='pre'>r</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>格式化半径函数 ...</div><div class='long'><p>格式化半径函数</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>r</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});