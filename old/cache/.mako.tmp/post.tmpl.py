# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.3119533
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/post.tmpl'
_template_uri = 'post.tmpl'
_source_encoding = 'utf-8'
_exports = ['extra_head', 'content']


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

    ns = runtime.TemplateNamespace('helper', context._clean_inheritance_tokens(), templateuri='post_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'helper')] = ns

def _mako_inherit(template, context):
    _mako_generate_namespaces(context)
    return runtime._inherit_from(context, 'base.tmpl', _template_uri)
def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        comments = _mako_get_namespace(context, 'comments')
        pheader = _mako_get_namespace(context, 'pheader')
        def content():
            return render_content(context._locals(__M_locals))
        parent = context.get('parent', UNDEFINED)
        post = context.get('post', UNDEFINED)
        messages = context.get('messages', UNDEFINED)
        def extra_head():
            return render_extra_head(context._locals(__M_locals))
        site_has_comments = context.get('site_has_comments', UNDEFINED)
        helper = _mako_get_namespace(context, 'helper')
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
        parent = context.get('parent', UNDEFINED)
        post = context.get('post', UNDEFINED)
        helper = _mako_get_namespace(context, 'helper')
        __M_writer = context.writer()
        __M_writer('\n    ')
        __M_writer(str(parent.extra_head()))
        __M_writer('\n')
        if post.meta('keywords'):
            __M_writer('    <meta name="keywords" content="')
            __M_writer(filters.html_escape(str(post.meta('keywords'))))
            __M_writer('">\n')
        if post.description():
            __M_writer('    <meta name="description" content="')
            __M_writer(filters.html_escape(str(post.description())))
            __M_writer('">\n')
        __M_writer('    <meta name="author" content="')
        __M_writer(filters.html_escape(str(post.author())))
        __M_writer('">\n')
        if post.prev_post:
            __M_writer('        <link rel="prev" href="')
            __M_writer(str(post.prev_post.permalink()))
            __M_writer('" title="')
            __M_writer(filters.html_escape(str(post.prev_post.title())))
            __M_writer('" type="text/html">\n')
        if post.next_post:
            __M_writer('        <link rel="next" href="')
            __M_writer(str(post.next_post.permalink()))
            __M_writer('" title="')
            __M_writer(filters.html_escape(str(post.next_post.title())))
            __M_writer('" type="text/html">\n')
        if post.is_draft:
            __M_writer('        <meta name="robots" content="noindex">\n')
        __M_writer('    ')
        __M_writer(str(helper.open_graph_metadata(post)))
        __M_writer('\n    ')
        __M_writer(str(helper.twitter_card_information(post)))
        __M_writer('\n    ')
        __M_writer(str(helper.meta_translations(post)))
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_content(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        site_has_comments = context.get('site_has_comments', UNDEFINED)
        def content():
            return render_content(context)
        post = context.get('post', UNDEFINED)
        messages = context.get('messages', UNDEFINED)
        comments = _mako_get_namespace(context, 'comments')
        pheader = _mako_get_namespace(context, 'pheader')
        helper = _mako_get_namespace(context, 'helper')
        __M_writer = context.writer()
        __M_writer('\n<div class="site-post site-card mdl-grid">\n    <div class="mdl-card mdl-cell mdl-cell--12-col\n')
        if post.meta('type'):
            __M_writer('    site-post-')
            __M_writer(str(post.meta('type')))
            __M_writer('\n')
        if not post.meta('no-card-shadow'):
            __M_writer('    mdl-shadow--4dp\n')
        __M_writer('">\n        <article class="h-entry hentry postpage" itemscope="itemscope" itemtype="http://schema.org/Article">\n')
        if not post.meta('no-card-media'):
            __M_writer('                <div class="mdl-card__media"></div>\n')
        __M_writer('            ')
        __M_writer(str(pheader.html_post_header(post)))
        __M_writer('\n            <div class="mdl-card__supporting-text e-content entry-content" itemprop="articleBody text">\n                ')
        __M_writer(str(post.text()))
        __M_writer('\n            </div>\n            ')
        __M_writer(str(pheader.html_post_metadata(post)))
        __M_writer('\n            ')
        __M_writer(str(pheader.html_post_actions(post)))
        __M_writer('\n')
        if not post.meta('nocomments') and site_has_comments:
            __M_writer('            <div class="mdl-color-text--primary-contrast mdl-card__supporting-text comments hidden-print">\n                <h2>')
            __M_writer(str(messages("Comments")))
            __M_writer('</h2>\n                ')
            __M_writer(str(comments.comment_form(post.permalink(absolute=True), post.title(), post._base_path)))
            __M_writer('\n            </div>\n')
        __M_writer('            ')
        __M_writer(str(helper.mathjax_script(post)))
        __M_writer('\n        </article>\n    </div>\n    ')
        __M_writer(str(helper.html_pager(post)))
        __M_writer('\n    ')
        __M_writer(str(comments.comment_link_script()))
        __M_writer('\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "post.tmpl", "filename": "themes/overminddl1-mdl/templates/post.tmpl", "source_encoding": "utf-8", "line_map": {"131": 30, "132": 33, "133": 34, "134": 34, "135": 34, "136": 36, "137": 37, "138": 39, "139": 41, "140": 42, "141": 44, "142": 44, "143": 44, "144": 46, "145": 46, "146": 48, "147": 48, "148": 49, "149": 49, "150": 50, "23": 4, "152": 52, "153": 52, "26": 3, "155": 53, "156": 56, "29": 2, "158": 56, "159": 59, "160": 59, "161": 60, "162": 60, "35": 0, "168": 162, "154": 53, "157": 56, "51": 2, "52": 3, "53": 4, "54": 5, "59": 28, "151": 51, "64": 62, "70": 7, "79": 7, "80": 8, "81": 8, "82": 9, "83": 10, "84": 10, "85": 10, "86": 12, "87": 13, "88": 13, "89": 13, "90": 15, "91": 15, "92": 15, "93": 16, "94": 17, "95": 17, "96": 17, "97": 17, "98": 17, "99": 19, "100": 20, "101": 20, "102": 20, "103": 20, "104": 20, "105": 22, "106": 23, "107": 25, "108": 25, "109": 25, "110": 26, "111": 26, "112": 27, "113": 27, "119": 30}}
__M_END_METADATA
"""
