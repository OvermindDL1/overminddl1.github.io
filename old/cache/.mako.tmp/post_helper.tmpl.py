# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.1002614
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/post_helper.tmpl'
_template_uri = 'post_helper.tmpl'
_source_encoding = 'utf-8'
_exports = ['meta_translations', 'twitter_card_information', 'open_graph_metadata', 'html_tags', 'html_pager', 'mathjax_script']


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
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_meta_translations(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        len = context.get('len', UNDEFINED)
        translations = context.get('translations', UNDEFINED)
        lang = context.get('lang', UNDEFINED)
        sorted = context.get('sorted', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if len(translations) > 1:
            for langname in sorted(translations):
                if langname != lang and post.is_translation_available(langname):
                    __M_writer('                <link rel="alternate" hreflang="')
                    __M_writer(str(langname))
                    __M_writer('" href="')
                    __M_writer(str(post.permalink(langname)))
                    __M_writer('">\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_twitter_card_information(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        twitter_card = context.get('twitter_card', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if twitter_card and twitter_card['use_twitter_cards']:
            __M_writer('    <meta name="twitter:card" content="')
            __M_writer(filters.html_escape(str(twitter_card.get('card', 'summary'))))
            __M_writer('">\n')
            if 'site:id' in twitter_card:
                __M_writer('    <meta name="twitter:site:id" content="')
                __M_writer(str(twitter_card['site:id']))
                __M_writer('">\n')
            elif 'site' in twitter_card:
                __M_writer('    <meta name="twitter:site" content="')
                __M_writer(str(twitter_card['site']))
                __M_writer('">\n')
            if 'creator:id' in twitter_card:
                __M_writer('    <meta name="twitter:creator:id" content="')
                __M_writer(str(twitter_card['creator:id']))
                __M_writer('">\n')
            elif 'creator' in twitter_card:
                __M_writer('    <meta name="twitter:creator" content="')
                __M_writer(str(twitter_card['creator']))
                __M_writer('">\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_open_graph_metadata(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        lang = context.get('lang', UNDEFINED)
        use_open_graph = context.get('use_open_graph', UNDEFINED)
        abs_link = context.get('abs_link', UNDEFINED)
        url_replacer = context.get('url_replacer', UNDEFINED)
        permalink = context.get('permalink', UNDEFINED)
        blog_title = context.get('blog_title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if use_open_graph:
            __M_writer('    <meta property="og:site_name" content="')
            __M_writer(filters.html_escape(str(blog_title)))
            __M_writer('">\n    <meta property="og:title" content="')
            __M_writer(filters.html_escape(str(post.title()[:70])))
            __M_writer('">\n    <meta property="og:url" content="')
            __M_writer(str(abs_link(permalink)))
            __M_writer('">\n')
            if post.description():
                __M_writer('    <meta property="og:description" content="')
                __M_writer(filters.html_escape(str(post.description()[:200])))
                __M_writer('">\n')
            else:
                __M_writer('    <meta property="og:description" content="')
                __M_writer(filters.html_escape(str(post.text(strip_html=True)[:200])))
                __M_writer('">\n')
            if post.previewimage:
                __M_writer('    <meta property="og:image" content="')
                __M_writer(str(url_replacer(permalink, post.previewimage, lang, 'absolute')))
                __M_writer('">\n')
            __M_writer('    <meta property="og:type" content="article">\n')
            if post.date.isoformat():
                __M_writer('    <meta property="article:published_time" content="')
                __M_writer(str(post.formatted_date('webiso')))
                __M_writer('">\n')
            if post.tags:
                for tag in post.tags:
                    __M_writer('           <meta property="article:tag" content="')
                    __M_writer(filters.html_escape(str(tag)))
                    __M_writer('">\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_tags(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        _link = context.get('_link', UNDEFINED)
        hidden_tags = context.get('hidden_tags', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if post.tags:
            for tag in post.tags:
                if tag not in hidden_tags:
                    __M_writer('              <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored mdl-button--accent site-post__tag" rel="tag" title="')
                    __M_writer(filters.html_escape(str(tag)))
                    __M_writer('" href="')
                    __M_writer(str(_link('tag', tag)))
                    __M_writer('">')
                    __M_writer(filters.html_escape(str(tag)))
                    __M_writer('</a>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_pager(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        messages = context.get('messages', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if post.prev_post or post.next_post:
            __M_writer('        <nav class="site-navigation hidden-print pager mdl-cell mdl-cell--12-col">\n')
            if post.prev_post:
                __M_writer('                <a href="')
                __M_writer(str(post.prev_post.permalink()))
                __M_writer('" class="site-navigation__button site-navigation__previous" rel="prev" title="')
                __M_writer(filters.html_escape(str(post.prev_post.title())))
                __M_writer('">\n                  <button class="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect">\n                    <i class="material-icons" role="presentation">arrow_back</i>\n                  </button>\n                  ')
                __M_writer(str(messages("Previous post")))
                __M_writer('\n                </a>\n')
            __M_writer('            <div class="section-spacer"></div>\n')
            if post.next_post:
                __M_writer('                <a href="')
                __M_writer(str(post.next_post.permalink()))
                __M_writer('" class="site-navigation__button site-navigation__next" rel="next" title="')
                __M_writer(filters.html_escape(str(post.next_post.title())))
                __M_writer('">\n                  ')
                __M_writer(str(messages("Next post")))
                __M_writer('\n                  <button class="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect">\n                    <i class="material-icons" role="presentation">arrow_forward</i>\n                  </button>\n                </a>\n')
            __M_writer('        </nav>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_mathjax_script(context,post):
    __M_caller = context.caller_stack._push_frame()
    try:
        use_katex = context.get('use_katex', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if post.is_mathjax:
            if use_katex:
                __M_writer('            <script src="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min.js"></script>\n            <script src="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/contrib/auto-render.min.js"></script>\n            <script>\n                renderMathInElement(document.body);\n            </script>\n')
            else:
                __M_writer('            <script type="text/javascript" src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"> </script>\n            <script type="text/x-mathjax-config">\n            MathJax.Hub.Config({tex2jax: {inlineMath: [[\'$latex \',\'$\'], [\'\\\\(\',\'\\\\)\']]}});\n            </script>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "post_helper.tmpl", "filename": "themes/overminddl1-mdl/templates/post_helper.tmpl", "source_encoding": "utf-8", "line_map": {"16": 0, "21": 2, "22": 11, "23": 21, "24": 45, "25": 74, "26": 90, "27": 107, "33": 3, "41": 3, "42": 4, "43": 5, "44": 6, "45": 7, "46": 7, "47": 7, "48": 7, "49": 7, "55": 76, "60": 76, "61": 77, "62": 78, "63": 78, "64": 78, "65": 79, "66": 80, "67": 80, "68": 80, "69": 81, "70": 82, "71": 82, "72": 82, "73": 84, "74": 85, "75": 85, "76": 85, "77": 86, "78": 87, "79": 87, "80": 87, "86": 47, "96": 47, "97": 48, "98": 49, "99": 49, "100": 49, "101": 50, "102": 50, "103": 51, "104": 51, "105": 52, "106": 53, "107": 53, "108": 53, "109": 54, "110": 55, "111": 55, "112": 55, "113": 57, "114": 58, "115": 58, "116": 58, "117": 60, "118": 65, "119": 66, "120": 66, "121": 66, "122": 68, "123": 69, "124": 70, "125": 70, "126": 70, "132": 13, "138": 13, "139": 14, "140": 15, "141": 16, "142": 17, "143": 17, "144": 17, "145": 17, "146": 17, "147": 17, "148": 17, "154": 23, "159": 23, "160": 24, "161": 25, "162": 26, "163": 27, "164": 27, "165": 27, "166": 27, "167": 27, "168": 31, "169": 31, "170": 34, "171": 35, "172": 36, "173": 36, "174": 36, "175": 36, "176": 36, "177": 37, "178": 37, "179": 43, "185": 92, "190": 92, "191": 93, "192": 94, "193": 95, "194": 100, "195": 101, "201": 195}}
__M_END_METADATA
"""
