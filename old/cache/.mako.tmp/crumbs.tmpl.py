# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.4079049
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/crumbs.tmpl'
_template_uri = 'crumbs.tmpl'
_source_encoding = 'utf-8'
_exports = ['bar']


def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        __M_writer = context.writer()
        __M_writer('\n')
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_bar(context,crumbs):
    __M_caller = context.caller_stack._push_frame()
    try:
        breadcrumb_separator = context.get('breadcrumb_separator', UNDEFINED)
        enumerate = context.get('enumerate', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if crumbs:
            __M_writer('<div class="site-breadcrumbs">\n')
            for idx, [link, text] in enumerate(crumbs):
                if not idx:
                    if link == '#':
                        __M_writer('                ')
                        __M_writer(str(text.rsplit('.html', 1)[0]))
                        __M_writer('\n')
                    else:
                        __M_writer('                <a href="')
                        __M_writer(str(link))
                        __M_writer('">')
                        __M_writer(str(text))
                        __M_writer('</a>\n')
                else:
                    if breadcrumb_separator:
                        if link == '#':
                            __M_writer('                     &nbsp;')
                            __M_writer(str(breadcrumb_separator))
                            __M_writer('&nbsp;')
                            __M_writer(str(text.rsplit('.html', 1)[0]))
                            __M_writer('\n')
                        else:
                            __M_writer('                     &nbsp;')
                            __M_writer(str(breadcrumb_separator))
                            __M_writer('&nbsp;<a href="')
                            __M_writer(str(link))
                            __M_writer('">')
                            __M_writer(str(text))
                            __M_writer('</a>\n')
                    else:
                        if link == '#':
                            __M_writer('                     &nbsp;&gt;&nbsp;')
                            __M_writer(str(text.rsplit('.html', 1)[0]))
                            __M_writer('\n')
                        else:
                            __M_writer('                     &nbsp;&gt;&nbsp;<a href="')
                            __M_writer(str(link))
                            __M_writer('">')
                            __M_writer(str(text))
                            __M_writer('</a>\n')
            __M_writer('</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "crumbs.tmpl", "filename": "themes/overminddl1-mdl/templates/crumbs.tmpl", "source_encoding": "utf-8", "line_map": {"16": 0, "21": 2, "22": 31, "28": 3, "34": 3, "35": 4, "36": 5, "37": 6, "38": 7, "39": 8, "40": 9, "41": 9, "42": 9, "43": 10, "44": 11, "45": 11, "46": 11, "47": 11, "48": 11, "49": 13, "50": 14, "51": 15, "52": 16, "53": 16, "54": 16, "55": 16, "56": 16, "57": 17, "58": 18, "59": 18, "60": 18, "61": 18, "62": 18, "63": 18, "64": 18, "65": 20, "66": 21, "67": 22, "68": 22, "69": 22, "70": 23, "71": 24, "72": 24, "73": 24, "74": 24, "75": 24, "76": 29, "82": 76}}
__M_END_METADATA
"""
