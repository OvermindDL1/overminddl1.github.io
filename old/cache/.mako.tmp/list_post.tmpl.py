# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.379885
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/list_post.tmpl'
_template_uri = 'list_post.tmpl'
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
        date_format = context.get('date_format', UNDEFINED)
        posts = context.get('posts', UNDEFINED)
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
        date_format = context.get('date_format', UNDEFINED)
        posts = context.get('posts', UNDEFINED)
        title = context.get('title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n<div class="site-page site-card mdl-grid site-page-list-post">\n    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--4dp">\n        <article class="list-post">\n            <div class="mdl-card__media"></div>\n            <div class="mdl-card__title">\n                <h1 class="mdl-card__title-text">')
        __M_writer(filters.html_escape(str(title)))
        __M_writer('</h1>\n            </div>\n            <div class="mdl-card__supporting-text">\n')
        if posts:
            __M_writer('                <ul class="mdl-list list-post-items">\n')
            for post in posts:
                __M_writer('                    <li class="mdl-list__item mdl-list__item--two-line">\n                        <span class="mdl-list__item-primary-content">\n                            <i class="material-icons mdl-list__item-icon">subject</i>\n                            <a href="')
                __M_writer(str(post.permalink()))
                __M_writer('" class="post-title">')
                __M_writer(filters.html_escape(str(post.title())))
                __M_writer('</a>\n                            <span class="mdl-list__item-sub-title">\n                                <time class="listdate" datetime="')
                __M_writer(str(post.formatted_date('webiso')))
                __M_writer('" title="')
                __M_writer(filters.html_escape(str(post.formatted_date(date_format))))
                __M_writer('">')
                __M_writer(filters.html_escape(str(post.formatted_date(date_format))))
                __M_writer('</time>\n                            </span>\n                        </span>\n                    </li>\n')
            __M_writer('                </ul>\n')
        else:
            __M_writer('                <p>')
            __M_writer(str(messages("No posts found.")))
            __M_writer('</p>\n')
        __M_writer('            </div>\n        </article>\n    </div>\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "list_post.tmpl", "filename": "themes/overminddl1-mdl/templates/list_post.tmpl", "source_encoding": "utf-8", "line_map": {"64": 15, "65": 16, "66": 19, "67": 19, "68": 19, "69": 19, "70": 21, "71": 21, "72": 21, "73": 21, "74": 21, "75": 21, "76": 26, "77": 27, "78": 28, "79": 28, "80": 28, "81": 30, "87": 81, "27": 0, "38": 2, "43": 34, "49": 4, "59": 4, "60": 10, "61": 10, "62": 13, "63": 14}}
__M_END_METADATA
"""
