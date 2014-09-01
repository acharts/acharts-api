Ext.data.JsonP.Chart_Canvas_Base({"tagname":"class","name":"Chart.Canvas.Base","autodetected":{},"files":[{"filename":"base.js","href":"base2.html#Chart-Canvas-Base"}],"members":[{"name":"canvas","tagname":"property","owner":"Chart.Canvas.Base","id":"property-canvas","meta":{}},{"name":"el","tagname":"property","owner":"Chart.Canvas.Base","id":"property-el","meta":{"protected":true}},{"name":"node","tagname":"property","owner":"Chart.Canvas.Base","id":"property-node","meta":{}},{"name":"visible","tagname":"property","owner":"Chart.Canvas.Base","id":"property-visible","meta":{}},{"name":"zIndex","tagname":"property","owner":"Chart.Canvas.Base","id":"property-zIndex","meta":{}},{"name":"attr","tagname":"method","owner":"Chart.Canvas.Base","id":"method-attr","meta":{}},{"name":"beforeRenderUI","tagname":"method","owner":"Chart.Canvas.Base","id":"method-beforeRenderUI","meta":{"protected":true}},{"name":"bindUI","tagname":"method","owner":"Chart.Canvas.Base","id":"method-bindUI","meta":{"protected":true}},{"name":"destroy","tagname":"method","owner":"Chart.Canvas.Base","id":"method-destroy","meta":{}},{"name":"fire","tagname":"method","owner":"Chart.Canvas.Base","id":"method-fire","meta":{}},{"name":"get","tagname":"method","owner":"Chart.Canvas.Base","id":"method-get","meta":{"protected":true}},{"name":"getCfgAttr","tagname":"method","owner":"Chart.Canvas.Base","id":"method-getCfgAttr","meta":{}},{"name":"getDefaultCfg","tagname":"method","owner":"Chart.Canvas.Base","id":"method-getDefaultCfg","meta":{}},{"name":"hide","tagname":"method","owner":"Chart.Canvas.Base","id":"method-hide","meta":{}},{"name":"off","tagname":"method","owner":"Chart.Canvas.Base","id":"method-off","meta":{"chainable":true}},{"name":"on","tagname":"method","owner":"Chart.Canvas.Base","id":"method-on","meta":{"chainable":true}},{"name":"remove","tagname":"method","owner":"Chart.Canvas.Base","id":"method-remove","meta":{}},{"name":"render","tagname":"method","owner":"Chart.Canvas.Base","id":"method-render","meta":{}},{"name":"renderUI","tagname":"method","owner":"Chart.Canvas.Base","id":"method-renderUI","meta":{"protected":true}},{"name":"set","tagname":"method","owner":"Chart.Canvas.Base","id":"method-set","meta":{"protected":true}},{"name":"show","tagname":"method","owner":"Chart.Canvas.Base","id":"method-show","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Chart.Canvas.Base","component":false,"superclasses":[],"subclasses":["Chart.Canvas.Container","Chart.Canvas.Shape"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Chart.Canvas.Container' rel='Chart.Canvas.Container' class='docClass'>Chart.Canvas.Container</a></div><div class='dependency'><a href='#!/api/Chart.Canvas.Shape' rel='Chart.Canvas.Shape' class='docClass'>Chart.Canvas.Shape</a></div><h4>Files</h4><div class='dependency'><a href='source/base2.html#Chart-Canvas-Base' target='_blank'>base.js</a></div></pre><div class='doc-contents'><p>图形控件或者分组的基类</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-canvas' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-property-canvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-canvas' class='name expandable'>canvas</a> : <a href=\"#!/api/Chart.Canvas\" rel=\"Chart.Canvas\" class=\"docClass\">Chart.Canvas</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>画布</p>\n</div><div class='long'><p>画布</p>\n</div></div></div><div id='property-el' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-property-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-el' class='name expandable'>el</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'><p>底层使用了raphael 所以此属性对应raphael的对对象</p>\n</div><div class='long'><p>底层使用了raphael 所以此属性对应raphael的对对象</p>\n</div></div></div><div id='property-node' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-property-node' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-node' class='name expandable'>node</a> : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'><p>svg或者vml对象</p>\n</div><div class='long'><p>svg或者vml对象</p>\n</div></div></div><div id='property-visible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-property-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-visible' class='name expandable'>visible</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>是否显示 ...</div><div class='long'><p>是否显示</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-zIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-property-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-property-zIndex' class='name expandable'>zIndex</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>所在父元素中的优先级，仅在父元素排序时有效</p>\n</div><div class='long'><p>所在父元素中的优先级，仅在父元素排序时有效</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-attr' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-attr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-attr' class='name expandable'>attr</a>( <span class='pre'>name, value</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>设置或者设置属性，有一下3中情形：\n\n\nname为字符串，value 为空，获取属性值\nname为字符串，value不为空，设置属性值，返回this\nname为键值对，value 为空，设置属性值 ...</div><div class='long'><p>设置或者设置属性，有一下3中情形：</p>\n\n<ul>\n<li>name为字符串，value 为空，获取属性值</li>\n<li>name为字符串，value不为空，设置属性值，返回this</li>\n<li>name为键值对，value 为空，设置属性值</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>属性值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>属性值</p>\n</div></li></ul></div></div></div><div id='method-beforeRenderUI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-beforeRenderUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-beforeRenderUI' class='name expandable'>beforeRenderUI</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>渲染控件 ...</div><div class='long'><p>渲染控件</p>\n</div></div></div><div id='method-bindUI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-bindUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-bindUI' class='name expandable'>bindUI</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>绑定事件 ...</div><div class='long'><p>绑定事件</p>\n</div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>析构函数 ...</div><div class='long'><p>析构函数</p>\n</div></div></div><div id='method-fire' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-fire' class='name expandable'>fire</a>( <span class='pre'>eventType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>触发事件 ...</div><div class='long'><p>触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取属性信息 ...</div><div class='long'><p>获取属性信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-getCfgAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-getCfgAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-getCfgAttr' class='name expandable'>getCfgAttr</a>( <span class='pre'>name</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>获取初始配置的信息 ...</div><div class='long'><p>获取初始配置的信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>配置项名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>初始值</p>\n</div></li></ul></div></div></div><div id='method-getDefaultCfg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-getDefaultCfg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-getDefaultCfg' class='name expandable'>getDefaultCfg</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取默认的配置信息 ...</div><div class='long'><p>获取默认的配置信息</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>默认的属性</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>隐藏 ...</div><div class='long'><p>隐藏</p>\n</div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-off' class='name expandable'>off</a>( <span class='pre'>eventType, fn</span> ) : <a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>移除事件 ...</div><div class='long'><p>移除事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-on' class='name expandable'>on</a>( <span class='pre'>eventType, fn</span> ) : <a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>附加事件 ...</div><div class='long'><p>附加事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Chart.Canvas.Base\" rel=\"Chart.Canvas.Base\" class=\"docClass\">Chart.Canvas.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-remove' class='name expandable'>remove</a>( <span class='pre'>[destroy]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>移除，从父元素中移除 ...</div><div class='long'><p>移除，从父元素中移除</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>destroy</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-render' class='name expandable'>render</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>渲染控件/图形 ...</div><div class='long'><p>渲染控件/图形</p>\n</div></div></div><div id='method-renderUI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-renderUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-renderUI' class='name expandable'>renderUI</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>渲染控件 ...</div><div class='long'><p>渲染控件</p>\n</div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-set' class='name expandable'>set</a>( <span class='pre'>name, value</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>设置属性信息 ...</div><div class='long'><p>设置属性信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.Canvas.Base'>Chart.Canvas.Base</span><br/><a href='source/base2.html#Chart-Canvas-Base-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.Canvas.Base-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示 ...</div><div class='long'><p>显示</p>\n</div></div></div></div></div></div></div>","meta":{}});