# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.1987317
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/base.tmpl'
_template_uri = 'base.tmpl'
_source_encoding = 'utf-8'
_exports = ['extra_head', 'content', 'extra_js']


def _mako_get_namespace(context, name):
    try:
        return context.namespaces[(__name__, name)]
    except KeyError:
        _mako_generate_namespaces(context)
        return context.namespaces[(__name__, name)]
def _mako_generate_namespaces(context):
    ns = runtime.TemplateNamespace('base', context._clean_inheritance_tokens(), templateuri='base_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'base')] = ns

    ns = runtime.TemplateNamespace('footer', context._clean_inheritance_tokens(), templateuri='base_footer.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'footer')] = ns

    ns = runtime.TemplateNamespace('annotations', context._clean_inheritance_tokens(), templateuri='annotation_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'annotations')] = ns

    ns = runtime.TemplateNamespace('header', context._clean_inheritance_tokens(), templateuri='base_header.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'header')] = ns

def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'footer')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'header')._populate(_import_ns, ['*'])
        body_end = _import_ns.get('body_end', context.get('body_end', UNDEFINED))
        footer = _mako_get_namespace(context, 'footer')
        mdl__fixed_drawer = _import_ns.get('mdl__fixed_drawer', context.get('mdl__fixed_drawer', UNDEFINED))
        mdl__no_drawer_button = _import_ns.get('mdl__no_drawer_button', context.get('mdl__no_drawer_button', UNDEFINED))
        mdl__no_desktop_drawer_button = _import_ns.get('mdl__no_desktop_drawer_button', context.get('mdl__no_desktop_drawer_button', UNDEFINED))
        base = _mako_get_namespace(context, 'base')
        def content():
            return render_content(context._locals(__M_locals))
        messages = _import_ns.get('messages', context.get('messages', UNDEFINED))
        template_hooks = _import_ns.get('template_hooks', context.get('template_hooks', UNDEFINED))
        def extra_js():
            return render_extra_js(context._locals(__M_locals))
        lang = _import_ns.get('lang', context.get('lang', UNDEFINED))
        header = _mako_get_namespace(context, 'header')
        image_plugin = _import_ns.get('image_plugin', context.get('image_plugin', UNDEFINED))
        set_locale = _import_ns.get('set_locale', context.get('set_locale', UNDEFINED))
        def extra_head():
            return render_extra_head(context._locals(__M_locals))
        mdl__fixed_header = _import_ns.get('mdl__fixed_header', context.get('mdl__fixed_header', UNDEFINED))
        __M_writer = context.writer()
        __M_writer('\n')
        __M_writer('\n')
        __M_writer('\n')
        __M_writer('\n')
        __M_writer(str(set_locale(lang)))
        __M_writer('\n')
        __M_writer(str(base.html_headstart()))
        __M_writer('\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'extra_head'):
            context['self'].extra_head(**pageargs)
        

        __M_writer('\n')
        __M_writer(str(template_hooks['extra_head']()))
        __M_writer('\n</head>\n<body>\n    <a href="#content" class="sr-only sr-only-focusable">')
        __M_writer(str(messages("Skip to main content")))
        __M_writer('</a>\n    <div id="container" class="site mdl-layout mdl-js-layout\n')
        if mdl__fixed_header:
            __M_writer('mdl-layout--fixed-header\n')
        if mdl__fixed_drawer:
            __M_writer('mdl-layout--fixed-drawer\n')
        if mdl__no_drawer_button:
            __M_writer('mdl-layout--no-drawer-button\n')
        if mdl__no_desktop_drawer_button:
            __M_writer('mdl-layout--no-desktop-drawer-button\n')
        __M_writer('    ">\n         ')
        __M_writer(str(header.html_header()))
        __M_writer('\n         <main id="content" class="mdl-layout__content">\n            ')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'content'):
            context['self'].content(**pageargs)
        

        __M_writer('\n            ')
        __M_writer(str(footer.html_footer()))
        __M_writer('\n         </main>\n    </div>\n    ')
        __M_writer(str(base.late_load_js()))
        __M_writer('\n')
        if image_plugin and image_plugin == 'colorbox':
            __M_writer('    <script>$(\'.thumbnails a\').colorbox({rel:"gal",maxWidth:"100%",maxHeight:"100%",scalePhotos:true});</script>\n')
        __M_writer('    ')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'extra_js'):
            context['self'].extra_js(**pageargs)
        

        __M_writer('\n    ')
        __M_writer(str(body_end))
        __M_writer('\n    ')
        __M_writer(str(template_hooks['body_end']()))
        __M_writer('\n</body>\n</html>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_extra_head(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'footer')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'header')._populate(_import_ns, ['*'])
        def extra_head():
            return render_extra_head(context)
        __M_writer = context.writer()
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_content(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'footer')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'header')._populate(_import_ns, ['*'])
        def content():
            return render_content(context)
        __M_writer = context.writer()
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_extra_js(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'footer')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'header')._populate(_import_ns, ['*'])
        def extra_js():
            return render_extra_js(context)
        __M_writer = context.writer()
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "base.tmpl", "filename": "themes/overminddl1-mdl/templates/base.tmpl", "source_encoding": "utf-8", "line_map": {"133": 31, "148": 39, "23": 2, "26": 4, "29": 5, "32": 3, "35": 0, "163": 148, "63": 2, "64": 3, "65": 4, "66": 5, "67": 6, "68": 6, "69": 7, "70": 7, "75": 10, "76": 11, "77": 11, "78": 14, "79": 14, "80": 16, "81": 17, "82": 19, "83": 20, "84": 22, "85": 23, "86": 25, "87": 26, "88": 28, "89": 29, "90": 29, "95": 31, "96": 32, "97": 32, "98": 35, "99": 35, "100": 36, "101": 37, "102": 39, "107": 39, "108": 40, "109": 40, "110": 41, "111": 41, "117": 8, "127": 8}}
__M_END_METADATA
"""
