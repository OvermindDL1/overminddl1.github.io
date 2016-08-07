# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.3319976
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/tags.tmpl'
_template_uri = 'tags.tmpl'
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
        items = context.get('items', UNDEFINED)
        len = context.get('len', UNDEFINED)
        cat_hierarchy = context.get('cat_hierarchy', UNDEFINED)
        cat_items = context.get('cat_items', UNDEFINED)
        def content():
            return render_content(context._locals(__M_locals))
        messages = context.get('messages', UNDEFINED)
        hidden_tags = context.get('hidden_tags', UNDEFINED)
        range = context.get('range', UNDEFINED)
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
        items = context.get('items', UNDEFINED)
        len = context.get('len', UNDEFINED)
        cat_hierarchy = context.get('cat_hierarchy', UNDEFINED)
        cat_items = context.get('cat_items', UNDEFINED)
        def content():
            return render_content(context)
        messages = context.get('messages', UNDEFINED)
        hidden_tags = context.get('hidden_tags', UNDEFINED)
        range = context.get('range', UNDEFINED)
        title = context.get('title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n<div class="site-page site-card mdl-grid site-page-tags">\n    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--4dp">\n        <article class="tag-index">\n            <div class="mdl-card__media"></div>\n            <div class="mdl-card__title">\n                <h1 class="mdl-card__title-text">')
        __M_writer(filters.html_escape(str(title)))
        __M_writer('</h1>\n            </div>\n            <div class="mdl-grid mdl-card__supporting-text">\n')
        if cat_items:
            if items:
                __M_writer('                    <h2 class="mdl-cell mdl-cell--12-col mdl-typography--headline">')
                __M_writer(str(messages("Categories")))
                __M_writer('</h2>\n')
            __M_writer('                <div class="mdl-cell mdl-cell--12-col">\n')
            for text, full_name, path, link, indent_levels, indent_change_before, indent_change_after in cat_hierarchy:
                for i in range(indent_change_before):
                    __M_writer('                        <ul class="mdl-list tag-index-categories">\n')
                __M_writer('                    <li class="mdl-list__item">\n                        <span class="mdl-list__item-primary-content">\n                            <i class="material-icons mdl-list__item-icon">label</i>\n                            <a class="reference" href="')
                __M_writer(str(link))
                __M_writer('">')
                __M_writer(str(text))
                __M_writer('</a>\n                        </span>\n')
                if indent_change_after <= 0:
                    __M_writer('                        </li>\n')
                for i in range(-indent_change_after):
                    __M_writer('                        </ul>\n')
                    if i + 1 < len(indent_levels):
                        __M_writer('                            </li>\n')
            __M_writer('                </div>\n')
            if items:
                __M_writer('                    <h2 class="mdl-cell mdl-cell--12-col mdl-typography--headline">')
                __M_writer(str(messages("Tags")))
                __M_writer('</h2>\n')
        __M_writer('            <div class="mdl-cell mdl-cell--12-col">\n')
        if items:
            __M_writer('                <ul class="mdl-list tag-index-tags">\n')
            for text, link in items:
                if text not in hidden_tags:
                    __M_writer('                        <li class="mdl-list__item">\n                            <span class="mdl-list__item-primary-content">\n                                <i class="material-icons mdl-list__item-icon">label</i>\n                                <a class="reference post-title" href="')
                    __M_writer(str(link))
                    __M_writer('">')
                    __M_writer(filters.html_escape(str(text)))
                    __M_writer('</a>\n                            </span>\n                        </li>\n')
            __M_writer('                </ul>\n')
        __M_writer('            </div>\n            </div>\n        </article>\n    </div>\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "tags.tmpl", "filename": "themes/overminddl1-mdl/templates/tags.tmpl", "source_encoding": "utf-8", "line_map": {"27": 0, "42": 2, "47": 62, "53": 4, "67": 4, "68": 10, "69": 10, "70": 13, "71": 14, "72": 15, "73": 15, "74": 15, "75": 17, "76": 18, "77": 19, "78": 20, "79": 22, "80": 25, "81": 25, "82": 25, "83": 25, "84": 27, "85": 28, "86": 30, "87": 31, "88": 32, "89": 33, "90": 37, "91": 38, "92": 39, "93": 39, "94": 39, "95": 42, "96": 43, "97": 44, "98": 45, "99": 46, "100": 47, "101": 50, "102": 50, "103": 50, "104": 50, "105": 55, "106": 57, "112": 106}}
__M_END_METADATA
"""
