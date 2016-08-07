# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.4198
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/list.tmpl'
_template_uri = 'list.tmpl'
_source_encoding = 'utf-8'
_exports = ['content']


def _mako_get_namespace(context, name):
    try:
        return context.namespaces[(__name__, name)]
    except KeyError:
        _mako_generate_namespaces(context)
        return context.namespaces[(__name__, name)]
def _mako_generate_namespaces(context):
    pass
def _mako_inherit(template, context):
    _mako_generate_namespaces(context)
    return runtime._inherit_from(context, 'base.tmpl', _template_uri)
def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        messages = context.get('messages', UNDEFINED)
        def content():
            return render_content(context._locals(__M_locals))
        items = context.get('items', UNDEFINED)
        title = context.get('title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'content'):
            context['self'].content(**pageargs)
        

        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_content(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        messages = context.get('messages', UNDEFINED)
        def content():
            return render_content(context)
        items = context.get('items', UNDEFINED)
        title = context.get('title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n<div class="site-page site-card mdl-grid site-page-list">\n    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--4dp">\n        <article class="list-page">\n            <div class="mdl-card__media"></div>\n            <div class="mdl-card__title">\n                <h1 class="mdl-card__title-text">')
        __M_writer(filters.html_escape(str(title)))
        __M_writer('</h1>\n            </div>\n            <div class="mdl-grid mdl-card__supporting-text">\n')
        if items:
            __M_writer('                <ul class="mdl-card mdl-cell mdl-cell--12-col mdl-list list-page-items">\n')
            for text, link, count in items:
                __M_writer('                    <li class="mdl-list__item mdl-list__item--two-line">\n                        <span class="mdl-list__item-primary-content">\n                            <i class="material-icons mdl-list__item-icon">archive</i>\n                            <a href="')
                __M_writer(str(link))
                __M_writer('">')
                __M_writer(filters.html_escape(str(text)))
                __M_writer('</a>\n                            <span class="mdl-list__item-sub-title">Total:\n')
                if count:
                    __M_writer('                                    <span>')
                    __M_writer(str(count))
                    __M_writer('</span>\n')
                else:
                    __M_writer('                                    <span>0</span>\n')
                __M_writer('                                    post(s)\n                            </span>\n                        </span>\n                    </li>\n')
            __M_writer('                </ul>\n')
        else:
            __M_writer('                <p>')
            __M_writer(str(messages("Nothing found.")))
            __M_writer('</p>\n')
        __M_writer('            </div>\n        </article>\n    </div>\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "list.tmpl", "filename": "themes/overminddl1-mdl/templates/list.tmpl", "source_encoding": "utf-8", "line_map": {"64": 19, "65": 19, "66": 19, "67": 19, "68": 21, "69": 22, "70": 22, "71": 22, "72": 23, "73": 24, "74": 26, "75": 31, "76": 32, "77": 33, "78": 33, "79": 33, "80": 35, "86": 80, "27": 0, "37": 2, "42": 39, "48": 4, "57": 4, "58": 10, "59": 10, "60": 13, "61": 14, "62": 15, "63": 16}}
__M_END_METADATA
"""
