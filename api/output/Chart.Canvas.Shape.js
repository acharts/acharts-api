Ext.data.JsonP.Chart_Canvas_Shape({"tagname":"class","name":"Chart.Canvas.Shape","autodetected":{},"files":[{"filename":"shape.js","href":"shape.html#Chart-Canvas-Shape"}],"extends":"Chart.Canvas.Base","members":[{"name":"canvas","tagname":"property","owner":"Chart.Canvas.Base","id":"property-canvas","meta":{}},{"name":"el","tagname":"property","owner":"Chart.Canvas.Base","id":"property-el","meta":{"protected":true}},{"name":"isShape","tagname":"property","owner":"Chart.Canvas.Shape","id":"property-isShape","meta":{}},{"name":"node","tagname":"property","owner":"Chart.Canvas.Base","id":"property-node","meta":{}},{"name":"visible","tagname":"property","owner":"Chart.Canvas.Base","id":"property-visible","meta":{}},{"name":"zIndex","tagname":"property","owner":"Chart.Canvas.Base","id":"property-zIndex","meta":{}},{"name":"attr","tagname":"method","owner":"Chart.Canvas.Base","id":"method-attr","meta":{}},{"name":"beforeRenderUI","tagname":"method","owner":"Chart.Canvas.Base","id":"method-beforeRenderUI","meta":{"protected":true}},{"name":"bindUI","tagname":"method","owner":"Chart.Canvas.Base","id":"method-bindUI","meta":{"protected":true}},{"name":"createElement","tagname":"method","owner":"Chart.Canvas.Shape","id":"method-createElement","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"Chart.Canvas.Base","id":"method-destroy","meta":{}},{"name":"fire","tagname":"method","owner":"Chart.Canvas.Base","id":"method-fire","meta":{}},{"name":"get","tagname":"method","owner":"Chart.Canvas.Base","id":"method-get","meta":{"protected":true}},{"name":"getCfgAttr","tagname":"method","owner":"Chart.Canvas.Base","id":"method-getCfgAttr","meta":{}},{"name":"getDefaultCfg","tagname":"method","owner":"Chart.Canvas.Base","id":"method-getDefaultCfg","meta":{}},{"name":"getPath","tagname":"method","owner":"Chart.Canvas.Shape","id":"method-getPath","meta":{}},{"name":"getPathString","tagname":"method","owner":"Chart.Canvas.Shape","id":"method-getPathString","meta":{}},{"name":"getTotalLength","tagname":"method","owner":"Chart.Canvas.Shape","id":"method-getTotalLength","meta":{}},{"name":"getTransformPath","tagname":"method","owner":"Chart.Canvas.Shape","id":"method-getTransformPath","meta":{}},{"name":"hide","tagname":"method","owner":"Chart.Canvas.Base","id":"method-hide","meta":{}},{"name":"off","tagname":"method","owner":"Chart.Canvas.Base","id":"method-off","meta":{"chainable":true}},{"name":"on","tagname":"method","owner":"Chart.Canvas.Base","id":"method-on","meta":{"chainable":true}},{"name":"parseElCfg","tagname":"method","owner":"Chart.Canvas.Shape","id":"method-parseElCfg","meta":{"protected":true}},{"name":"remove","tagname":"method","owner":"Chart.Canvas.Base","id":"method-remove","meta":{}},{"name":"render","tagname":"method","owner":"Chart.Canvas.Base","id":"method-render","meta":{}},{"name":"renderUI","tagname":"method","owner":"Chart.Canvas.Base","id":"method-renderUI","meta":{"protected":true}},{"name":"rotate","tagname":"method","owner":"Chart.Canvas.Shape","id":"method-rotate","meta":{}},{"name":"scale","tagname":"method","owner":"Chart.Canvas.Shape","id":"method-scale","meta":{}},{"name":"set","tagname":"method","owner":"Chart.Canvas.Base","id":"method-set","meta":{"protected":true}},{"name":"show","tagname":"method","owner":"Chart.Canvas.Base","id":"method-show","meta":{}},{"name":"transform","tagname":"method","owner":"Chart.Canvas.Shape","id":"method-transform","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Chart.Canvas.Shape","component":false,"superclasses":["Chart.Canvas.Base"],"subclasses":["Chart.Canvas.Shape.Circle","Chart.Canvas.Shape.Ellipse","Chart.Canvas.Shape.Image","Chart.Canvas.Shape.Marker","Chart.Canvas.Shape.Path","Chart.Canvas.Shape.Rect","Chart.Canvas.Shape.Text"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='docClass'>Chart.Canvas.Base</a><div class='subclass '><strong>Chart.Canvas.Shape</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Chart.Canvas.Shape.Circle' rel='Chart.Canvas.Shape.Circle' class='docClass'>Chart.Canvas.Shape.Circle</a></div><div class='dependency'><a href='#!/api/Chart.Canvas.Shape.Ellipse' rel='Chart.Canvas.Shape.Ellipse' class='docClass'>Chart.Canvas.Shape.Ellipse</a></div><div class='dependency'><a href='#!/api/Chart.Canvas.Shape.Image' rel='Chart.Canvas.Shape.Image' class='docClass'>Chart.Canvas.Shape.Image</a></div><div class='dependency'><a href='#!/api/Chart.Canvas.Shape.Marker' rel='Chart.Canvas.Shape.Marker' class='docClass'>Chart.Canvas.Shape.Marker</a></div><div class='dependency'><a href='#!/api/Chart.Canvas.Shape.Path' rel='Chart.Canvas.Shape.Path' class='docClass'>Chart.Canvas.Shape.Path</a></div><div class='dependency'><a href='#!/api/Chart.Canvas.Shape.Rect' rel='Chart.Canvas.Shape.Rect' class='docClass'>Chart.Canvas.Shape.Rect</a></div><div class='dependency'><a href='#!/api/Chart.Canvas.Shape.Text' rel='Chart.Canvas.Shape.Text' class='docClass'>Chart.Canvas.Shape.Text</a></div><h4>Files</h4><div class='dependency'><a href='source/shape.html#Chart-Canvas-Shape' target='_blank'>shape.js</a></div></pre><div class='doc-contents'><p>图形的基类</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-canvas' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-property-canvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-canvas' class='name expandable'>canvas</a> : <a href=\"#!/api/Chart.Canvas\" rel=\"Chart.Canvas\" class=\"docClass\">Chart.Canvas</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>画布</p>\n</div><div class='long'><p>画布</p>\n</div></div></div><div id='property-el' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-property-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-el' class='name expandable'>el</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'><p>底层使用了raphael 所以此属性对应raphael的对对象</p>\n</div><div class='long'><p>底层使用了raphael 所以此属性对应raphael的对对象</p>\n</div></div></div><div id='property-isShape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-property-isShape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-property-isShape' class='name expandable'>isShape</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否图形 ...</div><div class='long'><p>是否图形</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-node' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-property-node' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-node' class='name expandable'>node</a> : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'><p>svg或者vml对象</p>\n</div><div class='long'><p>svg或者vml对象</p>\n</div></div></div><div id='property-visible' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-property-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-visible' class='name expandable'>visible</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否显示 ...</div><div class='long'><p>是否显示</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-zIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-property-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-zIndex' class='name expandable'>zIndex</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>所在父元素中的优先级，仅在父元素排序时有效</p>\n</div><div class='long'><p>所在父元素中的优先级，仅在父元素排序时有效</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-attr' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-attr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-attr' class='name expandable'>attr</a>( <span class='pre'>name, value</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>设置或者设置属性，有一下3中情形：\n\n\nname为字符串，value 为空，获取属性值\nname为字符串，value不为空，设置属性值，返回this\nname为键值对，value 为空，设置属性值 ...</div><div class='long'><p>设置或者设置属性，有一下3中情形：</p>\n\n<ul>\n<li>name为字符串，value 为空，获取属性值</li>\n<li>name为字符串，value不为空，设置属性值，返回this</li>\n<li>name为键值对，value 为空，设置属性值</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>属性值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>属性值</p>\n</div></li></ul></div></div></div><div id='method-beforeRenderUI' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-beforeRenderUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-beforeRenderUI' class='name expandable'>beforeRenderUI</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>渲染控件 ...</div><div class='long'><p>渲染控件</p>\n</div></div></div><div id='method-bindUI' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-bindUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-bindUI' class='name expandable'>bindUI</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>绑定事件 ...</div><div class='long'><p>绑定事件</p>\n</div></div></div><div id='method-createElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-method-createElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-method-createElement' class='name expandable'>createElement</a>( <span class='pre'>attrs</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>析构函数 ...</div><div class='long'><p>析构函数</p>\n</div></div></div><div id='method-fire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-fire' class='name expandable'>fire</a>( <span class='pre'>eventType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>触发事件 ...</div><div class='long'><p>触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取属性信息 ...</div><div class='long'><p>获取属性信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-getCfgAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-getCfgAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-getCfgAttr' class='name expandable'>getCfgAttr</a>( <span class='pre'>name</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>获取初始配置的信息 ...</div><div class='long'><p>获取初始配置的信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>配置项名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>初始值</p>\n</div></li></ul></div></div></div><div id='method-getDefaultCfg' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-getDefaultCfg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-getDefaultCfg' class='name expandable'>getDefaultCfg</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取默认的配置信息 ...</div><div class='long'><p>获取默认的配置信息</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>默认的属性</p>\n</div></li></ul></div></div></div><div id='method-getPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-method-getPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-method-getPath' class='name expandable'>getPath</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取路径 ...</div><div class='long'><p>获取路径</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>路径的数组</p>\n</div></li></ul></div></div></div><div id='method-getPathString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-method-getPathString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-method-getPathString' class='name expandable'>getPathString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取路径字符串 ...</div><div class='long'><p>获取路径字符串</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>路径的字符串</p>\n</div></li></ul></div></div></div><div id='method-getTotalLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-method-getTotalLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-method-getTotalLength' class='name expandable'>getTotalLength</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取图形的整体长度 ...</div><div class='long'><p>获取图形的整体长度</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>长度</p>\n</div></li></ul></div></div></div><div id='method-getTransformPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-method-getTransformPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-method-getTransformPath' class='name expandable'>getTransformPath</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取使用平移后的path ...</div><div class='long'><p>获取使用平移后的path</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>路径的数组</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>隐藏 ...</div><div class='long'><p>隐藏</p>\n</div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-off' class='name expandable'>off</a>( <span class='pre'>eventType, fn</span> ) : <a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>移除事件 ...</div><div class='long'><p>移除事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-on' class='name expandable'>on</a>( <span class='pre'>eventType, fn</span> ) : <a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>附加事件 ...</div><div class='long'><p>附加事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-parseElCfg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-method-parseElCfg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-method-parseElCfg' class='name expandable'>parseElCfg</a>( <span class='pre'>attrs</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>格式化初始化配置项 ...</div><div class='long'><p>格式化初始化配置项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-remove' class='name expandable'>remove</a>( <span class='pre'>[destroy]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移除，从父元素中移除 ...</div><div class='long'><p>移除，从父元素中移除</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>destroy</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-render' class='name expandable'>render</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>渲染控件/图形 ...</div><div class='long'><p>渲染控件/图形</p>\n</div></div></div><div id='method-renderUI' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-renderUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-renderUI' class='name expandable'>renderUI</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>渲染控件 ...</div><div class='long'><p>渲染控件</p>\n</div></div></div><div id='method-rotate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-method-rotate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-method-rotate' class='name expandable'>rotate</a>( <span class='pre'>a, x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>旋转 ...</div><div class='long'><p>旋转</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>旋转的角度</p>\n</div></li><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>旋转的中心点 x</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>旋转的中心点 y</p>\n</div></li></ul></div></div></div><div id='method-scale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-method-scale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-method-scale' class='name expandable'>scale</a>( <span class='pre'>sx, sy, cx, cy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>放大 ...</div><div class='long'><p>放大</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sx</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>x轴方向的倍数</p>\n</div></li><li><span class='pre'>sy</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>y轴方向的倍数</p>\n</div></li><li><span class='pre'>cx</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>x轴方向扩展的中心</p>\n</div></li><li><span class='pre'>cy</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>y轴方向扩展的中心</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-set' class='name expandable'>set</a>( <span class='pre'>name, value</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>设置属性信息 ...</div><div class='long'><p>设置属性信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-show' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.Canvas.Base' rel='Chart.Canvas.Base' class='defined-in docClass'>Chart.Canvas.Base</a><br/><a href='source/base2.html#Chart-Canvas-Base-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示 ...</div><div class='long'><p>显示</p>\n</div></div></div><div id='method-transform' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Shape'>Chart.Canvas.Shape</span><br/><a href='source/shape.html#Chart-Canvas-Shape-method-transform' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Shape-method-transform' class='name expandable'>transform</a>( <span class='pre'>tstr</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>直接使用transform方法 \n\n \"t100,100r30,100,100s2,2,100,100r45s1.5\" ...</div><div class='long'><p>直接使用transform方法 <br></p>\n\n<h2> \"t100,100r30,100,100s2,2,100,100r45s1.5\"</h2>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tstr</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>几何转换的字符串</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});