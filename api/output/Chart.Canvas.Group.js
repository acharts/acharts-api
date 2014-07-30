Ext.data.JsonP.Chart_Canvas_Group({"tagname":"class","name":"Chart.Canvas.Group","autodetected":{},"files":[{"filename":"group.js","href":"group.html#Chart-Canvas-Group"}],"members":[{"name":"isGroup","tagname":"property","owner":"Chart.Canvas.Group","id":"property-isGroup","meta":{}},{"name":"x","tagname":"property","owner":"Chart.Canvas.Group","id":"property-x","meta":{}},{"name":"y","tagname":"property","owner":"Chart.Canvas.Group","id":"property-y","meta":{}},{"name":"animate","tagname":"method","owner":"Chart.Canvas.Group","id":"method-animate","meta":{}},{"name":"containsElement","tagname":"method","owner":"Chart.Canvas.Group","id":"method-containsElement","meta":{}},{"name":"move","tagname":"method","owner":"Chart.Canvas.Group","id":"method-move","meta":{}},{"name":"translate","tagname":"method","owner":"Chart.Canvas.Group","id":"method-translate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Chart.Canvas.Group","component":false,"superclasses":[],"subclasses":["Chart.PlotItem"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Chart.PlotItem' rel='Chart.PlotItem' class='docClass'>Chart.PlotItem</a></div><h4>Files</h4><div class='dependency'><a href='source/group.html#Chart-Canvas-Group' target='_blank'>group.js</a></div></pre><div class='doc-contents'><p>图形分组</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isGroup' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Group'>Chart.Canvas.Group</span><br/><a href='source/group.html#Chart-Canvas-Group-property-isGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-property-isGroup' class='name expandable'>isGroup</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否Group ...</div><div class='long'><p>是否Group</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Group'>Chart.Canvas.Group</span><br/><a href='source/group.html#Chart-Canvas-Group-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-property-x' class='name expandable'>x</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>沿x轴的偏移量 ...</div><div class='long'><p>沿x轴的偏移量</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Group'>Chart.Canvas.Group</span><br/><a href='source/group.html#Chart-Canvas-Group-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-property-y' class='name expandable'>y</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>沿y轴的偏移量 ...</div><div class='long'><p>沿y轴的偏移量</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-animate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Group'>Chart.Canvas.Group</span><br/><a href='source/group.html#Chart-Canvas-Group-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-animate' class='name expandable'>animate</a>( <span class='pre'>params, ms, easing, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>执行动画,对于分组来说，animate仅支持平移动画\n\n\n  group.animate({\n    x : 100,\n    y : 100\n  },400); ...</div><div class='long'><p>执行动画,对于分组来说，animate仅支持平移动画</p>\n\n<p><code>\n  group.animate({\n    x : 100,\n    y : 100\n  },400);\n</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>动画的参数</p>\n</div></li><li><span class='pre'>ms</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>毫秒数</p>\n</div></li><li><span class='pre'>easing</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>路径函数</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-containsElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Group'>Chart.Canvas.Group</span><br/><a href='source/group.html#Chart-Canvas-Group-method-containsElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-containsElement' class='name expandable'>containsElement</a>( <span class='pre'>element</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否包含指定的DOM ...</div><div class='long'><p>是否包含指定的DOM</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>dom元素</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否包含</p>\n</div></li></ul></div></div></div><div id='method-move' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Group'>Chart.Canvas.Group</span><br/><a href='source/group.html#Chart-Canvas-Group-method-move' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-move' class='name expandable'>move</a>( <span class='pre'>x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移动的到位置 ...</div><div class='long'><p>移动的到位置</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>移动到x</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>移动到y</p>\n</div></li></ul></div></div></div><div id='method-translate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Group'>Chart.Canvas.Group</span><br/><a href='source/group.html#Chart-Canvas-Group-method-translate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Group-method-translate' class='name expandable'>translate</a>( <span class='pre'>dx, dy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移动 ...</div><div class='long'><p>移动</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dx</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>沿x轴平移的距离</p>\n</div></li><li><span class='pre'>dy</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>沿y轴平移的距离</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});