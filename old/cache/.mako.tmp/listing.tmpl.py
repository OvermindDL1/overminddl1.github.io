# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.3932047
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/listing.tmpl'
_template_uri = 'listing.tmpl'
_source_encoding = 'utf-8'
_exports = ['content']


def _mako_get_namespace(context, name):
    try:
        return context.namespaces[(__name__, name)]
    except KeyError:
        _mako_generate_namespaces(context)
        return context.namespaces[(__name__, name)]
def _mako_generate_namespaces(context):
    ns = runtime.TemplateNamespace('ui', context._clean_inheritance_tokens(), templateuri='crumbs.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'ui')] = ns

def _mako_inherit(template, context):
    _mako_generate_namespaces(context)
    return runtime._inherit_from(context, 'base.tmpl', _template_uri)
def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        _import_ns = {}
        _mako_get_namespace(context, 'ui')._populate(_import_ns, ['bar'])
        crumbs = _import_ns.get('crumbs', context.get('crumbs', UNDEFINED))
        folders = _import_ns.get('folders', context.get('folders', UNDEFINED))
        source_link = _import_ns.get('source_link', context.get('source_link', UNDEFINED))
        files = _import_ns.get('files', context.get('files', UNDEFINED))
        ui = _mako_get_namespace(context, 'ui')
        code = _import_ns.get('code', context.get('code', UNDEFINED))
        def content():
            return render_content(context._locals(__M_locals))
        messages = _import_ns.get('messages', context.get('messages', UNDEFINED))
        title = _import_ns.get('title', context.get('title', UNDEFINED))
        __M_writer = context.writer()
        __M_writer('\n')
        __M_writer('\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'content'):
            context['self'].content(**pageargs)
        

        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_content(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'ui')._populate(_import_ns, ['bar'])
        crumbs = _import_ns.get('crumbs', context.get('crumbs', UNDEFINED))
        folders = _import_ns.get('folders', context.get('folders', UNDEFINED))
        source_link = _import_ns.get('source_link', context.get('source_link', UNDEFINED))
        files = _import_ns.get('files', context.get('files', UNDEFINED))
        ui = _mako_get_namespace(context, 'ui')
        code = _import_ns.get('code', context.get('code', UNDEFINED))
        def content():
            return render_content(context)
        messages = _import_ns.get('messages', context.get('messages', UNDEFINED))
        title = _import_ns.get('title', context.get('title', UNDEFINED))
        __M_writer = context.writer()
        __M_writer('\n<div class="site-listing site-card mdl-grid">\n    <div class="mdl-cell mdl-cell--12-col">\n        ')
        __M_writer(str(ui.bar(crumbs)))
        __M_writer('\n    </div>\n    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--4dp">\n        <div class="mdl-card__media"></div>\n        <div class="mdl-card__title">\n            <h1 class="mdl-card__title-text">')
        __M_writer(filters.html_escape(str(title)))
        __M_writer('</h1>\n        </div>\n        <div class="mdl-card__supporting-text">\n')
        if folders or files:
            __M_writer('            <ul class="mdl-list">\n')
            for name in folders:
                __M_writer('                <li class="mdl-list__item">\n                    <span class="mdl-list__item-primary-content">\n                        <i class="material-icons mdl-list__item-icon">folder_open</i>\n                        <a href="')
                __M_writer(filters.url_escape(str(name)))
                __M_writer('">')
                __M_writer(filters.html_escape(str(name)))
                __M_writer('</a>\n                    </span>\n')
            for name in files:
                __M_writer('                <li class="mdl-list__item">\n                    <span class="mdl-list__item-primary-content">\n                        <i class="material-icons mdl-list__item-icon">insert_drive_file</i>\n                        <a href="')
                __M_writer(filters.url_escape(str(name)))
                __M_writer('.html">')
                __M_writer(filters.html_escape(str(name)))
                __M_writer('</a>\n                    </span>\n')
            __M_writer('            </ul>\n')
        if code:
            __M_writer('                ')
            __M_writer(str(code))
            __M_writer('\n')
        __M_writer('        </div>\n')
        if source_link:
            __M_writer('        <div class="mdl-card__actions mdl-card--border">\n            <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--accent" title="')
            __M_writer(str(messages('Source')))
            __M_writer('" href="')
            __M_writer(str(source_link))
            __M_writer('">')
            __M_writer(str(messages('Source')))
            __M_writer('</a>\n        </div>\n')
        __M_writer('    </div>\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "listing.tmpl", "filename": "themes/overminddl1-mdl/templates/listing.tmpl", "source_encoding": "utf-8", "line_map": {"107": 42, "74": 4, "75": 7, "76": 7, "77": 12, "78": 12, "79": 15, "80": 16, "81": 17, "82": 18, "83": 21, "84": 21, "85": 21, "86": 21, "87": 24, "88": 25, "89": 28, "90": 28, "91": 28, "92": 28, "29": 0, "94": 33, "95": 34, "96": 34, "97": 34, "98": 36, "99": 37, "100": 38, "101": 39, "102": 39, "93": 31, "104": 39, "105": 39, "106": 39, "103": 39, "46": 2, "47": 3, "113": 107, "52": 44, "23": 3, "58": 4}}
__M_END_METADATA
"""
