# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.0662713
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/post_header.tmpl'
_template_uri = 'post_header.tmpl'
_source_encoding = 'utf-8'
_exports = ['html_post_actions', 'html_post_header', 'html_post_metadata', 'html_translations', 'html_metalink', 'html_sourcelink', 'html_title']


def _mako_get_namespace(context, name):
    try:
        return context.namespaces[(__name__, name)]
    except KeyError:
        _mako_generate_namespaces(context)
        return context.namespaces[(__name__, name)]
def _mako_generate_namespaces(context):
    ns = runtime.TemplateNamespace('comments', context._clean_inheritance_tokens(), templateuri='comments_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'comments')] = ns

    ns = runtime.TemplateNamespace('helper', context._clean_inheritance_tokens(), templateuri='post_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'helper')] = ns

def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        __M_writer = context.writer()
        __M_writer('\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_post_actions(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        def html_metalink(post):
            return render_html_metalink(context,post)
        def html_sourcelink(post):
            return render_html_sourcelink(context,post)
        helper = _mako_get_namespace(context, 'helper')
        __M_writer = context.writer()
        __M_writer('\n    <div class="mdl-grid mdl-card__actions mdl-card--border">\n        ')
        __M_writer(str(helper.html_tags(post)))
        __M_writer('\n        <div class="section-spacer"></div>\n        ')
        __M_writer(str(html_sourcelink(post)))
        __M_writer('\n        ')
        __M_writer(str(html_metalink(post)))
        __M_writer('\n    </div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_post_header(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        def html_title():
            return render_html_title(context)
        def html_translations(post):
            return render_html_translations(context,post)
        __M_writer = context.writer()
        __M_writer('\n    ')
        __M_writer(str(html_title()))
        __M_writer('\n')
        if post.description():
            __M_writer('    <meta name="description" itemprop="description" content="')
            __M_writer(filters.html_escape(str(post.description())))
            __M_writer('">\n')
        __M_writer('    ')
        __M_writer(str(html_translations(post)))
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_post_metadata(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        date_format = context.get('date_format', UNDEFINED)
        comments = _mako_get_namespace(context, 'comments')
        site_has_comments = context.get('site_has_comments', UNDEFINED)
        author_pages_generated = context.get('author_pages_generated', UNDEFINED)
        _link = context.get('_link', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n    <div class="mdl-grid mdl-card__supporting-text mdl-card--border metadata">\n        <div class="mdl-cell mdl-cell--1-col">\n          <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">')
        __M_writer(str("".join([x[0].upper() for x in post.author().split()])))
        __M_writer('</button>\n        </div>\n        <div class="mdl-grid mdl-cell mdl-cell--9-col">\n            <span class="mdl-cell mdl-cell--12-col site-post__author no-margin-bottom">\n')
        if author_pages_generated:
            __M_writer('                <a href="')
            __M_writer(str(_link('author', post.author())))
            __M_writer('">')
            __M_writer(filters.html_escape(str(post.author())))
            __M_writer('</a>\n')
        else:
            __M_writer('                ')
            __M_writer(filters.html_escape(str(post.author())))
            __M_writer('\n')
        __M_writer('            </span>\n            <span class="mdl-cell mdl-cell--12-col site-post__date">\n                <time class="published dt-published" datetime="')
        __M_writer(str(post.formatted_date('webiso')))
        __M_writer('" itemprop="datePublished" title="')
        __M_writer(filters.html_escape(str(post.formatted_date(date_format))))
        __M_writer('">')
        __M_writer(filters.html_escape(str(post.formatted_date(date_format))))
        __M_writer('\n                </time>\n            </span>\n        </div>\n')
        if not post.meta('nocomments') and site_has_comments:
            __M_writer('        <span class="mdl-cell mdl-cell--2-col site-post__total-comment">\n                ')
            __M_writer(str(comments.comment_link(post.permalink(), post._base_path)))
            __M_writer('\n        </span>\n')
        __M_writer('    </div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_translations(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        len = context.get('len', UNDEFINED)
        translations = context.get('translations', UNDEFINED)
        sorted = context.get('sorted', UNDEFINED)
        lang = context.get('lang', UNDEFINED)
        messages = context.get('messages', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if len(post.translated_to) > 1:
            __M_writer('        <div class="metadata posttranslations translations">\n            <h2 class="posttranslations-intro">')
            __M_writer(str(messages("Also available in:")))
            __M_writer('</h2>\n')
            for langname in sorted(translations):
                if langname != lang and post.is_translation_available(langname):
                    __M_writer('                <p><a href="')
                    __M_writer(str(post.permalink(langname)))
                    __M_writer('" rel="alternate" hreflang="')
                    __M_writer(str(langname))
                    __M_writer('">')
                    __M_writer(str(messages("LANGUAGE", langname)))
                    __M_writer('</a></p>\n')
            __M_writer('        </div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_metalink(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        messages = context.get('messages', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if post.meta('link'):
            __M_writer('    <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--accent metadata-original-site-link" rel="tag" title="')
            __M_writer(str(messages('Original site')))
            __M_writer('" href="')
            __M_writer(str(post.meta('link')))
            __M_writer('">')
            __M_writer(str(messages('Original site')))
            __M_writer('</a>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_sourcelink(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        show_sourcelink = context.get('show_sourcelink', UNDEFINED)
        messages = context.get('messages', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if show_sourcelink:
            __M_writer('    <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--accent site-post__source-link" rel="tag" title="')
            __M_writer(str(messages('Source')))
            __M_writer('" href="')
            __M_writer(str(post.source_link()))
            __M_writer('">')
            __M_writer(str(messages('Source')))
            __M_writer('</a>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_title(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        post = context.get('post', UNDEFINED)
        title = context.get('title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if title and not post.meta('hidetitle'):
            __M_writer('    <div class="mdl-card__title">\n        <h1 class="mdl-card__title-text p-name entry-title"\n            itemprop="headline name">')
            __M_writer(filters.html_escape(str(post.title())))
            __M_writer('</h1>\n    </div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "post_header.tmpl", "filename": "themes/overminddl1-mdl/templates/post_header.tmpl", "source_encoding": "utf-8", "line_map": {"23": 3, "26": 2, "29": 0, "34": 2, "35": 3, "36": 12, "37": 25, "38": 31, "39": 37, "40": 45, "41": 71, "42": 80, "48": 73, "57": 73, "58": 75, "59": 75, "60": 77, "61": 77, "62": 78, "63": 78, "69": 39, "77": 39, "78": 40, "79": 40, "80": 41, "81": 42, "82": 42, "83": 42, "84": 44, "85": 44, "86": 44, "92": 47, "101": 47, "102": 50, "103": 50, "104": 54, "105": 55, "106": 55, "107": 55, "108": 55, "109": 55, "110": 56, "111": 57, "112": 57, "113": 57, "114": 59, "115": 61, "116": 61, "117": 61, "118": 61, "119": 61, "120": 61, "121": 65, "122": 66, "123": 67, "124": 67, "125": 70, "131": 14, "140": 14, "141": 15, "142": 16, "143": 17, "144": 17, "145": 18, "146": 19, "147": 20, "148": 20, "149": 20, "150": 20, "151": 20, "152": 20, "153": 20, "154": 23, "160": 33, "165": 33, "166": 34, "167": 35, "168": 35, "169": 35, "170": 35, "171": 35, "172": 35, "173": 35, "179": 27, "185": 27, "186": 28, "187": 29, "188": 29, "189": 29, "190": 29, "191": 29, "192": 29, "193": 29, "199": 5, "205": 5, "206": 6, "207": 7, "208": 9, "209": 9, "215": 209}}
__M_END_METADATA
"""
