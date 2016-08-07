# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.3561096
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/tag.tmpl'
_template_uri = 'tag.tmpl'
_source_encoding = 'utf-8'
_exports = ['extra_head', 'content']


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
    return runtime._inherit_from(context, 'list_post.tmpl', _template_uri)
def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        date_format = context.get('date_format', UNDEFINED)
        sorted = context.get('sorted', UNDEFINED)
        len = context.get('len', UNDEFINED)
        description = context.get('description', UNDEFINED)
        _link = context.get('_link', UNDEFINED)
        translations = context.get('translations', UNDEFINED)
        def content():
            return render_content(context._locals(__M_locals))
        parent = context.get('parent', UNDEFINED)
        tag = context.get('tag', UNDEFINED)
        messages = context.get('messages', UNDEFINED)
        def extra_head():
            return render_extra_head(context._locals(__M_locals))
        posts = context.get('posts', UNDEFINED)
        subcategories = context.get('subcategories', UNDEFINED)
        kind = context.get('kind', UNDEFINED)
        generate_rss = context.get('generate_rss', UNDEFINED)
        title = context.get('title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'extra_head'):
            context['self'].extra_head(**pageargs)
        

        __M_writer('\n\n\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'content'):
            context['self'].content(**pageargs)
        

        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_extra_head(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        sorted = context.get('sorted', UNDEFINED)
        len = context.get('len', UNDEFINED)
        translations = context.get('translations', UNDEFINED)
        _link = context.get('_link', UNDEFINED)
        parent = context.get('parent', UNDEFINED)
        tag = context.get('tag', UNDEFINED)
        def extra_head():
            return render_extra_head(context)
        kind = context.get('kind', UNDEFINED)
        generate_rss = context.get('generate_rss', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n    ')
        __M_writer(str(parent.extra_head()))
        __M_writer('\n')
        if len(translations) > 1 and generate_rss:
            for language in sorted(translations):
                __M_writer('            <link rel="alternate" type="application/rss+xml" title="RSS for ')
                __M_writer(str(kind))
                __M_writer(' ')
                __M_writer(filters.html_escape(str(tag)))
                __M_writer(' (')
                __M_writer(str(language))
                __M_writer(')" href="')
                __M_writer(str(_link(kind + "_rss", tag, language)))
                __M_writer('">\n')
        elif generate_rss:
            __M_writer('        <link rel="alternate" type="application/rss+xml" title="RSS for ')
            __M_writer(str(kind))
            __M_writer(' ')
            __M_writer(filters.html_escape(str(tag)))
            __M_writer('" href="')
            __M_writer(str(_link(kind + "_rss", tag)))
            __M_writer('">\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_content(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        date_format = context.get('date_format', UNDEFINED)
        sorted = context.get('sorted', UNDEFINED)
        len = context.get('len', UNDEFINED)
        translations = context.get('translations', UNDEFINED)
        _link = context.get('_link', UNDEFINED)
        posts = context.get('posts', UNDEFINED)
        def content():
            return render_content(context)
        tag = context.get('tag', UNDEFINED)
        messages = context.get('messages', UNDEFINED)
        description = context.get('description', UNDEFINED)
        subcategories = context.get('subcategories', UNDEFINED)
        kind = context.get('kind', UNDEFINED)
        generate_rss = context.get('generate_rss', UNDEFINED)
        title = context.get('title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n<div class="site-page site-card mdl-grid site-page-tag">\n    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--4dp">\n        <article class="tag-page">\n            <div class="mdl-card__media"></div>\n            <div class="mdl-card__title">\n                <h1 class="mdl-card__title-text">')
        __M_writer(filters.html_escape(str(title)))
        __M_writer('</h1>\n            </div>\n')
        if description:
            __M_writer('            <div class="mdl-card__supporting-text description">\n                <p>')
            __M_writer(str(description))
            __M_writer('</p>\n            </div>\n')
        if subcategories:
            __M_writer('            <div class="mdl-card__supporting-text subcategories">\n                ')
            __M_writer(str(messages('Subcategories:')))
            __M_writer('\n                <ul class="mdl-list tag-page-subcategories">\n')
            for name, link in subcategories:
                __M_writer('                    <li class="mdl-list__item"><a href="')
                __M_writer(str(link))
                __M_writer('">')
                __M_writer(filters.html_escape(str(name)))
                __M_writer('</a></li>\n')
            __M_writer('                </ul>\n            </div>\n')
        __M_writer('\n            <div class="mdl-card__supporting-text">\n                <div class="mdl-cell mdl-cell--12-col">\n')
        if posts:
            __M_writer('                    <ul class="mdl-list tag-page-items">\n')
            for post in posts:
                __M_writer('                        <li class="mdl-list__item mdl-list__item--two-line">\n                            <span class="mdl-list__item-primary-content">\n                                <i class="material-icons mdl-list__item-icon">subject</i>\n                                <a href="')
                __M_writer(str(post.permalink()))
                __M_writer('" class="post-title">')
                __M_writer(filters.html_escape(str(post.title())))
                __M_writer('</a>\n                                <span class="mdl-list__item-sub-title">\n                                    <time class="listdate" datetime="')
                __M_writer(str(post.formatted_date('webiso')))
                __M_writer('" title="')
                __M_writer(filters.html_escape(str(post.formatted_date(date_format))))
                __M_writer('">')
                __M_writer(filters.html_escape(str(post.formatted_date(date_format))))
                __M_writer('</time>\n                                </span>\n                            </span>\n                        </li>\n')
            __M_writer('                    </ul>\n')
        __M_writer('                </div>\n            </div>\n            <div class="mdl-card__actions mdl-card--border">\n')
        if len(translations) > 1 and generate_rss:
            for language in sorted(translations):
                __M_writer('                    <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--accent" title="')
                __M_writer(str(messages('RSS feed', language)))
                __M_writer(' (')
                __M_writer(str(language))
                __M_writer(')" href="')
                __M_writer(str(_link(kind + "_rss", tag, language)))
                __M_writer('" hreflang="')
                __M_writer(str(language))
                __M_writer('" type="application/rss+xml">')
                __M_writer(str(messages('RSS feed', language)))
                __M_writer(' (')
                __M_writer(str(language))
                __M_writer(')</a>\n')
        elif generate_rss:
            __M_writer('                    <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--accent" title="')
            __M_writer(str(messages('RSS feed')))
            __M_writer('" href="')
            __M_writer(str(_link(kind + "_rss", tag)))
            __M_writer('" type="application/rss+xml">')
            __M_writer(str(messages('RSS feed')))
            __M_writer('</a>\n')
        __M_writer('            </div>\n        </article>\n    </div>\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "tag.tmpl", "filename": "themes/overminddl1-mdl/templates/tag.tmpl", "source_encoding": "utf-8", "line_map": {"27": 0, "50": 2, "55": 13, "60": 71, "66": 4, "80": 4, "81": 5, "82": 5, "83": 6, "84": 7, "85": 8, "86": 8, "87": 8, "88": 8, "89": 8, "90": 8, "91": 8, "92": 8, "93": 8, "94": 10, "95": 11, "96": 11, "97": 11, "98": 11, "99": 11, "100": 11, "101": 11, "107": 16, "126": 16, "127": 22, "128": 22, "129": 24, "130": 25, "131": 26, "132": 26, "133": 29, "134": 30, "135": 31, "136": 31, "137": 33, "138": 34, "139": 34, "140": 34, "141": 34, "142": 34, "143": 36, "144": 39, "145": 42, "146": 43, "147": 44, "148": 45, "149": 48, "150": 48, "151": 48, "152": 48, "153": 50, "154": 50, "155": 50, "156": 50, "157": 50, "158": 50, "159": 55, "160": 57, "161": 60, "162": 61, "163": 62, "164": 62, "165": 62, "166": 62, "167": 62, "168": 62, "169": 62, "170": 62, "171": 62, "172": 62, "173": 62, "174": 62, "175": 62, "176": 64, "177": 65, "178": 65, "179": 65, "180": 65, "181": 65, "182": 65, "183": 65, "184": 67, "190": 184}}
__M_END_METADATA
"""
