# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.0465348
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/index_helper.tmpl'
_template_uri = 'index_helper.tmpl'
_source_encoding = 'utf-8'
_exports = ['html_pager', 'mathjax_script']


def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        __M_writer = context.writer()
        __M_writer('\n\n')
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_pager(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        prevlink = context.get('prevlink', UNDEFINED)
        nextlink = context.get('nextlink', UNDEFINED)
        messages = context.get('messages', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if prevlink or nextlink:
            __M_writer('        <nav class="site-navigation postindexpager pager mdl-cell mdl-cell--12-col">\n')
            if prevlink:
                __M_writer('                <a href="')
                __M_writer(str(prevlink))
                __M_writer('" class="site-navigation__button site-navigation__previous" rel="prev" title="')
                __M_writer(str(messages('Newer posts')))
                __M_writer('">\n                  <button class="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect">\n                    <i class="material-icons" role="presentation">arrow_back</i>\n                  </button>\n                  ')
                __M_writer(str(messages("Newer posts")))
                __M_writer('\n                </a>\n')
            __M_writer('            <div class="section-spacer"></div>\n')
            if nextlink:
                __M_writer('                <a href="')
                __M_writer(str(nextlink))
                __M_writer('" class="site-navigation__button site-navigation__next" rel="next" title="')
                __M_writer(str(messages('Older posts')))
                __M_writer('">\n                  ')
                __M_writer(str(messages("Older posts")))
                __M_writer('\n                  <button class="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect">\n                    <i class="material-icons" role="presentation">arrow_forward</i>\n                  </button>\n                </a>\n')
            __M_writer('        </nav>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_mathjax_script(context,posts):
    __M_caller = context.caller_stack._push_frame()
    try:
        any = context.get('any', UNDEFINED)
        use_katex = context.get('use_katex', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if any(post.is_mathjax for post in posts):
            if use_katex:
                __M_writer('            <script src="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min.js"></script>\n            <script src="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/contrib/auto-render.min.js"></script>\n            <script>\n                renderMathInElement(document.body);\n            </script>\n')
            else:
                __M_writer('            <script type="text/javascript" src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"> </script>\n            <script type="text/x-mathjax-config">\n            MathJax.Hub.Config({tex2jax: {inlineMath: [[\'$latex \',\'$\'], [\'\\\\(\',\'\\\\)\']]}});\n            </script>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "index_helper.tmpl", "filename": "themes/overminddl1-mdl/templates/index_helper.tmpl", "source_encoding": "utf-8", "line_map": {"67": 26, "68": 27, "69": 28, "70": 29, "71": 34, "72": 35, "78": 72, "16": 0, "21": 24, "22": 41, "28": 2, "35": 2, "36": 3, "37": 4, "38": 5, "39": 6, "40": 6, "41": 6, "42": 6, "43": 6, "44": 10, "45": 10, "46": 13, "47": 14, "48": 15, "49": 15, "50": 15, "51": 15, "52": 15, "53": 16, "54": 16, "55": 22, "61": 26}}
__M_END_METADATA
"""
