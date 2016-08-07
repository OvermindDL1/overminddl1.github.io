# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.0296628
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/index.tmpl'
_template_uri = 'index.tmpl'
_source_encoding = 'utf-8'
_exports = ['extra_head', 'content', 'content_header']


def _mako_get_namespace(context, name):
    try:
        return context.namespaces[(__name__, name)]
    except KeyError:
        _mako_generate_namespaces(context)
        return context.namespaces[(__name__, name)]
def _mako_generate_namespaces(context):
    ns = runtime.TemplateNamespace('comments', context._clean_inheritance_tokens(), templateuri='comments_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'comments')] = ns

    ns = runtime.TemplateNamespace('pheader', context._clean_inheritance_tokens(), templateuri='post_header.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'pheader')] = ns

    ns = runtime.TemplateNamespace('helper', context._clean_inheritance_tokens(), templateuri='index_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'helper')] = ns

def _mako_inherit(template, context):
    _mako_generate_namespaces(context)
    return runtime._inherit_from(context, 'base.tmpl', _template_uri)
def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        index_file = context.get('index_file', UNDEFINED)
        helper = _mako_get_namespace(context, 'helper')
        comments = _mako_get_namespace(context, 'comments')
        pheader = _mako_get_namespace(context, 'pheader')
        index_teasers = context.get('index_teasers', UNDEFINED)
        def content():
            return render_content(context._locals(__M_locals))
        parent = context.get('parent', UNDEFINED)
        permalink = context.get('permalink', UNDEFINED)
        def extra_head():
            return render_extra_head(context._locals(__M_locals))
        posts = context.get('posts', UNDEFINED)
        def content_header():
            return render_content_header(context._locals(__M_locals))
        post_type = context.get('post_type', UNDEFINED)
        title = context.get('title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        __M_writer('\n')
        __M_writer('\n')
        __M_writer('\n\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'extra_head'):
            context['self'].extra_head(**pageargs)
        

        __M_writer('\n\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'content'):
            context['self'].content(**pageargs)
        

        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_extra_head(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        def extra_head():
            return render_extra_head(context)
        posts = context.get('posts', UNDEFINED)
        parent = context.get('parent', UNDEFINED)
        index_file = context.get('index_file', UNDEFINED)
        permalink = context.get('permalink', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n    ')
        __M_writer(str(parent.extra_head()))
        __M_writer('\n')
        if posts and (permalink == '/' or permalink == '/' + index_file):
            __M_writer('        <link rel="prefetch" href="')
            __M_writer(str(posts[0].permalink()))
            __M_writer('" type="text/html">\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_content(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        helper = _mako_get_namespace(context, 'helper')
        comments = _mako_get_namespace(context, 'comments')
        pheader = _mako_get_namespace(context, 'pheader')
        index_teasers = context.get('index_teasers', UNDEFINED)
        def content():
            return render_content(context)
        posts = context.get('posts', UNDEFINED)
        def content_header():
            return render_content_header(context)
        post_type = context.get('post_type', UNDEFINED)
        title = context.get('title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n<div class="site-posts site-card mdl-grid">\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'content_header'):
            context['self'].content_header(**pageargs)
        

        __M_writer('\n<div class="postindex">\n')
        for post in posts:
            __M_writer('<div class="mdl-card mdl-cell mdl-cell--12-col\n')
            if post.meta('type'):
                __M_writer('    site-post-')
                __M_writer(str(post.meta('type')))
                __M_writer('\n')
            if not post.meta('no-card-shadow'):
                __M_writer('    mdl-shadow--4dp\n')
            __M_writer('">\n')
            if post_type:
                __M_writer('        <button class="mdl-button mdl-js-button mdl-button--fab mdl-color--accent mdl-js-ripple-effect">\n            <i class="material-icons mdl-color-text--white" role="presentation">\n                ')
                __M_writer(str(post_type[post.meta('type')]))
                __M_writer('\n            </i>\n            <span class="visuallyhidden">')
                __M_writer(str(post.meta('type')))
                __M_writer('</span>\n        </button>\n')
            __M_writer('    <article class="h-entry">\n')
            if not post.meta('no-card-media'):
                __M_writer('        <div class="mdl-card__media"></div>\n')
            if title and not post.meta('hidetitle'):
                __M_writer('    <div class="mdl-card__title">\n        <h1 class="mdl-card__title-text p-name entry-title"><a href="')
                __M_writer(str(post.permalink()))
                __M_writer('" class="u-url">')
                __M_writer(filters.html_escape(str(post.title())))
                __M_writer('</a></h1>\n    </div>\n')
            if index_teasers:
                __M_writer('    <div class="mdl-card__supporting-text p-summary entry-summary">\n    ')
                __M_writer(str(post.text(teaser_only=True)))
                __M_writer('\n')
            else:
                __M_writer('    <div class="mdl-card__supporting-text e-content entry-content">\n    ')
                __M_writer(str(post.text(teaser_only=False)))
                __M_writer('\n')
            __M_writer('    </div>\n    ')
            __M_writer(str(pheader.html_post_metadata(post)))
            __M_writer('\n    </article>\n</div>\n')
        __M_writer('</div>\n')
        __M_writer(str(helper.html_pager()))
        __M_writer('\n')
        __M_writer(str(comments.comment_link_script()))
        __M_writer('\n')
        __M_writer(str(helper.mathjax_script(posts)))
        __M_writer('\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_content_header(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        def content_header():
            return render_content_header(context)
        __M_writer = context.writer()
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "index.tmpl", "filename": "themes/overminddl1-mdl/templates/index.tmpl", "source_encoding": "utf-8", "line_map": {"128": 28, "129": 30, "130": 30, "131": 32, "132": 32, "133": 35, "134": 36, "135": 37, "136": 39, "137": 40, "138": 41, "139": 41, "140": 41, "141": 41, "142": 44, "143": 45, "144": 46, "145": 46, "146": 47, "147": 48, "148": 49, "149": 49, "150": 51, "23": 4, "152": 52, "153": 56, "26": 3, "155": 57, "156": 58, "29": 2, "158": 59, "159": 59, "35": 0, "165": 16, "157": 58, "176": 165, "56": 2, "57": 3, "58": 4, "59": 5, "151": 52, "64": 12, "69": 61, "75": 7, "85": 7, "86": 8, "87": 8, "88": 9, "89": 10, "90": 10, "91": 10, "97": 14, "154": 57, "112": 14, "117": 16, "118": 18, "119": 19, "120": 20, "121": 21, "122": 21, "123": 21, "124": 23, "125": 24, "126": 26, "127": 27}}
__M_END_METADATA
"""
